# Maintainer: Jonathon Fernyhough <jonathon_at_manjaro dot+org>
# Contributor: Valentin Huélamo (birdtray.desktop, now upstreamed)
# Contributor: Kr1ss <kr1ss.x#yandex#com> (cmake)
# Contributor: Dmitry Valter <dvalter"protonmail"com>

pkgname=birdtray
pkgver=1.8.1
pkgrel=1
pkgdesc="Run Thunderbird with a system tray icon."
arch=('i686' 'x86_64' 'armv7h' 'armv6h' 'aarch64')
url="https://github.com/gyunaev/birdtray"
license=('GPL-3.0')
depends=(qt5-svg qt5-x11extras)
optdepends=('qt5-translations: Support for translations')
makedepends=(cmake qt5-tools)
source=("$pkgname-$pkgver.tar.gz::$url/archive/$pkgver.tar.gz"
        "$url"/commit/38b333b5ff9318ae136d719c5fdd4c790c294833.diff)
sha1sums=('805cfa9f30af71c268160068bb53ccde618244e8'
          'd33f43ecc342cdfa36ce7783ccad6c35b57c50f1')

prepare() {
  cd $pkgname-$pkgver

  # "Fixed compilation on Qt 5.15",
  # https://github.com/gyunaev/birdtray/commit/38b333b5ff9318ae136d719c5fdd4c790c294833
  patch -Np1 -i ../38b333b5ff9318ae136d719c5fdd4c790c294833.diff
}

build() {
  mkdir -p build && cd build
  cmake ../$pkgname-$pkgver \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_BUILD_TYPE=Release
  make
}

package() {
  make -C build DESTDIR="$pkgdir" install
  install -Dm644 -t "$pkgdir"/usr/share/doc/$pkgname/ $pkgname-$pkgver/README.md
}
