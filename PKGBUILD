# Maintainer: hdhoang <arch@hdhoang.space>

pkgname=nginx-mainline-mod-fancyindex
pkgver=0.4.1
pkgrel=3

_modname="${pkgname#nginx-mainline-mod-}"
_nginxver="$(/bin/nginx -v 2>&1 | grep -Eo '([[:digit:]]|\.)+')"

pkgdesc='Fancy indexes module for the Nginx web server'
arch=('i686' 'x86_64' 'armv7h')
depends=('nginx-mainline')
url="https://github.com/aperezdc/ngx-fancyindex"
license=('BSD')

source=(
	http://nginx.org/download/nginx-$_nginxver.tar.gz
	https://github.com/aperezdc/ngx-$_modname/archive/v$pkgver.tar.gz
)
sha256sums=('a5856c72a6609a4dc68c88a7f3c33b79e6693343b62952e021e043fe347b6776'
            '2b00d8e0ad2a67152a9cee7b7ee67990c742d501412df912baaf1eee9bb6dc71')

prepare() {
	cd ngx-$_modname-$pkgver
}

build() {
	cd "$srcdir"/nginx-$_nginxver
	./configure $(nginx -V 2>&1 | grep 'configure arguments' | sed -r 's@^[^:]+: @@') --add-dynamic-module=../ngx-$_modname-$pkgver
	make modules
}

package() {
	install -Dm644 "$srcdir/"ngx-$_modname-$pkgver/LICENSE \
	               "$pkgdir"/usr/share/licenses/$pkgname/LICENSE

	cd "$srcdir"/nginx-$_nginxver/objs
	for mod in *.so; do
		install -Dm755 $mod "$pkgdir"/usr/lib/nginx/modules/$mod
	done
}
