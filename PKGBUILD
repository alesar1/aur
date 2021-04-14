# Maintainer: Shatur95 <genaloner@gmail.com>

pkgname=crow-translate
pkgver=2.8.2
pkgrel=1
pkgdesc='A simple and lightweight translator that allows to translate and say selected text using Google, Yandex and Bing translate API'
arch=(x86_64 aarch64)
url=https://github.com/crow-translate/crow-translate
license=(GPL3)
depends=(qt5-base qt5-svg qt5-multimedia qt5-x11extras gst-plugins-good openssl tesseract)
makedepends=(git qt5-tools extra-cmake-modules)
source=($pkgname-$pkgver.tar.gz::$url/archive/$pkgver.tar.gz)
sha256sums=(2680c8fc22b340fbfe92cc153cfc02743585055530e4ae1e74b9c72ef14aedfa)

build() {
  cd $pkgname-$pkgver

  cmake -B build -D CMAKE_INSTALL_PREFIX="$pkgdir/usr"
  cmake --build build
}

package() {
  cd $pkgname-$pkgver

  cmake --install build
  rm -f "${pkgdir}/usr/share/icons/hicolor/icon-theme.cache"
} 
