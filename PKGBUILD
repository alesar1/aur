# Maintainer: Massimiliano Torromeo <massimiliano.torromeo@gmail.com>

pkgname=nginx-mainline-mod-echo
pkgver=0.61
pkgrel=23

_modname="${pkgname#nginx-mainline-mod-}"
_nginxver=1.17.1

pkgdesc='Directives "echo", "sleep", "time" and more (module for mainline nginx)'
arch=('i686' 'x86_64')
depends=('nginx-mainline')
url="https://github.com/openresty/echo-nginx-module"
license=('BSD')

source=(
	https://nginx.org/download/nginx-$_nginxver.tar.gz{,.asc}
	https://github.com/openresty/$_modname-nginx-module/archive/v$pkgver/$_modname-$pkgver.tar.gz
)

validpgpkeys=(
	'B0F4253373F8F6F510D42178520A9993A1C052F8' # Maxim Dounin <mdounin@mdounin.ru>
)

sha256sums=('6f1825b4514e601579986035783769c456b888d3facbab78881ed9b58467e73e'
            'SKIP'
            '2e6a03032555f5da1bdff2ae96c96486f447da3da37c117e0f964ae0753d22aa')

build() {
	cd "$srcdir"/nginx-$_nginxver
	./configure --with-compat --add-dynamic-module=../$_modname-nginx-module-$pkgver
	make modules
}

package() {
	install -Dm644 "$srcdir/"$_modname-nginx-module-$pkgver/LICENSE \
	               "$pkgdir"/usr/share/licenses/$pkgname/LICENSE

	cd "$srcdir"/nginx-$_nginxver/objs
	for mod in *.so; do
		install -Dm755 $mod "$pkgdir"/usr/lib/nginx/modules/$mod
	done
}
