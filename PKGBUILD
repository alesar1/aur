# Maintainer: Mark Weiman

pkgname=php-alpm
_extname=alpm
pkgver=0.3.1
pkgrel=1
pkgdesc="A PHP extension to use Arch Linux's ALPM"
arch=('i686' 'x86_64')
url="https://github.com/markzz/php-alpm"
license=('GPL2')
depends=('php>=7.0' 'pacman>=5.0')
install="${pkgname}.install"
source=("php-alpm-${pkgver}.tar.gz::https://github.com/markzz/${pkgname}/archive/${pkgver}.tar.gz")
md5sums=('96fe6802ae5256f67d64471b40116191')

build() {
  cd "${pkgname}-${pkgver}"

  phpize
  ./configure --with-php-config=/usr/bin/php-config --prefix=/usr
  make
}

package() {
  cd "${pkgname}-${pkgver}"
  make INSTALL_ROOT="${pkgdir}" install
  echo "extension=${_extname}.so" > "${_extname}.ini"
  install -D -m644 "${_extname}.ini" "${pkgdir}/etc/php/conf.d/${_extname}.ini"
}
