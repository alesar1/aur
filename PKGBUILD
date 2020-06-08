# Maintainer: Jan Cholasta <grubber at grubber cz>
pkgname=zmusic-git
pkgver=1.1.1+1+ge8b2bd4
pkgrel=1
pkgdesc="GZDoom's music system as a standalone library (git version)"
arch=('x86_64')
url='https://github.com/coelckers/ZMusic'
license=('BSD' 'GPL3' 'LGPL2.1' 'LGPL3' 'custom:dumb')
depends=('alsa-lib' 'fluidsynth>=2' 'libsndfile' 'mpg123' 'zlib')
optdepends=('soundfont-fluid: default soundfont for FluidSynth')
makedepends=('cmake' 'git')
checkdepends=('abi-compliance-checker')
provides=('zmusic')
conflicts=('zmusic')
_srcname=ZMusic
_checkver=1.1.1
source=("${_srcname}::git+https://github.com/coelckers/ZMusic"
        '0001-Use-correct-soundfont-path.patch')
source_x86_64=("libzmusic.so.1-${_checkver}-x86_64.dump.gz"
               "libzmusiclite.so.1-${_checkver}-x86_64.dump.gz")
sha256sums=('SKIP'
            '6c1b5bf589e5c36186869276ade865d35fdf860241dcd2e0f557e5a82dfd066f')
sha256sums_x86_64=('648c4f9462877a2b9dab1b8bd2fad7967c09fee3307f5f24adaa1f4532842780'
                   '2abc6f5c128f023699210f6cfb22257a6a26375f0b206d92de1272302a84bbcf')

pkgver() {
    cd $_srcname
    git describe --tags | tr - +
}

prepare() {
    cd $_srcname
    patch -i "$srcdir"/0001-Use-correct-soundfont-path.patch -p 1
}

build() {
    cd $_srcname
    mkdir -p build
    cmake -B build \
          -D CMAKE_BUILD_TYPE=Release \
          -D CMAKE_INSTALL_PREFIX=/usr \
          -D DYN_FLUIDSYNTH=OFF \
          -D DYN_MPG123=OFF \
          -D DYN_SNDFILE=OFF
    make -C build
}

check() {
    if [ $_checkver = ${pkgver%%+*} ]; then
        return
    fi

    _soverbumped=true
    cd "$srcdir"/$_srcname/build/source
    for _lib in libzmusic.so.* libzmusiclite.so.*; do
        if [ -f "$srcdir"/"${_lib}-${_checkver}-${CARCH}.dump" ]; then
            _soverbumped=false
            break
        fi
    done
    if $_soverbumped; then
        return
    fi

    cd "$srcdir"/$_srcname
    mkdir -p check
    cmake -B check \
          -D CMAKE_BUILD_TYPE=Debug \
          -D CMAKE_CXX_FLAGS="${CXXFLAGS} -g -Og" \
          -D CMAKE_INSTALL_PREFIX=/usr \
          -D DYN_FLUIDSYNTH=OFF \
          -D DYN_MPG123=OFF \
          -D DYN_SNDFILE=OFF
    make -C check

    cd "$srcdir"/$_srcname/check/source
    for _lib in libzmusic.so.* libzmusiclite.so.*; do
        _old="$srcdir"/"${_lib}-${_checkver}-${CARCH}.dump"
        if [ ! -f "$_old" ]; then
            continue
        fi
        _new=${_lib}-${pkgver}-${CARCH}.dump
        abi-dumper $_lib -lver $pkgver -public-headers ../../include -output $_new
        abi-compliance-checker -l $_lib -old $_old -new $_new
    done
}

package() {
    cd $_srcname
    make -C build install DESTDIR="$pkgdir"
    install licenses/{bsd,dumb,legal,zmusic}.txt -t "$pkgdir"/usr/share/licenses/$pkgname -D -m 644
}
