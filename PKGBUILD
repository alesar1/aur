# Maintainer: Morgenstern <charles [at] charlesbwise [dot] com>
# Contributor: Ricardo <wiiaboo@gmail.com>
# Contributor: jkl <jkl@johnluebs.com>
# Contributor: hdhoang <arch@hdhoang.space>

pkgname=nginx-mainline-mod-fancyindex
pkgver=0.5.2
pkgrel=7
_modname="${pkgname#nginx-mainline-mod-}"
pkgdesc="Fancy indexes module for the nginx web server"
arch=('x86_64')
url="https://www.nginx.com/resources/wiki/modules/fancy_index/"
license=('BSD')
depends=('nginx-mainline')
makedepends=('nginx-mainline-src')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/aperezdc/ngx-$_modname/archive/v$pkgver.tar.gz")
sha256sums=('c3dd84d8ba0b8daeace3041ef5987e3fb96e9c7c17df30c9ffe2fe3aa2a0ca31')

prepare() {
  install -d nginx
  ln -sf /usr/src/nginx/auto nginx/auto
  ln -sf /usr/src/nginx/src nginx/src
}

build() {
  cd "${srcdir}/nginx"
  _opts=$(nginx -V 2>&1 | grep 'configure arguments' | sed -r 's/^[^:]+: //')
  IFS=$'\n' _opts=( $(xargs -n1 <<< "$_opts") )
  /usr/src/nginx/configure "${_opts[@]}" \
	--add-dynamic-module=../ngx-"$_modname-$pkgver"
  make modules
}

package() {
  cd "${srcdir}/nginx/objs"
  for _mod in *.so; do
	install -D $_mod "$pkgdir/usr/lib/nginx/modules/$_mod"
  done
  install -Dm0644 "$srcdir/ngx-$_modname-$pkgver/LICENSE" \
	"$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
