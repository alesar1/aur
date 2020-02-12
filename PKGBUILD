# Maintainer: jkl
# Contributor: hdhoang <arch@hdhoang.space>

pkgname=nginx-mainline-mod-fancyindex
pkgver=0.4.3
pkgrel=11

_modname="${pkgname#nginx-mainline-mod-}"
_nginxver=1.17.8

pkgdesc='Fancy indexes module for the Nginx web server'
arch=('i686' 'x86_64' 'armv7h')
makedepends=('nginx-mainline')
depends=('nginx-mainline')
url="https://github.com/aperezdc/ngx-fancyindex"
license=('BSD')

source=(
	https://nginx.org/download/nginx-$_nginxver.tar.gz{,.asc}
	https://github.com/aperezdc/ngx-$_modname/archive/v$pkgver.tar.gz
)
sha256sums=('97d23ecf6d5150b30e284b40e8a6f7e3bb5be6b601e373a4d013768d5a25965b'
            'SKIP'
            '81698fb0c1ec9f906ce308c055d5d248085caf390f4b92516c1ec93f87c886d4')
validpgpkeys=('B0F4253373F8F6F510D42178520A9993A1C052F8') # Maxim Dounin <mdounin@mdounin.ru>

prepare() {
	cd ngx-$_modname-$pkgver
}

build() {
	cd "$srcdir"/nginx-$_nginxver
	opts=$(nginx -V 2>&1 | grep 'configure arguments' | sed -r 's@^[^:]+: @@')
	IFS=$'\n' opts=( $(xargs -n1 <<< "$opts") )
	./configure "${opts[@]}" \
		--add-dynamic-module=../ngx-$_modname-$pkgver
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
