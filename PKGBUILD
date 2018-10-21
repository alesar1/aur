# Maintainer: Ivan Semkin (ivan at semkin dot ru)
# Contributor: Martin Weinelt <hexa@darmstadt.ccc.de>
 
appname=Quaternion
pkgname=quaternion
libname=libQMatrixClient
_libname=libqmatrixclient
pkgver=0.0.9.3
_libqmatrixclient_pkgver=0.4.0
pkgrel=1
pkgdesc='Qt5-based IM client for the Matrix protocol'
url='https://matrix.org/docs/projects/client/quaternion.html'
arch=('i686' 'x86_64')
license=(GPL3)
depends=(qt5-declarative hicolor-icon-theme)
makedepends=(cmake)
provides=(quaternion)
conflicts=(quaternion-git)
source=("https://github.com/QMatrixClient/Quaternion/archive/v$pkgver.tar.gz"
        "https://github.com/QMatrixClient/libqmatrixclient/archive/v${_libqmatrixclient_pkgver}.tar.gz"
)
sha256sums=('7f92c3acc73bb7e44efe94bd1085ae9fd5b58efa51efc28a931cace131c22230'
            '8c0a1e0c52e9be06a9883487893cff005287fb199e378033182b681949c521c3')

prepare() {
  cp -r ${_libname}-${_libqmatrixclient_pkgver}/* ${srcdir}/${appname}-${pkgver}/lib/
}

build() {
  mkdir ${appname}-${pkgver}/build_dir -p
  cd ${appname}-${pkgver}/build_dir
  cmake .. -DBUILD_SHARED_LIBS:BOOL=ON -DUSE_INTREE_LIBQMC=true
  cmake --build . --target all
}
 
package() {
  cd ${appname}-${pkgver}

  # The binary
  install -Dm755 "build_dir/${pkgname}" -t "${pkgdir}/usr/bin/"

  # .desktop file
  install -Dm644 "linux/${pkgname}.desktop" -t "${pkgdir}/usr/share/applications/"

  # Icons
  install -Dm644 "icons/quaternion/16-apps-quaternion.png" -t "${pkgdir}/usr/share/icons/hicolor/16x16/apps/"
  install -Dm644 "icons/quaternion/22-apps-quaternion.png" -t "${pkgdir}/usr/share/icons/hicolor/22x22/apps/"
  install -Dm644 "icons/quaternion/32-apps-quaternion.png" -t "${pkgdir}/usr/share/icons/hicolor/32x32/apps/"
  install -Dm644 "icons/quaternion/48-apps-quaternion.png" -t "${pkgdir}/usr/share/icons/hicolor/48x48/apps/"
  install -Dm644 "icons/quaternion/64-apps-quaternion.png" -t "${pkgdir}/usr/share/icons/hicolor/64x64/apps/"
  install -Dm644 "icons/quaternion/128-apps-quaternion.png" -t "${pkgdir}/usr/share/icons/hicolor/128x128/apps/"
  install -Dm644 "icons/quaternion/sources/quaternion.svg" -t "${pkgdir}/usr/share/icons/hicolor/scalable/apps/"

  # The lib
  mkdir ${pkgdir}/usr/lib
  mv build_dir/lib/${libname}.so.0.4.0 ${pkgdir}/usr/lib/
  ln -s /usr/lib/${libname}.so.0.4.0 ${pkgdir}/usr/lib/${libname}.so.0
  ln -s /usr/lib/${libname}.so.0.4.0 ${pkgdir}/usr/lib/${libname}.so
}
# vim:set ts=2 sw=2 et:
