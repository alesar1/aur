# Maintainer: Damien Guihal <dguihal@gmail.com>
# Maintainer: Rodrigo Bezerra <rodrigobezerra21 at gmail dot com>

pkgname=vdhcoapp
pkgver=1.1.2
pkgrel=2
pkgdesc="Companion application for Video DownloadHelper browser add-on"
arch=('i686' 'x86_64')
url="https://github.com/mi-g/vdhcoapp"
license=('GPL2')
depends=('ffmpeg')
makedepends=('gulp' 'npm')
options=(!strip)
source=($pkgname-$pkgver.tar.gz::https://github.com/mi-g/vdhcoapp/archive/v${pkgver}.tar.gz
        vdhcoapp.patch
        vdhcoapp-install.hook
        vdhcoapp-remove.hook)
sha256sums=('7b40d71af633a130f891c2d42751c690151844e6c0175006db630eb1f8060777'
            'c0cfe77bb03b1db0f22a3526868ddba79c7b40d2e03bb278b427594567c6b062'
            '9f8cbe84b2543738390b70d770551259c6db2b67235b7792e9094908cecbc955'
            '448ee36b350b6bcd304d33cf7638c13bda88d5086f2256e823d73ccc22e52ce0')

prepare() {
    cd ${pkgname}-${pkgver}

    patch -Np2 -i "${srcdir}/vdhcoapp.patch"
}

build() {
    cd "${pkgname}-${pkgver}"

    npm install

    gulp
}

package() {
    cd "${pkgname}-${pkgver}"

    install -Dm755 bin/net.downloadhelper.coapp-* "${pkgdir}/usr/bin/vdhcoapp"
    install -Dm644 config.json "${pkgdir}/usr/share/vdhcoapp/config.json"

    install -dm755 "${pkgdir}/usr/lib/mozilla/native-messaging-hosts/"
    install -dm755 "${pkgdir}/etc/opt/chrome/native-messaging-hosts/"
    install -dm755 "${pkgdir}/etc/chromium/native-messaging-hosts/"

    install -Dm644 "${srcdir}/vdhcoapp-install.hook" "${pkgdir}/usr/share/libalpm/hooks/vdhcoapp-install.hook"
    install -Dm644 "${srcdir}/vdhcoapp-remove.hook" "${pkgdir}/usr/share/libalpm/hooks/vdhcoapp-remove.hook"
}

# vim:set ts=2 sw=2 et:
