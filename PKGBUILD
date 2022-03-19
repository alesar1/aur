# Maintainer: Christopher Arndt <aur -at- chrisarndt -dot- de>

pkgname=midiomatic
pkgver="0.2.1"
pkgrel=1
pkgdesc="A collection of MIDI filter, generator and processor LV2 and VST plugins"
arch=(x86_64)
url="https://github.com/SpotlightKid/midiomatic"
license=(MIT)
groups=(pro-audio lv2-plugins vst-plugins)
depends=(gcc-libs)
checkdepends=(kxstudio-lv2-extensions lv2lint)
source=(
    "https://github.com/SpotlightKid/midiomatic/releases/download/v$pkgver/$pkgname-$pkgver.tar.gz"
)
sha256sums=('aed203bde8fd01e279e058d48f084754f50b9fd758d7b56b845f11d8fbdbb1f3')

build() {
  cd "$pkgname-$pkgver"
  make
}

check() {
  cd "$pkgname-$pkgver"
  make check
}

package() {
  cd "$pkgname-$pkgver"
  # install plugin LV2 bundles and VST binaries
  make PREFIX=/usr DESTDIR="$pkgdir" install
  # readme
  install -Dm644 README.md -t "$pkgdir"/usr/share/doc/$pkgname
  # license file
  install -Dm644 LICENSE -t "$pkgdir"/usr/share/licenses/$pkgname
}
