# Maintainer: Ivan Shapovalov <intelfx@intelfx.name>
# Contributor: Massimiliano Torromeo <massimiliano.torromeo@gmail.com>

pkgname=nginx-mainline-mod-vts
pkgver=0.1.18
pkgrel=19

_modname="${pkgname#nginx-mainline-mod-}"
_nginxver=1.17.9

pkgdesc='Nginx virtual host traffic status module (module for mainline nginx)'
arch=('i686' 'x86_64')
depends=("nginx-mainline=$_nginxver")
url="https://github.com/vozlt/nginx-module-vts"
license=('BSD')

source=(
	https://nginx.org/download/nginx-$_nginxver.tar.gz
	$pkgname-$pkgver.tar.gz::https://github.com/vozlt/nginx-module-vts/archive/v$pkgver.tar.gz
)

sha256sums=('7dd65d405c753c41b7fdab9415cfb4bdbaf093ec6d9f7432072d52cb7bcbb689'
            '17ea41d4083f6d1ab1ab83dad9160eeca66867abe16c5a0421f85a39d7c84b65')

build() {
	cd "$srcdir"/nginx-$_nginxver
	./configure --with-compat --add-dynamic-module=../nginx-module-vts-$pkgver
	make modules
}

package() {
	install -Dm644 "$srcdir"/nginx-module-vts-$pkgver/LICENSE \
	               "$pkgdir"/usr/share/licenses/$pkgname/LICENSE

	cd "$srcdir"/nginx-$_nginxver/objs
	for mod in *.so; do
		install -Dm755 $mod "$pkgdir"/usr/lib/nginx/modules/$mod
	done
}
