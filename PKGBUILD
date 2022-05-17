# Maintainer: Rodrigo Bezerra <rodrigobezerra21 at gmail dot com>
# Contributor: orumin <dev at orum.in>

_basename=imagemagick
pkgname=lib32-imagemagick
pkgver=7.1.0.34
pkgrel=1
pkgdesc='An image viewing/manipulation program (32-bit)'
url='https://www.imagemagick.org/'
arch=(x86_64)
license=(custom)
depends=(lib32-libheif lib32-liblqr lib32-libltdl lib32-libraqm lib32-libraw lib32-librsvg
         lib32-libwebp lib32-libwmf lib32-openjpeg2 imagemagick)
makedepends=(ghostpcl ghostscript ghostxps lib32-glu lib32-jbigkit lib32-ocl-icd opencl-headers)
checkdepends=(ttf-dejavu)
_relname=ImageMagick-${pkgver%%.*}
_tarname=ImageMagick-${pkgver%.*}-${pkgver##*.}
source=(https://download.imagemagick.org/ImageMagick/download/releases/$_tarname.tar.xz{,.asc}
        arch-fonts.diff)
sha256sums=('0acb8c47dcbe6574f390042b1710fcc468e534f4a70876fbfd0cf2c9f3bee8e5'
            'SKIP'
            'a85b744c61b1b563743ecb7c7adad999d7ed9a8af816650e3ab9321b2b102e73')
validpgpkeys=(D8272EF51DA223E4D05B466989AB63D48277377A)  # Lexie Parsimoniae

shopt -s extglob

prepare() {
    cd $_tarname

    # Fix up typemaps to match our packages, where possible
    patch -p1 -i ../arch-fonts.diff
}

build() {
    cd $_tarname

    export CC='gcc -m32'
    export CXX='g++ -m32'
    export PKG_CONFIG='/usr/bin/i686-pc-linux-gnu-pkg-config'

    ./configure \
        --build=i686-pc-linux-gnu \
        --prefix=/usr \
        --libdir=/usr/lib32 \
        --sysconfdir=/etc \
        --with-dejavu-font-dir=/usr/share/fonts/TTF \
        --with-gs-font-dir=/usr/share/fonts/gsfonts \
        PSDelegate=/usr/bin/gs \
        XPSDelegate=/usr/bin/gxps \
        PCLDelegate=/usr/bin/gpcl6 \
        --disable-static \
        --enable-hdri \
        --enable-opencl \
        --enable-shared \
        --with-lqr \
        --with-modules \
        --with-openjp2 \
        --with-rsvg \
        --with-webp \
        --with-wmf \
        --with-xml \
        --without-autotrace \
        --without-djvu \
        --without-dps \
        --without-fftw \
        --without-fpx \
        --without-gcc-arch \
        --without-gslib \
        --without-gvc \
        --without-jxl \
        --without-libzip \
        --without-openexr \
        --without-perl \

    sed -i -e 's/ -shared / -Wl,-O1,--as-needed\0/g' libtool

    make
}

check() {
    cd $_tarname

    ulimit -n 4096

    make -k check || :
}

package() {
    cd $_tarname

    make DESTDIR="$pkgdir" install

    rm -rf "${pkgdir}"/etc
    rm -rf "${pkgdir}"/usr/bin
    rm -rf "${pkgdir}"/usr/include
    rm -rf "${pkgdir}"/usr/share

    install -Dt "$pkgdir/usr/share/licenses/$pkgname" -m644 LICENSE NOTICE
}
