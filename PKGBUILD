# Maintainer: Stefan Auditor <stefan.auditor@erdfisch.de>
pkgname=phpcov
pkgver=2.0.2
pkgrel=2
pkgdesc="A command-line frontend for the PHP_CodeCoverage library."
url="https://github.com/sebastianbergmann/phpcov"
arch=("any")
license=("BSD")
depends=("php")
install="${pkgname}.install"
source=("https://phar.phpunit.de/${pkgname}-${pkgver}.phar"
        "https://raw.githubusercontent.com/sebastianbergmann/${pkgname}/${pkgver}/LICENSE")
sha512sums=('bfb156a3be17448e2a4ab57e27dd37475df55410837d43cb680bc12af4ec7f4b588326a8215c59f133dd398138e93ed8b13ff23a62d3196d804577754b9c8ac9'
            '0c378b544f9c7b28ef0cb9c7e43dfb9108943c6a050a7cd28bcfa713f091659c6766c56ef2736d133e4644a79d10ba96fcfb2bd65a52a5137d4d0d3933db442a')

package() {
  install -D -m 644 "${srcdir}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  install -D -m 755 "${srcdir}/${pkgname}-${pkgver}.phar" "${pkgdir}/usr/share/webapps/bin/${pkgname}.phar"
  install -d "${pkgdir}/usr/bin"
  ln -s "/usr/share/webapps/bin/${pkgname}.phar" "${pkgdir}/usr/bin/${pkgname}"
}
