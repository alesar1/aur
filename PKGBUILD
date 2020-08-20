# Maintainer: Rodrigo Bezerra <rodrigobezerra21 at gmail dot com>
# Contributor: orumin <dev@orum.in>

_basename=libkate
pkgname="lib32-$_basename"
pkgver=0.4.1
pkgrel=5
pkgdesc="A karaoke and text codec for embedding in ogg (32-bit)"
url="https://wiki.xiph.org/OggKate"
license=('BSD')
arch=('x86_64')
depends=('lib32-libogg' 'lib32-libpng' 'libkate')
makedepends=('pkg-config' 'git')
source=("https://download.videolan.org/contrib/kate/$_basename-$pkgver.tar.gz"
        0001-Fix-automake-warnings.patch)
sha512sums=('2635237753abc0f6c43fc07bd0ecc57c2f3c893efa6c62ad08de9191045612477302ed45acd61cdfea7447efd654ebbe0ed2d6a2cbf867eb834581d7ee43377b'
            '525d120cddd040441859f2783e6e566da631ba304074bfa40a34399879fc3053577e8e71ef804168aeef519fac62e205829b50a61d770cddd46f7dbfba660842')

build() {
    cd $_basename-$pkgver

    export CC='gcc -m32'
    export CXX='g++ -m32'
    export PKG_CONFIG_PATH='/usr/lib32/pkgconfig'
    export PYTHON="/usr/bin/python2"

    ./configure \
        --build=i686-pc-linux-gnu \
        --prefix=/usr \
        --libdir=/usr/lib32 \
        --disable-static \
        --disable-doc

    make
}

package() {
    cd $_basename-$pkgver

    make DESTDIR=$pkgdir PYTHON=/usr/bin/python2 install

    install -Dm644 COPYING "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

    cd "$pkgdir/usr"

    mv lib lib32
    rm -r bin include lib32/lib share/{doc,man}
}
