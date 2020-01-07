# Maintainer: ThecaTTony <thecattony at gmx dot com>

pkgname=nginx-mod-length-hiding-filter
pkgver=1.1.1
pkgrel=1

_modname=nginx-length-hiding-filter-module
_nginxver=1.16.1

pkgdesc='Nginx module to append random generated string to the end of HTML response'
arch=('x86_64' 'arm' 'armv6h' 'armv7h' 'aarch64')
depends=('nginx')
url='https://github.com/nulab/nginx-length-hiding-filter-module'
license=('MIT')

source=(https://nginx.org/download/nginx-$_nginxver.tar.gz
	https://github.com/nulab/nginx-length-hiding-filter-module/archive/$pkgver.tar.gz)

sha512sums=('17e95b43fa47d4fef5e652dea587518e16ab5ec562c9c94355c356440166d4b6a6a41ee520d406e5a34791a327d2e3c46b3f9b105ac9ce07afdd495c49eca437'
            '3eebd28808241daf26081126249174704a08aca9c0ff42e00875f7439de49e53e3cdb40e956e388ccb8b8bd5fff0103e97f6f38aa0d84d22f2f6f56295f60bec')

build() {
	cd "$srcdir"/nginx-"$_nginxver"
	opts=$(nginx -V 2>&1 | grep 'configure arguments' | sed -r 's@^[^:]+: @@')
	IFS=$'\n' opts=( $(xargs -n1 <<< "$opts") )
	./configure "${opts[@]}" \
		--add-dynamic-module=../"$_modname"-"$pkgver"
	make modules
}

package() {
	cd "$srcdir"/nginx-"$_nginxver"/objs
	for mod in *.so; do
		install -Dm755 $mod "$pkgdir"/usr/lib/nginx/modules/$mod
	done
}
