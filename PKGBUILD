# Maintainer: Jan Cholasta <grubber at grubber cz>
pkgname=zmusic-git
pkgver=1.1.0
pkgrel=1
pkgdesc="GZDoom's music system as a standalone library (git version)"
arch=('x86_64')
url='https://github.com/coelckers/ZMusic'
license=('BSD' 'GPL3' 'LGPL2.1' 'LGPL3' 'custom:dumb')
depends=('alsa-lib' 'gcc-libs' 'zlib')
optdepends=('fluidsynth>=2: FluidSynth MIDI device'
            'libsndfile: WAV/FLAC/OGG audio support'
            'mpg123: MP3 audio support'
            'soundfont-fluid: default soundfont for FluidSynth')
makedepends=('cmake' 'git')
checkdepends=('abi-compliance-checker')
_srcname=ZMusic
_sover=arch.1
_checkver=1.1.0
source=("${_srcname}::git+https://github.com/coelckers/ZMusic"
        '0001-Use-correct-soundfont-path.patch')
source_x86_64=("libzmusic.so.${_sover}-${_checkver}-x86_64.dump.gz"
               "libzmusiclite.so.${_sover}-${_checkver}-x86_64.dump.gz")
sha256sums=('SKIP'
            '6c1b5bf589e5c36186869276ade865d35fdf860241dcd2e0f557e5a82dfd066f')
sha256sums_x86_64=('eb6276f8bbd6db3e2e0bb742138ea4e3a273663128311c7a9df4f254236bbd35'
                   'd490fe9bdd34e5622c2dbda3d605d49545ae1cc17abda6f0c5c898a0087e2123')

pkgver() {
    cd $_srcname
    git describe --tags | tr - +
}

prepare() {
    cd $_srcname
    echo "set_target_properties(zmusic zmusiclite PROPERTIES SOVERSION ${_sover})" >>source/CMakeLists.txt
    patch -i "$srcdir"/0001-Use-correct-soundfont-path.patch -p 1
}

build() {
    cd $_srcname
    mkdir -p build
    cmake -B build -D CMAKE_BUILD_TYPE=Release -D CMAKE_INSTALL_PREFIX=/usr
    make -C build
}

check() {
    if [ $_checkver = ${pkgver%%+*} ]; then
        return
    fi
    if [ "$srcdir"/libzmusic.so.*-${_checkver}-${CARCH}.dump.gz \
         != "$srcdir"/libzmusic.so.${_sover}-${_checkver}-${CARCH}.dump.gz ]; then
        return
    fi

    cd $_srcname
    mkdir -p check
    cmake -B check -D CMAKE_BUILD_TYPE=Debug -D CMAKE_CXX_FLAGS="${CXXFLAGS} -g -Og"
    make -C check

    for _lib in libzmusic.so.${_sover} libzmusiclite.so.${_sover}; do
        gunzip "$srcdir"/${_lib}-${_checkver}-${CARCH}.dump.gz -c >${_lib}-${_checkver}-${CARCH}.dump
        abi-dumper check/source/$_lib -lver $pkgver -public-headers include -output ${_lib}-${pkgver}-${CARCH}.dump
        abi-compliance-checker -l $_lib -old ${_lib}-${_checkver}-${CARCH}.dump -new ${_lib}-${pkgver}-${CARCH}.dump
    done
}

package() {
    cd $_srcname
    make -C build install DESTDIR="$pkgdir"
    install licenses/{bsd,dumb,legal,zmusic}.txt -t "$pkgdir"/usr/share/licenses/$pkgname -D -m 644
}
