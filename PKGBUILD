# Maintainer: Jameson Pugh <imntreal@gmail.com>

pkgname=kodi-addon-pvr-mythtv
pkgver=5.10.6
_kodiminver=0
_kodicname=Leia
pkgrel=1
pkgdesc='MythTV PVR client addon for Kodi'
arch=('armv7h' 'i686' 'x86_64')
url="http://janbar.github.io/pvr.mythtv/"
license=('GPL')
makedepends=('cmake' 'kodi-platform')
depends=("kodi>=18.0")
source=("https://github.com/janbar/pvr.mythtv/archive/${pkgver}-${_kodicname}.tar.gz")
sha256sums=('a740a8194dda8a66a2cd79e99decd84fa46e97804da1528c078f0f8853e712ca')

prepare() {
  mkdir -p "${srcdir}/build"
}

build() {
  cd "build"

  cmake \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_BUILD_TYPE=Release \
    -DPACKAGE_ZIP=OFF \
    -DAPP_VERSION_MINOR=${_kodiminver} \
    ../pvr.mythtv-${pkgver}-${_kodicname}
  make
}

package() {
  cd "build"
  make DESTDIR="${pkgdir}" install
}

# vim:set ts=2 sw=2 et:
