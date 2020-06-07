# Maintainer: Shatur <genaloner@gmail.com>

pkgname=crow-translate-git
pkgver=2.3.2.r1.g2a3aa55
pkgrel=1
pkgdesc='A simple and lightweight translator that allows to translate and say selected text using the Google Translate API and much more'
arch=(x86_64)
url=https://github.com/crow-translate/crow-translate
license=(GPL3)
depends=(qt5-base qt5-svg qt5-multimedia qt5-x11extras gst-plugins-good openssl)
makedepends=(qt5-tools git)
provides=(${pkgname%-git})
conflicts=(${pkgname%-git})
source=(git+$url)
sha256sums=(SKIP)

pkgver() {
  cd ${pkgname%-git}
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

# Clone submodules
prepare() {
  cd ${pkgname%-git}

  git submodule init
  git submodule update
}

build() {
  mkdir -p ${pkgname%-git}/build
  cd ${pkgname%-git}/build

  cmake -D CMAKE_INSTALL_PREFIX="$pkgdir/usr" ..
  cmake --build .
}

package() {
  cd ${pkgname%-git}/build

  cmake --install .
  rm -f "${pkgdir}/usr/share/icons/hicolor/icon-theme.cache"
}
