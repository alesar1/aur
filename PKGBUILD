# Maintainer: dracorp aka Piotr Rogoza <piotr.r.public at gmail.com>

pkgname=kimageannotator
_pkgname=kImageAnnotator
pkgver=0.3.1
pkgrel=1
pkgdesc='Tool for annotating images'
arch=('i686' 'x86_64')
url='https://github.com/DamirPorobic/kImageAnnotator'
license=('GPL')
depends=(
  qt5-base
  qt5-svg
  'kcolorpicker>=0.1.4'
)
makedepends=(
  cmake
  extra-cmake-modules
  qt5-tools
  'kcolorpicker>=0.1.4'
)
conflicts=(kimageannotator-git)
source=(kimageannotator-$pkgver.tar.gz::https://github.com/ksnip/kImageAnnotator/archive/v${pkgver}.tar.gz)

prepare(){
  cd "$srcdir/$_pkgname-$pkgver"
  test -d build || mkdir build
  sed 's@^add_subdirectory.*kColorPicker@#&@' -i CMakeLists.txt
}
build(){
  cd "$srcdir/$_pkgname-$pkgver/build"
  cmake -DCMAKE_INSTALL_PREFIX=/usr -DBUILD_SHARED_LIBS=ON ..
  make
}
package(){
  cd "$srcdir"/$_pkgname-$pkgver/build
  make DESTDIR="$pkgdir" install
  cd "$pkgdir"/usr
  install -dm755 bin
  install -Dm544 "$srcdir/$_pkgname-$pkgver/build/example/kImageAnnotator-example" bin/kImageAnnotator-example
  strip bin/kImageAnnotator-example
  if [[ $(command -p chrpath) ]]; then
    chrpath -dk bin/kImageAnnotator-example 
  fi
}

sha256sums=('483bc305631c018c4d7fe835fe0d1c5b39b350b66b55698f5868d4879131a776')
