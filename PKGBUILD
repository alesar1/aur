# Maintainer: Martchus <martchus@gmx.net>

# All my PKGBUILDs are managed at https://github.com/Martchus/PKGBUILDs where
# you also find the URL of a binary repository.

_qt_module=qtcanvas3d
pkgname="mingw-w64-qt5-canvas3d"
pkgver=5.6.1
pkgrel=1
arch=('any')
pkgdesc="A JavaScript 3D rendering API for Qt Quick (mingw-w64)"
depends=('mingw-w64-qt5-declarative')
makedepends=('mingw-w64-gcc')
options=('!strip' '!buildflags' 'staticlibs')
license=('GPL3' 'LGPL')
url="https://www.qt.io/"
_pkgfqn="${_qt_module}-opensource-src-${pkgver}"
source=("https://download.qt.io/official_releases/qt/${pkgver:0:3}/${pkgver}/submodules/${_pkgfqn}.tar.xz")
md5sums=('4116b1b78d373441f1eae47526347f59')

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

build() {
  cd "${srcdir}/${_pkgfqn}"

  for _arch in ${_architectures}; do
    mkdir -p build-${_arch} && pushd build-${_arch}

    ${_arch}-qmake-qt5 ../${_qt_module}.pro
    make

    popd
  done
}

package() {
  cd "${srcdir}/${_pkgfqn}"

  for _arch in ${_architectures}; do
    pushd build-${_arch}

    # install manually to get the import lib, too
    install -Dm755 qml/QtCanvas3D/*.dll -t "${pkgdir}/usr/${_arch}/bin"
    install -Dm644 qml/QtCanvas3D/*.dll.a -t "${pkgdir}/usr/${_arch}/lib"

    ${_arch}-strip --strip-unneeded "${pkgdir}/usr/${_arch}/bin/"*.dll
    ${_arch}-strip -g "${pkgdir}/usr/${_arch}/lib/"*.dll.a

    popd
  done

  # .prl files aren't interesting for us
  find "${pkgdir}" -name "*.prl" -delete
}
