# Maintainer: Stefan Auditor <stefan.auditor@erdfisch.de>
# Co-Maintainer: Marc Straube <email@marcstraube.de>
# Contributor: Attila Bukor <r1pp3rj4ck [at] w4it [dot] eu>

_pkgname=phpunit
pkgname=${_pkgname}
pkgver=5.2.3
pkgrel=1
pkgdesc="PHPUnit is a programmer-oriented testing framework for PHP."
url="https://phpunit.de"
arch=("any")
license=("BSD")
depends=("php")
install="${_pkgname}.install"
source=("https://phar.phpunit.de/phpunit-${pkgver}.phar"
        "https://raw.githubusercontent.com/sebastianbergmann/phpunit/${pkgver}/LICENSE")
sha512sums=('f107ea6361d9957e02c8f596f1b1bd331afa3447fe79fe48eb4ec9a79f31599bd2a998d304399a5adba08b72b857510f9bc0e3e2fe394ebdd757d6b555f4a68b'
            '62e7d1d00af9db6ef5d2ba79a8039f4df2d00ef8124678b4c56d94e69e210e0e74e2f2156e469c57c1e24354cbd3a8ae97059917e364aaa52e9892f814adede3')

package() {
  install -D -m 644 "${srcdir}/LICENSE" "${pkgdir}/usr/share/licenses/${_pkgname}/LICENSE"
  install -D -m 755 "${srcdir}/${_pkgname}-${pkgver}.phar" "${pkgdir}/usr/share/webapps/bin/${_pkgname}.phar"
  install -d "${pkgdir}/usr/bin"
  ln -s "/usr/share/webapps/bin/${_pkgname}.phar" "${pkgdir}/usr/bin/${_pkgname}"
}
