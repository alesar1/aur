# Maintainer: Massimiliano Torromeo <massimiliano.torromeo@gmail.com>

pkgname=nginx-mainline-mod-srcache
pkgver=0.31
pkgrel=32

_modname="${pkgname#nginx-mainline-mod-}"
_nginxver=1.17.7

pkgdesc='Transparent subrequest-based caching layout for arbitrary nginx locations (module for mainline nginx)'
arch=('i686' 'x86_64')
depends=('nginx-mainline')
url="https://github.com/openresty/srcache-nginx-module"
license=('BSD')

source=(
	https://nginx.org/download/nginx-$_nginxver.tar.gz{,.asc}
	https://github.com/openresty/$_modname-nginx-module/archive/v$pkgver/$_modname-$pkgver.tar.gz
)

validpgpkeys=(
	'B0F4253373F8F6F510D42178520A9993A1C052F8' # Maxim Dounin <mdounin@mdounin.ru>
)

sha256sums=('b62756842807e5693b794e5d0ae289bd8ae5b098e66538b2a91eb80f25c591ff'
            'SKIP'
            '3f9729e73a8340926fa9d9fc15707c2f287cd27b6a9fe42e83f660ca48a5972d')

build() {
	cd "$srcdir"/nginx-$_nginxver
	./configure --with-compat --add-dynamic-module=../$_modname-nginx-module-$pkgver
	make modules
}

package() {
	cd "$srcdir"/nginx-$_nginxver/objs
	for mod in *.so; do
		install -Dm755 $mod "$pkgdir"/usr/lib/nginx/modules/$mod
	done
}
