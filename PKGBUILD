# Maintainer: Guillaume Horel <guillaume.horel@gmail.com>
# Contributor: Andrzej Giniewicz <gginiu@gmail.com>
# Contributor: Johan Förberg <johan@forberg.se>

pkgname=zstd-static
_pkgname=${pkgname%-static}
pkgver=1.4.3
pkgrel=1
pkgdesc='Zstandard - Fast real-time compression algorithm'
arch=('x86_64')
url='http://www.zstd.net/'
license=('BSD')
depends=('zlib' 'xz' 'lz4')
makedepends=('cmake')
options=('staticlibs')
source=("https://github.com/facebook/zstd/archive/v${pkgver}.tar.gz")
sha256sums=('5eda3502ecc285c3c92ee0cc8cd002234dee39d539b3f692997a0e80de1d33de')
provides=('zstd')
conflicts=('zstd')

build() {
    cd "$srcdir/$_pkgname-$pkgver/build"
    mkdir builddir
    cd builddir
    cmake -DCMAKE_INSTALL_PREFIX=/usr \
          -DCMAKE_INSTALL_LIBDIR=/usr/lib \
          ../cmake
    make
}

package() {
    cd "$srcdir/$_pkgname-$pkgver"
    pushd "build/builddir"
    pushd lib
    make DESTDIR="$pkgdir/" install
    popd; pushd programs
    make DESTDIR="$pkgdir" install
    popd; popd
    install -D -m644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

check() {
    cd "$srcdir/$_pkgname-$pkgver"
    make check
}
