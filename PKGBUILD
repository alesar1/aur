# Maintainer: Stefan Auditor <stefan.auditor@erdfisch.de>
# Contributor: Attila Bukor <r1pp3rj4ck [at] w4it [dot] eu>
pkgname=phpunit
pkgver=4.7.7
pkgrel=1
pkgdesc="PHPUnit is a programmer-oriented testing framework for PHP."
url="https://phpunit.de"
arch=('any')
license=('BSD')
depends=('php')
install='phpunit.install'
source=("https://phar.phpunit.de/phpunit-${pkgver}.phar"
        'phpunit.install')
md5sums=('f7d59a6924b2e3ee35ab70a637451abc'
         '1fbae58bd7ae27afdf86ce14985dedd8')

package() {
  install -D -m 755 "${srcdir}/phpunit-${pkgver}.phar" "${pkgdir}/usr/share/webapps/bin/phpunit.phar"
  install -d "${pkgdir}/usr/bin"
  ln -s /usr/share/webapps/bin/phpunit.phar "${pkgdir}/usr/bin/phpunit"
}
