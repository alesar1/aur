# Maintainer: Stefan Auditor <stefan.auditor@erdfisch.de>
pkgname=phpmetrics
pkgver=1.1.1
pkgrel=2
pkgdesc="A static analysis tool for PHP"
url="http://www.phpmetrics.org/"
arch=("any")
license=("MIT")
depends=("php")
install="${pkgname}.install"
source=("https://github.com/Halleck45/PhpMetrics/raw/v${pkgver}/build/${pkgname}.phar"
        "https://raw.githubusercontent.com/Halleck45/PhpMetrics/v${pkgver}/LICENSE"
        "${pkgname}.install")
sha512sums=('f88fe23d215cd06e094e0b00be6a59f9e98147fa07059f7bca7c9068c0b5716ca4b7d7f44c1ffdedb04e4e73ef185992a9b4b3fa55898af6f81b69c44961461a'
            'be822058c3c747ff43933ef66163ae99ed3901f8633f561811ada1d7d761309188301ae6ace33d3f53195793f0a500462ee666c7089faa2c80b6d9809a1b61b3'
            '5144d60d89677bda0dfef947b9a89428393d7cdba926b1b1a790223637d42c2558fb768039b2f00dcf1226eba89f5679902670f07be2add85fa9a0b5fd320538')

package() {
  install -D -m 644 "${srcdir}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  install -D -m 755 "${srcdir}/${pkgname}.phar" "${pkgdir}/usr/share/webapps/bin/${pkgname}.phar"
  install -d "${pkgdir}/usr/bin"
  ln -s "/usr/share/webapps/bin/${pkgname}.phar" "${pkgdir}/usr/bin/${pkgname}"
}
