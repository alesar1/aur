# Maintainer: Igor Dyatlov <dyatlov.igor@protonmail.com>

pkgname=g4music
pkgver=1.6.1
pkgrel=2
pkgdesc="Play your music"
arch=('x86_64' 'aarch64')
url="https://gitlab.gnome.org/neithern/g4music"
license=('GPL3')
depends=('libadwaita' 'gstreamer' 'gst-plugins-base' 'gst-plugins-bad' 'gst-plugins-good' 'taglib' 'tracker3')
makedepends=('meson' 'vala')
checkdepends=('appstream-glib')
source=($url/-/archive/v$pkgver/$pkgname-v$pkgver.tar.gz
0344-add-dependencies-glib2.patch)
b2sums=('1122a3e006575f496ba31edc7bd15ed718aa226660933eee6dcb74145ec3971f20a171b36424251648db23a492252c3ae98a53c319f6fa253971c43bb61d187f'
        'e9df991df2864971ed35d7a00f456c082ac84fb238005afe0fe5ad306199a0acc3c2bb411029c6de003cd443c2205f4d300618946d91a5a80c0b92a872082ce8')

prepare() {
  cd "$pkgname-v$pkgver"
  patch -p1 -i ../0344-add-dependencies-glib2.patch
}

build() {
  arch-meson --buildtype release "$pkgname-v$pkgver" build
  meson compile -C build
}

check() {
  meson test -C build || :
}

package() {
  meson install -C build --destdir "$pkgdir"
}
