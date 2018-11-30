# Maintainer: Massimiliano Torromeo <massimiliano.torromeo@gmail.com>

pkgname=nginx-mainline-mod-redis
pkgver=0.3.8
pkgrel=22

_modname="${pkgname#nginx-mainline-mod-}"
_nginxver=1.15.6

pkgdesc='Redis caching module for mainline nginx'
arch=('i686' 'x86_64')
depends=('nginx-mainline')
url="https://www.nginx.com/resources/wiki/modules/redis/"
license=('CUSTOM')

source=(
	https://nginx.org/download/nginx-$_nginxver.tar.gz{,.asc}
	http://people.freebsd.org/~osa/ngx_http_redis-$pkgver.tar.gz
)

validpgpkeys=(
	'B0F4253373F8F6F510D42178520A9993A1C052F8' # Maxim Dounin <mdounin@mdounin.ru>
)

sha256sums=('a3d8c67c2035808c7c0d475fffe263db8c353b11521aa7ade468b780ed826cc6'
            'SKIP'
            '95d0ed7be40da2efc88883d72e52e5e272d2c34463583b7078e8fd6d55004934')

build() {
	cd "$srcdir"/nginx-$_nginxver
	./configure --with-compat --add-dynamic-module=../ngx_http_redis-$pkgver
	make modules
}

package() {
	install -Dm644 "$srcdir"/ngx_http_redis-$pkgver/LICENSE \
	               "$pkgdir"/usr/share/licenses/$pkgname/LICENSE

	cd "$srcdir"/nginx-$_nginxver/objs
	for mod in *.so; do
		install -Dm755 $mod "$pkgdir"/usr/lib/nginx/modules/$mod
	done
}
