# Maintainer: Massimiliano Torromeo <massimiliano.torromeo@gmail.com>

pkgname=nginx-mainline-mod-ndk
pkgver=0.3.0
pkgrel=1

_modname="ngx_devel_kit"
_nginxver=1.11.10

pkgdesc="Module for mainline nginx that adds generic tools that module developers can use"
arch=('i686' 'x86_64')
depends=('nginx-mainline')
url="https://github.com/simpl/ngx_devel_kit"
license=('BSD')

source=(
	http://nginx.org/download/nginx-$_nginxver.tar.gz
	https://github.com/simpl/$_modname/archive/$pkgver/$_modname-$pkgver.tar.gz
)

sha256sums=('778b3cabb07633f754cd9dee32fc8e22582bce22bfa407be76a806abd935533d'
            '88e05a99a8a7419066f5ae75966fb1efc409bad4522d14986da074554ae61619')

build() {
	cd "$srcdir"/nginx-$_nginxver
	./configure $(nginx -V 2>&1 | grep 'configure arguments' | sed -r 's@^[^:]+: @@') --add-dynamic-module=../$_modname-$pkgver
	make modules
}

package() {
	install -Dm644 "$srcdir"/$_modname-$pkgver/LICENSE \
	               "$pkgdir"/usr/share/licenses/$pkgname/LICENSE

	cd "$srcdir"/nginx-$_nginxver/objs
	for mod in *.so; do
		install -Dm755 $mod "$pkgdir"/usr/lib/nginx/modules/$mod
	done
}
