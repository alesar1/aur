# Maintainer: Stefan Auditor <stefan.auditor@erdfisch.de>
# Please report issues at https://github.com/sanduhrs/arch-aur-drupalconsole

_pkgname=drupalconsole
pkgname=${_pkgname}
pkgver=1.0.0_rc13
pkgrel=1
pkgdesc="The Drupal Console is a suite of tools that you run on a command line interface (CLI) to generate boilerplate code and interact with a Drupal 8 installation."
arch=('any')
url="http://drupalconsole.com/"
license=('GPL')
depends=('php')
makedepends=("php-box" "php-composer" "git")
install="${_pkgname}.install"
source=("${_pkgname}-${pkgver//_/-}"::"https://github.com/hechoendrupal/drupal-console-launcher/archive/${pkgver//_/-}.tar.gz")
sha512sums=('09043f11281921075f45bfa69f3c9ea3df77c421f065cb4e3db513fb56468f451843d57cbe07b6123bc28f7cff8b1366dc0e6463a1e2e3e91e7a4c5f05d2d831')

build() {
  cd "${srcdir}/drupal-console-launcher-${pkgver//_/-}"
  php /usr/bin/composer install --no-dev
  php -d phar.readonly=Off /usr/bin/php-box build
}

package() {
  cd "${srcdir}/drupal-console-launcher-${pkgver//_/-}"
  install -D -m755 "drupal.phar" "${pkgdir}/usr/bin/drupal"
}
