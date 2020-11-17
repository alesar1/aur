# Maintainer: Andreas Tennert <mail at andreas-tennert dot de>
pkgname='lcarswm'
pkgver=20.3
pkgrel=1
pkgdesc="LCARS Window Manager for lcarsde"
arch=('any')
url="https://lcarsde.github.io"
license=('GPL2')
groups=('lcarsde')
depends=('jdk-openjdk' 'libx11' 'libxpm' 'libxrandr' 'pango' 'icu' 'libxml2' 'glib2' 'libxft' 'harfbuzz' 'freetype2')
optdepends=('ttf-ubuntu-font-family')
makedepends=('ncurses5-compat-libs')
source=("$pkgname-$pkgver.tar.gz::https://github.com/lcarsde/lcarswm/archive/$pkgver.tar.gz")
md5sums=('c5757a63ea9c901d84f5ab46fedcf3a1')

build() {
  cd "$pkgname-$pkgver"

  ./gradlew build
}

package() {
  cd "$pkgname-$pkgver"

  mkdir -p "$pkgdir/usr/bin/"
  cp "./build/bin/native/releaseExecutable/lcarswm.kexe" "/usr/bin/lcarswm.kexe"
  cp -r "./src/nativeMain/resources/*" "/"

  mkdir -p "/usr/share/doc/lcarswm"
  cp "./LICENSE" "/usr/share/doc/lcarswm/copyright"
}
