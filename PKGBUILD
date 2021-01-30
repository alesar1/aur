# Maintainer: Fabian Bornschein <plusfabi-cat-gmail-dog-com>
pkgname=game-devices-udev
pkgver=0.12
pkgrel=1
pkgdesc="Udev rules for controllers"
url='https://gitlab.com/fabis_cafe/game-devices-udev'
arch=('any')
license=('MIT')
depends=('udev')
makedepends=('git')
install="archlinux.install"
_commit=a2ce582deb3518a53896fadc5ca9d7e3155a637b # tags/0.12^0
source=("git+https://gitlab.com/fabis_cafe/game-devices-udev.git#commit=$_commit"
        "uinput.conf")
sha512sums=('SKIP'
            'a9b069ed121ffeee887e0583d8cb46035ecf1fa90a26a4ecb3aa11ff03178b2b08621f6676db6b2350f290694c04aabcf36f2ce3e0813a76dde9a33555edb112')

pkgver() {
    cd $pkgname
    git describe --tags | sed 's/-/+/g'
}

package() {
    # install license
    install -Dm 644 "${srcdir}/${pkgname}/LICENSE" \
        "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

    # install udev rules
    install -dm 755 "${pkgdir}/usr/lib/udev/rules.d"
    cp "${srcdir}/${pkgname}"/*.rules \
        "${pkgdir}/usr/lib/udev/rules.d/"

    # start uinput at boot
    install -Dm 644 "${srcdir}/uinput.conf" \
        "${pkgdir}/usr/lib/modules-load.d/uinput.conf"
}
