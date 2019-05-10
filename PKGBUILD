# Maintainer: Manuel Lladosa <$(base64 --decode <<<'bWFub2xvbGxyQHJpc2V1cC5uZXQK')>
# Contributor: Tarn Burton <twburton at gmail dot com>
pkgname='pioneer-git'
pkgver=20190203.r153.gea0126494
pkgrel=1
pkgdesc="A game of lonely space adventure"
arch=('x86_64')
url="https://github.com/pioneerspacesim/pioneer"
license=('GPL3')
provides=('pioneer')
conflicts=('pioneer-bin' 'pioneer')
depends=('libsigc++' 'sdl2_image' 'freetype2' 'libvorbis' 'assimp' 'hicolor-icon-theme')
makedepends=('naturaldocs' 'cmake')
source=("$pkgname::git+https://github.com/pioneerspacesim/pioneer")
sha256sums=('SKIP')

pkgver() {
  cd $pkgname
  git describe --long --tags | sed -r 's/^v//;s/([^-]*-g)/r\1/;s/-/./g'
}

build() {
  cd $pkgname

  # Autotools support is dropped
  # https://github.com/pioneerspacesim/pioneer/issues/4525#issuecomment-460067597
  # Old autotools build
  #  ./bootstrap
  #  ./configure CXXFLAGS='-fPIC' --prefix=/usr
  #  make
  #  make codedoc

  # New cmake build
  ./bootstrap cmake -D CMAKE_INSTALL_PREFIX:PATH=/usr \
    -D PIONEER_DATA_DIR:PATH=/usr/share/pioneer/
  make -C build

  # When game is installed models don't get compiled
  # As a workaround we recompile 'modelcompiler' using $srcdir/data directory
  # instead of /usr/share/pioneer
  # Later, we let the things as them was

  ./bootstrap cmake -D CMAKE_INSTALL_PREFIX:PATH=/usr \
    -D PIONEER_DATA_DIR:PATH="data"
  cd build ; mv modelcompiler modelcompiler.bak ; cd ..
  make -C build modelcompiler
  cd build ; mv modelcompiler.bak modelcompiler ; cd ..

  ./bootstrap cmake -D CMAKE_INSTALL_PREFIX:PATH=/usr \
   -D PIONEER_DATA_DIR:PATH=/usr/share/pioneer/

#  make codedoc (execute naturaldocs manually)
  install -dm755 codedoc
  naturaldocs -i ./src/ -i ./data/libs/ -xi ./src/data/ -o HTML codedoc/ -p ./nd/ -do -ro -s Default Local
  # Remove references to $srcdir. A 'naturaldocs' bug?
  grep -Rl "$(pwd)" codedoc/ | xargs sed -i "s#$(pwd)/##g"
}

package() {
  cd $pkgname

  make -C build DESTDIR="$pkgdir" install

  install -dm755 "$pkgdir/usr/share/doc/pioneer"
  cp -R codedoc/* "$pkgdir/usr/share/doc/pioneer"
}
