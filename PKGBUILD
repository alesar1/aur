# Maintainer: Reto Brunner <brunnre8@gmail.com>
# Maintainer: Maxime Poulin <maxpoulin64@gmail.com>
pkgname=thelounge
pkgver=4.3.0
pkgrel=2
pkgdesc='Modern self-hosted web IRC client'
url='https://thelounge.chat/'
arch=('any')
license=('MIT')
depends=('nodejs')
makedepends=('npm')
backup=('etc/thelounge/config.js')
source=(
    "https://registry.npmjs.org/$pkgname/-/$pkgname-$pkgver.tgz"
    'system.service'
    'user.service'
    'sysusers.d'
    'tmpfiles.d'
)
noextract=("$pkgname-$pkgver.tgz")
sha256sums=('2e956eea3d18dc0f0ce508685c25843012fe353528853f1608d4b9997aa5913e'
            'c92210f6ac8f01c1cd01b6b26793094cd2feea583ed21fab3564d6bcafdc7a20'
            'c609f3309f54bd6285e99ff29ca2464828bec7bbbca67243ee688bd2d605dbf0'
            '30fab63b8a4ffcfdda4c5b8d7c66822a323c4f1de6ca62b77fe9500f4befc0a5'
            'bade9cf0e9fb27328db0c9d7300e9e215f2ff79305d94f1797d946e065a714bf')

package() {
    export NODE_ENV=production

    npm install -g --prefix "$pkgdir/usr" "$pkgname-$pkgver.tgz" --cache "${srcdir}/npm-cache"

    # Non-deterministic race in npm gives 777 permissions to random directories.
    # See https://github.com/npm/npm/issues/9359 for details.
    find "$pkgdir/usr" -type d -exec chmod 755 '{}' +

    # npm gives ownership of ALL FILES to build user
    # https://bugs.archlinux.org/task/63396
    chown -R root:root "${pkgdir}"

    echo /etc/thelounge > "$pkgdir/usr/lib/node_modules/$pkgname/.thelounge_home"

    # add default config
    install -Dm 644 "$pkgdir/usr/lib/node_modules/$pkgname/defaults/config.js" "$pkgdir/etc/thelounge/config.js"

    # services
    install -Dm644 "$srcdir/system.service" "$pkgdir/usr/lib/systemd/system/$pkgname.service"
    install -Dm644 "$srcdir/user.service" "$pkgdir/usr/lib/systemd/user/$pkgname.service"

    # setting up system user
    install -Dm644 "${srcdir}/sysusers.d" "${pkgdir}/usr/lib/sysusers.d/thelounge.conf"
    install -Dm644 "${srcdir}/tmpfiles.d" "${pkgdir}/usr/lib/tmpfiles.d/thelounge.conf"
}
