# Contributor: Alexander Mamzikov <av.mamzikov@gmail.com>

pkgname=stereophotoview
pkgver=1.14.2
pkgrel=1
pkgdesc="Viewer/editor for stereoscopic 3d photo and video"
arch=('i686' 'x86_64')
url="https://stereophotoview.bitbucket.io/en"
license=('GPL3')
groups=()
depends=(libpng qt5-base qt5-declarative ffmpeg opencv)
makedepends=(qt5-base qt5-tools qt5-declarative qt5-multimedia qt5-quickcontrols ffmpeg opencv)
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
#install=.install
source=(https://bitbucket.org/stereophotoview/stereophotoview/get/${pkgver}.zip opencv4.patch)
noextract=()
# updpkgsums
md5sums=('8e0b6f0cdbcf38be9a73dc67f675657f'
         '541997434314a3eea89cbdda41487302')

prepare() {
  cd stereophotoview-stereophotoview-*
  patch -Np1 -i "${srcdir}/opencv4.patch"
}

build() {
  cd "$srcdir"
  test -d build || mkdir build
  cd build
  qmake NoPostInstall=1 PREFIX=${pkgdir}/usr ../stereophotoview-stereophotoview-*
  make
}

package()
{
  cd "$srcdir/build"
  make install
  sed -i -e 's:Icon=stereophotoview/appicon.svg:Icon=/usr/share/pixmaps/stereophotoview/appicon.svg:' "${pkgdir}/usr/share/applications/stereophotoview.desktop"
}
