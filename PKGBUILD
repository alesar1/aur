# Maintainer: Massimiliano Torromeo <massimiliano.torromeo@gmail.com>

pkgname=nginx-mainline-mod-redis
pkgver=0.3.8
pkgrel=20

_modname="${pkgname#nginx-mainline-mod-}"
_nginxver=1.15.5

pkgdesc='Redis caching module for mainline nginx'
arch=('i686' 'x86_64')
depends=('nginx-mainline')
url="https://www.nginx.com/resources/wiki/modules/redis/"
license=('CUSTOM')

source=(
	https://nginx.org/download/nginx-$_nginxver.tar.gz
	http://people.freebsd.org/~osa/ngx_http_redis-$pkgver.tar.gz
)

sha256sums=('1a3a889a8f14998286de3b14cc1dd5b2747178e012d6d480a18aa413985dae6f'
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
