# Maintainer: danieltetraquark
pkgname=scanservjs
pkgver=2.22.0
pkgrel=1
pkgdesc="SANE scanner nodejs web ui"
arch=('any')
url="https://github.com/sbs20/scanservjs"
license=('GPL')
depends=('sane' 'imagemagick' 'curl' 'nodejs' 'tesseract')
makedepends=('npm')
install=scanservjs.install
backup=('etc/webapps/scanservjs' 'var/lib/webapps/scanservjs')
source=(
"https://github.com/sbs20/scanservjs/archive/refs/tags/v${pkgver}.tar.gz"
"scanservjs.sysusersd"
)
sha512sums=('148ad273afe9a66a1d1fcb53dcb4226a824e9aefedb49ef90e72d0dffcbeea586e8b03289fc2142a84892849d1f576e82011559ae4d2c9311d3f987ca084bf09'
            '48cfc5f2ec0fb1428d6d745cfe9e63f1a020d8bdd94225058b9ab16e077ad83492a68b2b974a4c55f071bddf90202a8b3a7b25fdabdb20ac7a94cef8acd7e6d6')

build() {
    cd scanservjs-${pkgver}

    npm run install
    npm run build

    cd dist
    npm install --production

}

package() {
    install -Dm644 "${srcdir}/scanservjs.sysusersd" "${pkgdir}/usr/lib/sysusers.d/scanservjs.conf"

    cd scanservjs-${pkgver}

    # install LICENSE
    install -Dm644 "LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
    # install documentation
    install -Dm644 ./docs/* -t "${pkgdir}/usr/share/doc/scanservjs/"


    install -d "${pkgdir}/usr/share/webapps/scanservjs" "${pkgdir}/etc/webapps/scanservjs" "${pkgdir}/var/lib/webapps/scanservjs"

    # remove the installer, and systemd from the scanservjs directory in /usr/share/webapps
    rm dist/installer.sh dist/scanservjs.service

    mv dist/config/* "${pkgdir}/etc/webapps/scanservjs/"
    mv dist/data/* "${pkgdir}/var/lib/webapps/scanservjs/"

    chmod +x dist/server/server.js

    # install main files
    cp -r dist/* "${pkgdir}/usr/share/webapps/scanservjs/"

    # replace /var/www/scanservjs/ in systemd service
    sed -i 's?/var/www/scanservjs?/usr/share/webapps/scanservjs?' packages/server/scanservjs.service
    sed -i 's?Group=users??' packages/server/scanservjs.service
    install -Dm644  packages/server/scanservjs.service "${pkgdir}/usr/lib/systemd/system/scanservjs.service"

    rm -d ${pkgdir}/usr/share/webapps/scanservjs/config "${pkgdir}/usr/share/webapps/scanservjs/data"
    ln -s /etc/webapps/scanservjs "${pkgdir}/usr/share/webapps/scanservjs/config"
    ln -s /var/lib/webapps/scanservjs "${pkgdir}/usr/share/webapps/scanservjs/data"
}
