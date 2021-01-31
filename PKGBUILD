# Maintainer: GI_Jack <GI_Jack@hackermail.com>
# Original: zer0def <zer0def on freenode>

pkgname=signald
pkgver=0.12.0
pkgrel=1
pkgdesc='An unofficial daemon that facilitates communication with the Signal messaging app.'
url='https://gitlab.com/signald/signald'
license=('GPL3')
arch=('any')
makedepends=('gradle')
depends=('java-runtime>=11')
optdepends=('qrencode: display account linking token as QR code')
conflicts=('signald-git')
source=("${pkgname}-${pkgver}.tar.gz::https://gitlab.com/signald/signald/-/archive/${pkgver}/signald-${pkgver}.tar.gz"
        'gradle-no-daemon.patch'
        'signald.install')
sha512sums=('a73663bfb16104841fa171981f54caf0528a6700266dc20adc72a7342aed3d19cebdcff278de3b34298c163f9f7a934e07f830f62f159b0769e776a36eab6d74'
            'aa2ff9eef6ebd8ad31275a587b7b24e34938e9744b06892c96d43e274b18a15d2f0258f56cea8fea9163e85a754ebde1e66c20781876bcb524960defe02ce535'
            '9ac1f323657bdf0357d005635394f0b21a74a76d3b25307c9ccec32c10eed00686e584a021028658ebd023c029c3b44485713532bb6f04b30c887790bf617a42')
backup=('var/lib/signald/data')

install=${pkgname}.install
_daemon_uid=565

prepare() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    patch -Np1 < ${srcdir}/gradle-no-daemon.patch
}

build() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    make installDist
}

package() {
    cd "${srcdir}/${pkgname}-${pkgver}"

    rm "build/install/signald/bin/signald.bat"
    install -dm755 "${pkgdir}/var/lib/signald/data"
    cp -dr --no-preserve=ownership "build/install/signald/" "${pkgdir}/var/lib/"
    chown -R ${_daemon_uid}:${_daemon_uid} "${pkgdir}/var/lib/signald/"

    install -dm755 "${pkgdir}/usr/bin/"
    ln -s ../../var/lib/signald/bin/signald "${pkgdir}/usr/bin/signald"
    install -Dm644 "${srcdir}/${pkgname}-${pkgver}/debian/signald.service" "${pkgdir}/usr/lib/systemd/system/signald.service"

    install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
