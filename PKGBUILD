# Maintainer: <max at swk-web.com>

pkgname=php-stan
pkgver=0.12.34
pkgrel=1
pkgdesc="PHP Static Analysis Tool - finding errors in your code without actually running it"
arch=('any')
url="https://github.com/phpstan/phpstan"
license=('MIT')
depends=('php')
source=("phpstan-${pkgver}.phar::https://github.com/phpstan/phpstan/releases/download/${pkgver}/phpstan.phar"
        "phpstan-${pkgver}.phar.asc::https://github.com/phpstan/phpstan/releases/download/${pkgver}/phpstan.phar.asc")
validpgpkeys=('D32680D5957DC7116BE29C14CF1A108D0E7AE720')
sha256sums=('d84be348aaa01fd2de07b9918cae47e0a14ca2e54f537cfff2e8d101042283af'
            'SKIP')

package() {
  install -d "${pkgdir}/usr/share/webapps/bin"
  install -D -m 755 "${srcdir}/phpstan-${pkgver}.phar" "${pkgdir}/usr/share/webapps/bin/phpstan.phar"

  install -d "${pkgdir}/usr/bin"
  ln -s "/usr/share/webapps/bin/phpstan.phar" "${pkgdir}/usr/bin/phpstan"
}
