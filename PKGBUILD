# Maintainer: Massimiliano Torromeo <massimiliano.torromeo@gmail.com>

pkgname=nginx-mainline-mod-naxsi
pkgver=0.56
pkgrel=17

_modname=naxsi
_nginxver=1.17.8

pkgdesc='Nginx Anti XSS & SQL Injection (module for mainline nginx)'
arch=('i686' 'x86_64')
depends=('nginx-mainline')
url="https://github.com/nbs-system/naxsi"
license=('GPL3')
backup=('etc/nginx/naxsi_core.rules')

source=(
	https://nginx.org/download/nginx-$_nginxver.tar.gz{,.asc}
	https://github.com/nbs-system/$_modname/archive/$pkgver/$_modname-$pkgver.tar.gz
)

validpgpkeys=(
	'B0F4253373F8F6F510D42178520A9993A1C052F8' # Maxim Dounin <mdounin@mdounin.ru>
)

sha256sums=('97d23ecf6d5150b30e284b40e8a6f7e3bb5be6b601e373a4d013768d5a25965b'
            'SKIP'
            '0a66dcadd32432460fab180be9f2efe24e911e3798917b2787ee710e02901eb4')

build() {
	cd "$srcdir"/nginx-$_nginxver
	./configure --with-compat --add-dynamic-module=../$_modname-$pkgver/naxsi_src
	make modules
}

package() {
	cd "$srcdir"/nginx-$_nginxver/objs
	for mod in *.so; do
		install -Dm755 $mod "$pkgdir"/usr/lib/nginx/modules/$mod
	done

	cd "$srcdir"/$_modname-$pkgver
	install -Dm644 naxsi_config/naxsi_core.rules "$pkgdir"/etc/nginx/naxsi_core.rules
}
