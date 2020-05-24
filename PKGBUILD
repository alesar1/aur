# Maintainer: Ivan Krivosheev <py.krivosheev@gmail.com>

pkgname=batify2
pkgver=0.0.1
pkgrel=1
pkgdesc="Lightweight battery notification"
arch=(x86_64)
url="https://github.com/ikrivosheev/batify2"
license=(MIT)
depends=(libnotify)
makedepends=(cmake)
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
md5sums=('71445cdc93601e575edd872abf9f4e94')

build() {
    export CFLAGS+=" ${CPPFLAGS}"
    export CXXFLAGS+=" ${CPPFLAGS}"

    source_dir="${pkgname}-${pkgver}"
    build_dir="${source_dir}/build"
    cmake -B "${build_dir}" -S "${source_dir}" \
        -DCMAKE_BUILD_TYPE='Release' \
        -DCMAKE_INSTALL_PREFIX='${pkdir}/usr' \
        -Wno-dev
    cmake --build "${build_dir}" 
}

package() {
    cmake --build "${pkgname}-${pkgver}/build" --target install
}
