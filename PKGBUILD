# Maintainer: Nocifer <apmichalopoulos at gmail dot com>
# Contributor: Tod Jackson <tod.jackson@gmail.com>
# Contributor: Michael Armbruster <michael at armbrust dot me>
# Contributor: Johannes Dewender  arch at JonnyJD dot net
# Contributor: josephgbr <rafael.f.f1@gmail.com>



_pkgbase=libbluray
pkgname=lib32-${_pkgbase}
pkgver=1.3.0
pkgrel=1
pkgdesc='Library to access Blu-Ray disks for video playback (32 bit)'
arch=('x86_64')
url='https://www.videolan.org/developers/libbluray.html'
license=('LGPL2.1')
depends=("$_pkgbase" 'lib32-fontconfig' 'lib32-freetype2' 'lib32-glibc' 'lib32-libxml2')
provides=('libbluray.so')
source=("https://download.videolan.org/pub/videolan/$_pkgbase/$pkgver/$_pkgbase-$pkgver.tar.bz2")
sha256sums=('e2dbaf99e84e0a9725f4985bcb85d41e52c2261cc651d8884b1b790b5ef016f9')

build() {
    cd $_pkgbase-$pkgver

    export CC='gcc -m32'
    export CXX='g++ -m32'
    export PKG_CONFIG_PATH='/usr/lib32/pkgconfig'

    ./configure --libdir=/usr/lib32 \
                --prefix=/usr \
                --disable-doxygen-doc \
                --disable-bdjava-jar \
                --host=i686-unknown-linux-gnu
    make
}

package() {
    cd $_pkgbase-$pkgver

    make DESTDIR="$pkgdir" install
    rm -rf "${pkgdir}"/usr/{bin,include,share}
}
