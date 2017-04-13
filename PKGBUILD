# Maintainer: Massimiliano Torromeo <massimiliano.torromeo@gmail.com>

pkgname=nginx-mainline-mod-memc
pkgver=0.17
pkgrel=2

_modname="${pkgname#nginx-mainline-mod-}"
_nginxver=1.12.0

pkgdesc='Extended version of the standard memcached module for mainline nginx'
arch=('i686' 'x86_64')
depends=('nginx-mainline')
url="https://github.com/openresty/memc-nginx-module"
license=('BSD')

source=(
	http://nginx.org/download/nginx-$_nginxver.tar.gz
	https://github.com/openresty/$_modname-nginx-module/archive/v$pkgver/$_modname-$pkgver.tar.gz
	$pkgname-$pkgver-default_port.patch::https://github.com/openresty/memc-nginx-module/commit/c08cb7043440e427867838caf21cfd1e6cb2127a.patch
)

sha256sums=('b4222e26fdb620a8d3c3a3a8b955e08b713672e1bc5198d1e4f462308a795b30'
            '25cbe3ff4931283a681260607bc91ae4a922075345d5770b293c6cd7f1e3bdcc'
            'b5f9b83a0d2a08f1efc71ce8099eaa4e1d283afd502a7062ac4f150d569140ff')

prepare() {
	cd "$srcdir"/$_modname-nginx-module-$pkgver
	patch -p1 -i "$srcdir"/$pkgname-$pkgver-default_port.patch
}

build() {
	cd "$srcdir"/nginx-$_nginxver
	./configure $(nginx -V 2>&1 | grep 'configure arguments' | sed -r 's@^[^:]+: @@') --add-dynamic-module=../$_modname-nginx-module-$pkgver
	make modules
}

package() {
	cd "$srcdir"/nginx-$_nginxver/objs
	for mod in *.so; do
		install -Dm755 $mod "$pkgdir"/usr/lib/nginx/modules/$mod
	done
}
