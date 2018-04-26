# Maintainer: Jean-Michaël Celerier <jeanmichael.celerier at gmail dot com>
pkgname=ossia-score
pkgver=1.0.0b42
release_tag=v1.0.0-b42
pkgrel=2
pkgdesc="Ossia Score, an interactive sequencer for the intermedia arts"
arch=('x86_64')
url="http://www.ossia.io"
license=('CeCILLv2')
groups=()
depends=('boost' 'qt5-base' 'qt5-imageformats' 'qt5-svg' 'qt5-websockets' 'qt5-quickcontrols2' 'qt5-serialport' 'qt5-multimedia' 'qt5-declarative' 'ffmpeg' 'portaudio' 'jack2')
makedepends=('git' 'cmake' 'qt5-tools')
provides=('ossia-score')
conflicts=()
replaces=('i-score')
backup=()
options=()
install=
source=()
noextract=()


_gitroot=https://github.com/OSSIA/score
_gitname=score

build() {
  cd "$srcdir"

  if [[ -d "score" ]]; then
    rm -rf "score"
  fi

  git clone --recursive -j8 "$_gitroot" "score"
  (
    cd "score"
    git checkout "$release_tag"
    git submodule update --init --recursive
  )

  mkdir -p "$srcdir/build"
  cd "$srcdir/build"
  cmake -Wno-dev -DSCORE_CONFIGURATION=static-release -DDEPLOYMENT_BUILD=1 -DCMAKE_INSTALL_PREFIX="$pkgdir/usr" "$srcdir/$_gitname"
  cmake --build . --target all_unity
}

package() {
  cd "$srcdir/build"
  cmake --build . --target install
  install -D -m644 "$srcdir/$_gitname/LICENSE.txt" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
