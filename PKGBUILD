# Maintainer: Tércio Martins <echo dGVyY2lvd2VuZGVsQGdtYWlsLmNvbQo= | base64 -d>

pkgname=olive-git
_pkgname=olive
pkgver=continuous.r26.g3fe0d1cd
_commit=3fe0d1cd
pkgrel=1
arch=('i686' 'x86_64')
pkgdesc="Free non-linear video editor"
url="https://www.olivevideoeditor.org/"
license=('GPL3')
depends=('ffmpeg' 'opencolorio' 'qt5-multimedia' 'qt5-svg')
makedepends=('cmake' 'git' 'qt5-tools')

# Temporarily, the "olive-git" package is incompatible
# with the dependency "olive-community-effects-git".
# More information on the link:
# https://github.com/cgvirus/Olive-Editor-Community-Effects/blob/65b96e093c128f2bb9336e6b7ed93f801e73435d/README.md
# optdepends=('olive-community-effects-git')

provides=('olive')
conflicts=('olive')
source=("git+https://github.com/olive-editor/olive#commit=$_commit")
sha512sums=('SKIP')

pkgver() {
  cd "$_pkgname"
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  if [ -d build ]
  then
    rm -rf build
  fi

  mkdir build
}

build() {
  cd build
  cmake -DCMAKE_BUILD_TYPE=Release \
        -DCMAKE_INSTALL_PREFIX=/usr \
        ../$_pkgname
  make
}

package() {
  cd build
  make DESTDIR="$pkgdir/" install
}
