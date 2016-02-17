# Maintainer: Benjamin A. Shelton <zancarius@gmail.com>
# Source: https://github.com/zancarius/archlinux-pkgbuilds

pkgname=phing
pkgver=2.13.0
pkgrel=1
pkgdesc="PHP project build system based on Apache Ant."
arch=(any)
url="http://www.phing.info/"
license=(LGPL)
depends=(php)
install="${pkgname}.install"
source=(
    "http://www.phing.info/get/phing-${pkgver}.phar"
    phing.install
    phar.ini
)
sha256sums=(
    5b08b1f44b05b02a298400aa51ede8e0849b885ed6e27357bc86f5b011876aca # phing PHAR
    9c9926fcea67efad95adceeaa973cd86f99681a74d22b93d2c5fa506679c65cd # phing.install
    b189ab599a2760b7627820dffece09a4323c9ed2e042c2517e97801f602b318e # phar.ini
)

package() {
    install -Dm0644 "${srcdir}/phar.ini" "${pkgdir}/etc/php/conf.d/phar.ini"
    install -Dm0755 "${srcdir}/${pkgname}-${pkgver}.phar" "${pkgdir}/usr/bin/${pkgname}-${pkgver}.phar"
    ln --relative -s "${pkgdir}/usr/bin/${pkgname}-${pkgver}.phar" "${pkgdir}/usr/bin/phing"
}
