# Maintainer: Sergey Shatunov <me@prok.pw>

pkgname=nginx-mainline-mod-http-xslt-filter
pkgver=1.13.12
pkgrel=1

_modname="${pkgname#nginx-mainline-mod-}"

pkgdesc='HTTP XSLT module for the Nginx web server'
arch=('i686' 'x86_64' 'armv7h' 'aarch64')
depends=('nginx-mainline' 'libxslt')
url="https://nginx.org"
license=('custom')

source=(http://nginx.org/download/nginx-$pkgver.tar.gz)
sha256sums=('fb92f5602cdb8d3ab1ad47dbeca151b185d62eedb67d347bbe9d79c1438c85de')

build() {
	cd "$srcdir"/nginx-$pkgver
	opts=$(nginx -V 2>&1 | grep 'configure arguments' | sed -r 's@^[^:]+: @@')
	IFS=$'\n' opts=( $(xargs -n1 <<< "$opts") )
	./configure "${opts[@]}" --with-http_xslt_module=dynamic
	make modules
}

package() {
	cd "$srcdir"/nginx-$pkgver/objs
	for mod in *.so; do
		install -Dm755 $mod "$pkgdir"/usr/lib/nginx/modules/$mod
	done
}
