# Maintainer Max <max@swk-web.com>
# Contributor: Stefan Auditor <stefan.auditor@erdfisch.de>
# Contributor: Marc Straube <email@marcstraube.de>
# Contributor: Attila Bukor <r1pp3rj4ck [at] w4it [dot] eu>

_pkgname=phpunit
pkgname=${_pkgname}
pkgver=9.5.13
pkgrel=1
pkgdesc="PHPUnit is a programmer-oriented testing framework for PHP."
url="https://phpunit.de"
arch=("any")
license=("BSD")
depends=("php>=7.0.0")
install="${_pkgname}.install"
source=("https://phar.phpunit.de/phpunit-${pkgver}.phar"
        "https://phar.phpunit.de/phpunit-${pkgver}.phar.asc"
        "LICENSE-${pkgver}::https://raw.githubusercontent.com/sebastianbergmann/phpunit/${pkgver}/LICENSE")
# To add the key use gpg
#  gpg --keyserver pgp.uni-mainz.de --recv-keys 4AA394086372C20A
validpgpkeys=('D8406D0D82947747293778314AA394086372C20A')
sha256sums=('16742686383afac8a7a1e3f905862d77169746b0342f66ab80b0148582e5472a'
            'SKIP'
            'c97186cfefa783568a49feaef88405390b9763def6af1b5a8c06e4f6a3113eb2')

package() {
  install -D -m 644 "${srcdir}/LICENSE-${pkgver}" "${pkgdir}/usr/share/licenses/${_pkgname}/LICENSE"
  install -D -m 755 "${srcdir}/${_pkgname}-${pkgver}.phar" "${pkgdir}/usr/share/webapps/bin/${_pkgname}.phar"
  install -d "${pkgdir}/usr/bin"
  ln -s "/usr/share/webapps/bin/${_pkgname}.phar" "${pkgdir}/usr/bin/${_pkgname}"
}
