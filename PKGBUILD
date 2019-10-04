# $Id$
# Maintainer: Aaron van Geffen <aaron@aaronweb.net>
# Contributor: Sven-Hendrik Haase <sh@lutzhaase.com>
# Contributor: Markus Martin <markus@archwyrm.net>

pkgname=lib32-yaml-cpp
pkgver=0.6.3
pkgrel=1
pkgdesc="YAML parser and emitter in C++, written around the YAML 1.2 spec (32-bits)"
url="https://github.com/jbeder/yaml-cpp"
arch=('x86_64')
license=('MIT')
depends=('lib32-gcc-libs')
makedepends=('cmake' 'gcc-multilib')
source=(https://github.com/jbeder/yaml-cpp/archive/yaml-cpp-${pkgver}.tar.gz)
sha512sums=('68b9ce987cabc1dec79382f922de20cc2c222cb9c090ecb93dc686b048da5c917facf4fce6d8f72feea44b61e5a6770ed3b0c199c4cd4e6bde5b6245c09f8e49')

prepare() {
    mkdir -p yaml-cpp-yaml-cpp-$pkgver/build
}

build() {
    cd yaml-cpp-yaml-cpp-$pkgver/build

    export CFLAGS="-m32 ${CFLAGS}"
    export CXXFLAGS="-m32 ${CXXFLAGS}"
    export LDFLAGS="-m32 ${LDFLAGS}"
    export PKG_CONFIG_PATH='/usr/lib32/pkgconfig'

    cmake .. \
        -DCMAKE_INSTALL_PREFIX=/usr \
		-DLIB_SUFFIX=32 \
        -DBUILD_SHARED_LIBS=ON \
        -DCMAKE_BUILD_TYPE=Release
    make
}

check() {
    cd yaml-cpp-yaml-cpp-$pkgver/build
    make test
    test/run-tests
}

package() {
    cd yaml-cpp-yaml-cpp-$pkgver

    make -C build DESTDIR="$pkgdir" install
	rm -rf "$pkgdir"/usr/{include,lib,share}

    install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}
