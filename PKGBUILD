# Contributor: Alexander Mamzikov <av.mamzikov@gmail.com>

pkgname=stereophotoview
pkgver=1.3.0
pkgrel=1
pkgdesc="A cross platform stereoscopic photo viewer and editor"
arch=('i686' 'x86_64')
url="https://bitbucket.org/av-mamzikov/stereophotoview"
license=('GPL3')
groups=()
depends=(libpng qt5-base qt5-declarative)
makedepends=(qt5-base qt5-tools qt5-declarative qt5-multimedia qt5-quickcontrols)
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=.install
source=(https://bitbucket.org/av-mamzikov/stereophotoview/get/${pkgver}.zip)
noextract=()
md5sums=('63813849d5b41c82f37daaa23e5a3057') #generate with 'makepkg -g'

build() {
  cd "$srcdir"
  test -d build || mkdir build
  cd build
  qmake NoPostInstall=1 PREFIX=${pkgdir}/usr ../av-mamzikov-stereophotoview-*
  make
}

package()
{
  cd "$srcdir/build"
  make install
  sed -i -e 's:Icon=stereophotoview/appicon.svg:Icon=/usr/share/pixmaps/stereophotoview/appicon.svg:' "${pkgdir}/usr/share/applications/stereophotoview.desktop"
}
