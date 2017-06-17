# Maintainer: drakkan <nicola.murino at gmail dot com>
# Contributor: drakkan <nicola.murino at gmail dot com>

pkgname=openh264
pkgver=1.7.0
pkgrel=1
pkgdesc='OpenH264 is a codec library which supports H.264 encoding and decoding'
license=('BSD')
arch=('x86_64' 'i686')
url="http://www.openh264.org/"
depends=('gcc-libs')
makedepends=('nasm')
source=("https://github.com/cisco/openh264/archive/v${pkgver}.tar.gz")
sha256sums=('9c07c38d7de00046c9c52b12c76a2af7648b70d05bd5460c8b67f6895738653f')

build() {
  cd "openh264-$pkgver"
  make 
}

package() {
  cd "openh264-$pkgver"
  make DESTDIR="$pkgdir" PREFIX="/usr" install
  install -Dm755 h264dec "$pkgdir"/usr/bin/h264dec
  install -Dm755 h264enc "$pkgdir"/usr/bin/h264enc
  install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}

# vim:set ts=2 sw=2 et:
