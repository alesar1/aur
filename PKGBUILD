# Maintainer: Stephan Springer <buzo+arch@Lini.de>
# Contributor: Giovanni Harting <539@idlegandalf.com>

pkgname=cryptpad
pkgver=4.3.1
pkgrel=3
pkgdesc="Realtime collaborative visual editor with zero knowlege server"
arch=('any')
url="https://github.com/xwiki-labs/cryptpad"
license=(AGPL3)
depends=(nodejs)
makedepends=(bower npm git)
backup=(etc/webapps/"$pkgname"/config.js)
options=(!strip) # There are no ELF files, no need to strip anything.
source=("$pkgname-$pkgver.tar.gz::https://github.com/xwiki-labs/cryptpad/archive/$pkgver.tar.gz"
        "cryptpad.service"
        "cryptpad.sysusers"
        "cryptpad.tmpfiles")
sha256sums=('7d4d3652e911b5f78439c7b2deea48ad0df179a633dc4e9d229aeb0714c1a3d2'
            '331e215d41a4e4edffbb5215dc497cd9b04f61e82c744616cb1aa91dd3e8128d'
            '999a271d64b75c7c447fdb21486b27463c04679677e57ea9551a3b0429c618f6'
            '617ee2a7b3e81184dc82df8b800898092b1001fdbd57c3edc317512e3aee70a0')

package() {
    cd "$pkgname-$pkgver"
    export NODE_ENV=production
    npm install --user root --prefix "$pkgdir/usr/share/webapps/$pkgname" --cache "$srcdir"/npm-cache
    bower install --allow-root
    # remove unneeded man pages
    sed -i '/"man/d' www/bower_components/marked/package.json
    rm -r www/bower_components/marked/man

    # npm gives ownership of ALL FILES to build user
    # https://bugs.archlinux.org/task/63396
    chown -R root:root "$pkgdir"

    # Remove references to $pkgdir
    find "$pkgdir" -type f -name package.json -print0 | xargs -0 sed -i '/_where/d'

    # Documentation
    install -t "$pkgdir/usr/share/doc/$pkgname" -Dm 644 docs/{ARCHITECTURE.md,example.nginx.conf} CHANGELOG.md

    # Cryptpad
    install -Dt "$pkgdir/usr/share/webapps/$pkgname" package.json server.js
    cp -rt "$pkgdir/usr/share/webapps/$pkgname" customize.dist lib scripts www
    rmdir "$pkgdir/usr/share/webapps/$pkgname/www/bower_components/codemirror/mode/rpm/changes"
    # Config
    sed -e "s|\(Path: '\)\./|\1/var/lib/cryptpad/|" \
        -e "s|'/var/lib/cryptpad/data/logs'|false|" \
        -e "s|logToStdout: false|logToStdout: true|" \
        -i config/config.example.js

    install -Dm 644 config/config.example.js "${pkgdir}/etc/webapps/$pkgname/config.js"
    ln -s ../../../../etc/webapps/"$pkgname" "$pkgdir/usr/share/webapps/$pkgname/config"
    install -d "$pkgdir/var/lib/$pkgname"/{blob,block,data{,store},logs}
    ln -s ../../../../var/lib/"$pkgname"/{blob,block,data{,store}} "$pkgdir/usr/share/webapps/$pkgname"

    # systemd
    install -Dm 644 "${srcdir}"/cryptpad.sysusers "${pkgdir}"/usr/lib/sysusers.d/cryptpad.conf
    install -Dm 644 "${srcdir}"/cryptpad.service "${pkgdir}"/usr/lib/systemd/system/cryptpad.service
    install -Dm 644 "${srcdir}"/cryptpad.tmpfiles "${pkgdir}"/usr/lib/tmpfiles.d/cryptpad.conf
}
