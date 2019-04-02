# Maintainer: Massimiliano Torromeo <massimiliano.torromeo@gmail.com>

pkgname=nginx-mainline-mod-geoip2
pkgver=3.2
pkgrel=7

_modname="ngx_http_geoip2_module"
_nginxver=1.15.10

pkgdesc="GeoIP2 module for mainline nginx"
arch=('i686' 'x86_64')
depends=('nginx-mainline' 'libmaxminddb')
url="https://github.com/leev/ngx_http_geoip2_module"
license=('BSD')

source=(
	https://nginx.org/download/nginx-$_nginxver.tar.gz{,.asc}
	https://github.com/leev/ngx_http_geoip2_module/archive/$pkgver/$_modname-$pkgver.tar.gz
)

validpgpkeys=(
	'B0F4253373F8F6F510D42178520A9993A1C052F8' # Maxim Dounin <mdounin@mdounin.ru>
)

sha256sums=('b865743abd52bce4745d0f7e7fedde3cafbaaab617b022c105e3e4e456537c3c'
            'SKIP'
            '15bd1005228cf2c869a6f09e8c41a6aaa6846e4936c473106786ae8ac860fab7')

build() {
	cd "$srcdir"/nginx-$_nginxver
	./configure --with-compat --add-dynamic-module=../$_modname-$pkgver
	make modules
}

package() {
	install -Dm644 "$srcdir"/$_modname-$pkgver/LICENSE \
	               "$pkgdir"/usr/share/licenses/$pkgname/LICENSE

	cd "$srcdir"/nginx-$_nginxver/objs
	for mod in ngx_*.so; do
		install -Dm755 $mod "$pkgdir"/usr/lib/nginx/modules/$mod
	done
}
