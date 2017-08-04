pkgname=mingw-w64-kjobwidgets
pkgver=5.36.0
pkgrel=1
arch=(any)
pkgdesc="Widgets for tracking KJob instances (mingw-w64)"
license=("LGPL")
depends=(mingw-w64-kcoreaddons mingw-w64-kwidgetsaddons mingw-w64-qt5-winextras)
groups=(mingw-w64-kf5)
makedepends=(mingw-w64-extra-cmake-modules mingw-w64-qt5-tools)
options=(staticlibs !strip !buildflags)
url="https://community.kde.org/Frameworks"
source=("http://download.kde.org/stable/frameworks/${pkgver%.*}/kjobwidgets-${pkgver}.tar.xz")
md5sums=('5c53678ceb2c2c6f868ccd1a93e4ddc9')

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

build() {
	cd kjobwidgets-$pkgver
	for _arch in ${_architectures}; do
    unset LDFLAGS
    mkdir "build-${_arch}" && pushd "build-${_arch}"
    ${_arch}-cmake \
      -DCMAKE_BUILD_TYPE=Release \
      -DKDE_INSTALL_USE_QT_SYS_PATHS=ON \
      -DBUILD_TESTING=OFF \
      ..
    make
    popd
  done
}

package() {
	for _arch in ${_architectures}; do
    cd "${srcdir}/${pkgname#mingw-w64-}-$pkgver/build-${_arch}"
    make DESTDIR="$pkgdir" install
    find "$pkgdir/usr/${_arch}" -name '*.dll' -exec ${_arch}-strip --strip-unneeded {} \;
    find "$pkgdir/usr/${_arch}" -name '*.a' -o -name '*.dll' | xargs ${_arch}-strip -g
    rm -rf "$pkgdir/usr/${_arch}/share"
  done
}
