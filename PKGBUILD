# Maintainer: Massimiliano Torromeo <massimiliano.torromeo@gmail.com>

pkgname=nginx-mainline-mod-brotli
epoch=1
pkgver=0.1.2
pkgrel=5

_modname="ngx_${pkgname#nginx-mainline-mod-}"
_nginxver=1.15.8

pkgdesc="Brotli compression filter module for mainline nginx"
arch=('i686' 'x86_64')
depends=('nginx-mainline' 'brotli')
url="https://github.com/eustas/ngx_brotli"
license=('CUSTOM')

source=(
	https://nginx.org/download/nginx-$_nginxver.tar.gz{,.asc}
	https://github.com/eustas/$_modname/archive/v$pkgver/$_modname-$pkgver.tar.gz
)

validpgpkeys=(
	'B0F4253373F8F6F510D42178520A9993A1C052F8' # Maxim Dounin <mdounin@mdounin.ru>
)

sha256sums=('a8bdafbca87eb99813ae4fcac1ad0875bf725ce19eb265d28268c309b2b40787'
            'SKIP'
            '309af9e96c10e80f1884acea96379980979581adc287ce338f084607bd48c185')

prepare() {
	cd "$srcdir"/$_modname-$pkgver
	sed 's@/usr/local@/usr@' -i config
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
	for mod in ngx_*.so; do
		install -Dm755 $mod "$pkgdir"/usr/lib/nginx/modules/$mod
	done
}
