# Maintainer: Trevor Bergeron <aur@sec.gd>

pkgname=nginx-mainline-mod-rtmp
pkgver=1.2.2
pkgrel=3

_modname="nginx-rtmp-module"
_nginxver="$(/bin/nginx -v 2>&1 | grep -Eo '([[:digit:]]|\.)+')"

pkgdesc="Module for mainline nginx that adds RTMP support"
arch=('aarch64' 'i686' 'x86_64')
depends=('nginx-mainline')
url="https://github.com/arut/nginx-rtmp-module"
license=('BSD')

source=(
    http://nginx.org/download/nginx-$_nginxver.tar.gz
    http://nginx.org/download/nginx-$_nginxver.tar.gz.asc
    $_modname-$pkgver.tar.gz::https://github.com/arut/$_modname/archive/v$pkgver.tar.gz
)
sha256sums=('SKIP'
            'SKIP'
            '07f19b7bffec5e357bb8820c63e5281debd45f5a2e6d46b1636d9202c3e09d78')
validpgpkeys=('B0F4253373F8F6F510D42178520A9993A1C052F8')

build() {
    cd "$srcdir/nginx-$_nginxver"

    # Cribbed from aur/nginx-mainline-mod-http-xslt-filter by Sergey Shatunov
    opts=$(nginx -V 2>&1 | grep 'configure arguments' | sed -r 's@^[^:]+: @@')
    IFS=$'\n' opts=( $(xargs -n1 <<< "$opts") )
    ./configure "${opts[@]}" --add-dynamic-module=../$_modname-$pkgver

    make modules
}

package() {
    cd "$srcdir/nginx-$_nginxver/objs"
    for mod in *.so; do
        install -Dm755 $mod "$pkgdir"/usr/lib/nginx/modules/$mod
    done
}
