# Mantainer: Bruno Galeotti <bgaleotti@gmail.com>

pkgname=php-ds
pkgver=1.1.4
pkgrel=1
pkgdesc='Data structures for PHP 7.'
url='https://github.com/php-ds/extension'
license=('MIT')
arch=('any')
depends=('php')
conflicts=('php-ds-git')
backup=('etc/php/conf.d/ds.ini')
source=(https://pecl.php.net/get/ds-$pkgver.tgz
        ds.ini)
md5sums=('ef1d6d7f01429b8156b9fc78d0ed2447'
         'a50c990f8285a21242caa1a955a35707')

build() {
  cd $srcdir/ds-$pkgver
  phpize
  ./configure
  make
}

package() {
  install -Dm744 $srcdir/ds-$pkgver/modules/ds.so $pkgdir/usr/lib/php/modules/ds.so
  install -Dm644 ds.ini $pkgdir/etc/php/conf.d/ds.ini
}

# vim:set ts=2 sw=2 et:
