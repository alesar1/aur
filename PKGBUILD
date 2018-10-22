# Maintainer : Daniel Bermond < gmail-com: danielbermond >

# NOTE:
# 10-bit depth currently fails to build
# https://github.com/pkuvcl/xavs2/issues/9

pkgname=xavs2-git
pkgver=1.0.r135.g1ff3ff8
pkgrel=1
arch=('i686' 'x86_64')
pkgdesc='Open-Source encoder of AVS2-P2/IEEE1857.4 video coding standard (git version)'
url='https://github.com/pkuvcl/xavs2/'
license=('GPL')
depends=('glibc' 'liblsmash.so')
makedepends=('git' 'gcc7' 'yasm' 'l-smash')
provides=('xavs2' 'libxavs2-git' 'libxavs2.so')
conflicts=('xavs2' 'libxavs2-git')
replaces=('libxavs2-git')
source=("$pkgname"::'git+https://github.com/pkuvcl/xavs2.git')
sha256sums=('SKIP')

prepare() {
    cd "$pkgname"
    
    # use gcc7 (it does not build with gcc8)
    sed -i 's/gcc/gcc-7/' build/linux/configure
    
    # must copy the entire source tree for each build or it will not work
    cd "$srcdir"
    cp -af "$pkgname" build-8bit
    cp -af "$pkgname" build-10bit
}

pkgver() {
    cd "$pkgname"
    
    # git, tags available
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g;s/^v//'
}

build() {
    printf '%s\n' '  -> Building for 8-bit...'
    cd build-8bit/build/linux
    ./configure \
        --prefix='/usr' \
        --enable-shared \
        --bit-depth='8' \
        --chroma-format='all' \
        --enable-lto \
        --enable-pic \
        --disable-swscale \
        --disable-lavf \
        --disable-ffms \
        --disable-gpac
    make
    
    printf '%s\n' '  -> Building for 10-bit...'
    cd "${srcdir}/build-10bit/build/linux"
    if ./configure \
        --prefix='/usr' \
        --libdir='/usr/lib/xavs2-10bit' \
        --includedir='/usr/include/xavs2-10bit' \
        --enable-shared \
        --bit-depth='10' \
        --chroma-format='all' \
        --enable-lto \
        --enable-pic \
        --disable-swscale \
        --disable-lavf \
        --disable-ffms \
        --disable-gpac
    then
        make
    else
        cd "$srcdir"
        rm -rf build-10bit
    fi
}

package() {
    local _depth
    
    for _depth in 10 8
    do
        printf '%s\n' "  -> Installing for ${_depth}-bit..."
        
        if [ "$_depth" -eq '10' ] && ! [ -d 'build-10bit' ] 
        then
            printf '%s\n' 'BitDepth 10 not supported currently.'
            continue
        fi
        
        make -C "build-${_depth}bit/build/linux" DESTDIR="$pkgdir" install-cli install-lib-shared
        
        if [ "$_depth" -eq '10' ] 
        then
            mv "${pkgdir}/usr/bin/xavs2" "${pkgdir}/usr/bin/xavs2-${_depth}bit"
        fi
    done
}
