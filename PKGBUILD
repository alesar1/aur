# Maintainer: Nick Skelsey <nskelsey+zz@gmail.com>
pkgname=zeek
pkgver=3.1.0.dev131.g916491e2b
pkgrel=1
pkgdesc="A network analysis framework"
arch=('x86_64')
url="https://www.zeek.org/index.html"
license=('BSD')
depends=("zlib" "libpcap" "bash" "libmaxminddb")
makedepends=("cmake")
source=("git+https://github.com/zeek/zeek")
md5sums=("SKIP")

pkgver() {
    cd "$srcdir/zeek"
    git describe --always | sed 's/^v//;s/dev-/dev/;s/-/./g'
}

build() {
    cd "$srcdir/zeek"
    git submodule update --init --recursive
    ./configure --prefix=/usr --disable-auxtools --disable-python --disable-broker-tests --disable-zeekctl
    make
}

package() {
    cd "$srcdir/zeek"
    make DESTDIR="$pkgdir/" install
}
