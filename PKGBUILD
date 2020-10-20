# Maintainer: Morgenstern <charles [at] charlesbwise [dot] com>
# Contributor: jkl <jkl@johnluebs.com>
# Contributor: hdhoang <arch@hdhoang.space>

pkgname=nginx-mainline-mod-fancyindex
pkgver=0.4.4
pkgrel=3
_modname="${pkgname#nginx-mainline-mod-}"
_nginxver=1.19.3
pkgdesc="Fancy indexes module for the Nginx web server"
arch=('x86_64')
url="https://github.com/aperezdc/ngx-fancyindex"
license=('BSD')
depends=('nginx-mainline')
source=(https://nginx.org/download/nginx-$_nginxver.tar.gz{,.asc}
	"${pkgname}-${pkgver}.tar.gz::https://github.com/aperezdc/ngx-$_modname/archive/v$pkgver.tar.gz")
validpgpkeys=('B0F4253373F8F6F510D42178520A9993A1C052F8') # Maxim Dounin <mdounin@mdounin.ru>
sha256sums=('91e5b74fa17879d2463294e93ad8f6ffc066696ae32ad0478ffe15ba0e9e8df0'
            'SKIP'
            '34e2bf332b9fa930914220c0187ca18d6f7a6abb88b81fdc9eb4779a1584f83a')

build() {
  cd "$srcdir/nginx-$_nginxver"
  _opts=$(nginx -V 2>&1 | grep 'configure arguments' | sed -r 's/^[^:]+: //')
  IFS=$'\n' _opts=( $(xargs -n1 <<< "$_opts") )
  ./configure "${_opts[@]}" \
	--add-dynamic-module=../ngx-"$_modname-$pkgver"
  make modules
}

package() {  
  cd ""$srcdir/nginx-"$_nginxver/objs"
  for _mod in *.so; do
	install -D $_mod "$pkgdir/usr/lib/nginx/modules/$_mod"
  done
  install -Dm644 "$srcdir/ngx-$_modname-$pkgver/LICENSE" \
	"$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
