# Maintainer: Damjan Georgievski <gdamjan@gmail.com>

pkgname=nginx-mainline-mod-nchan
pkgver=1.2.6
pkgrel=5

_nginxver=1.17.9

pkgdesc='nchan nginx module'
arch=('i686' 'x86_64')
depends=("nginx-mainline=${_nginxver}")
url="https://nchan.io/"
license=('MIT')

source=(
    https://github.com/slact/nchan/archive/v${pkgver}.tar.gz
    http://nginx.org/download/nginx-$_nginxver.tar.gz
)

build() {
    cd "$srcdir"/nginx-$_nginxver
    _module_dir="$srcdir"/nchan-$pkgver
    ./configure --with-compat --add-dynamic-module=${_module_dir}
    make modules
}

package() {
    cd "$srcdir"/nginx-$_nginxver/objs
    for _mod in ngx_nchan_module.so; do
        install -Dm755 $_mod "$pkgdir"/usr/lib/nginx/modules/$_mod
    done
}

sha256sums=('277f35e479f80f04f76b70549d0ec7abdf8f1658cf46538ea9b0adf3e8b1ad50'
            '7dd65d405c753c41b7fdab9415cfb4bdbaf093ec6d9f7432072d52cb7bcbb689')
