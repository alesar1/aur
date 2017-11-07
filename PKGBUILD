# Maintainer: Massimiliano Torromeo <massimiliano.torromeo@gmail.com>

pkgname=nginx-mainline-mod-auth_pam
pkgver=1.5.1
pkgrel=7

_modname=ngx_http_auth_pam_module
_nginxver=1.13.6

pkgdesc='Nginx mainline module to use PAM for simple http authentication'
arch=('i686' 'x86_64')
depends=('nginx-mainline' 'pam')
url="https://github.com/sto/ngx_http_auth_pam_module"
license=('BSD')

source=(
	https://nginx.org/download/nginx-$_nginxver.tar.gz
	https://github.com/sto/$_modname/archive/v$pkgver/$_modname-$pkgver.tar.gz
	$_modname-critlog.patch::https://patch-diff.githubusercontent.com/raw/sto/ngx_http_auth_pam_module/pull/11.patch
)

sha256sums=('8512fc6f986a20af293b61f33b0e72f64a72ea5b1acbcc790c4c4e2d6f63f8f8'
            '77676842919134af88a7b4bfca4470223e3a00d287d17c0dbdc9a114a685b6e7'
            '1a59787672cf9c6768cb77c31f19a870eaf556c7b28c8c22a22cf8a7013b93af')

prepare() {
	cd "$srcdir"/$_modname-$pkgver
	patch -p1 -i "$srcdir"/$_modname-critlog.patch
}

build() {
	cd "$srcdir"/nginx-$_nginxver
	./configure --with-compat --add-dynamic-module=../$_modname-$pkgver
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
