# Maintainer:  Bruce Zhang
# Contributor: 吕海涛 <aur@lvht.net>
pkgname=php-swoole
_extname=swoole
_reponame=swoole-src
pkgver=4.5.4
pkgrel=1
pkgdesc="Event-driven asynchronous and concurrent networking engine with high performance for PHP."
url="https://github.com/swoole/swoole-src"
arch=('x86_64')
license=('Apache')
depends=('nghttp2' 'php')
provides=('php-swoole')
backup=("etc/php/conf.d/$_extname.ini")
source=("$pkgname-$pkgver.src.tar.gz::https://github.com/swoole/$_reponame/archive/v$pkgver.tar.gz")
sha256sums=('454e4c9d8ba5d8261a23b3baf5bb4f718fa91e2e3e79273960bb82b317d9bc53')
install=php-swoole.install

build() {
  cd "$srcdir/$_reponame-$pkgver"
	phpize
	./configure --enable-http2 --enable-openssl
	make
}

package() {
  cd "$srcdir/$_reponame-$pkgver"
	install -m0755 -d "$pkgdir/etc/php/conf.d/"
	install -m0644 -D "LICENSE" "${pkgdir}/usr/share/licenses/$pkgname/LICENSE"
	echo ";extension=$_extname.so" > "$pkgdir/etc/php/conf.d/$_extname.ini"
	chmod 0644 "$pkgdir/etc/php/conf.d/$_extname.ini"
	install -m0755 -D ".libs/$_extname.so" "$pkgdir$(php-config --extension-dir)/$_extname.so"
}
