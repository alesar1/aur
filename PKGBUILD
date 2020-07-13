# Maintainer: Massimiliano Torromeo <massimiliano.torromeo@gmail.com>

pkgname=nginx-mainline-mod-passenger
pkgver=6.0.2
pkgrel=15

_modname="${pkgname#nginx-mainline-mod-}"
_nginxver=1.19.1

pkgdesc="Fast and robust web server and application server for Ruby, Python and Node.js (module for mainline nginx)"
arch=('i686' 'x86_64')
depends=('nginx-mainline' 'ruby')
makedepends=('ruby-rake')
url="https://www.phusionpassenger.com"
license=('MIT')

source=(
	https://nginx.org/download/nginx-$_nginxver.tar.gz{,.asc}
	https://github.com/phusion/passenger/archive/release-$pkgver/$_modname-$pkgver.tar.gz
)

validpgpkeys=(
	'B0F4253373F8F6F510D42178520A9993A1C052F8' # Maxim Dounin <mdounin@mdounin.ru>
)

sha256sums=('a004776c64ed3c5c7bc9b6116ba99efab3265e6b81d49a57ca4471ff90655492'
            'SKIP'
            '32a2e4d78cdf782c52172020d016297a3065ee85eef7cdbe8422bb7bb3741887')

build() {
	cd "$srcdir"/nginx-$_nginxver
	./configure --with-compat --add-dynamic-module=../$_modname-release-$pkgver/src/nginx_module
	make modules
}

package() {
	install -Dm644 "$srcdir"/$_modname-release-$pkgver/LICENSE \
	               "$pkgdir"/usr/share/licenses/$pkgname/LICENSE

	cd "$srcdir"/nginx-$_nginxver/objs
	for mod in ngx_*.so; do
		install -Dm755 $mod "$pkgdir"/usr/lib/nginx/modules/$mod
	done
}
