# Maintainer: Alex "grevus" Lobtsov <alex@lobtsov.com>
pkgname=php-redis
pkgver=3.1.2
pkgrel=2
pkgdesc="PHP extension for interfacing with Redis"
url="http://pecl.php.net/package/redis"
arch=('x86_64' 'i686' 'armv7h')
license=('PHP')
depends=(
    'php>=7.0.0'
)
conflicts=(
    'phpredis'
    'phpredis-git'
    'php-redis-git'
)
backup=('etc/php/conf.d/redis.ini')

source=(
    http://pecl.php.net/get/redis-${pkgver}.tgz
)

sha256sums=('a7687d007e48bef92049b8f53b425244d663da57d6b646d139248839e01f4ea3')

build() {
  cd "$srcdir/redis-$pkgver"

  phpize
  ./configure --prefix=/usr
  make
}

package() {
  cd "$srcdir/redis-$pkgver"

  make INSTALL_ROOT="$pkgdir" install
  echo ';extension=redis.so' > redis.ini
  install -Dm644 redis.ini "$pkgdir/etc/php/conf.d/redis.ini"
}
