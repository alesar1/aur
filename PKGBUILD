# Maintainer: zan <zan@420blaze.it>

pkgname=ajour
pkgver=1.0.1
pkgrel=1
pkgdesc='World of Warcraft addon manager written in Rust'
url='https://www.getajour.com'
license=(MIT)
arch=(x86_64)
depends=(fontconfig freetype2 hicolor-icon-theme libxcb openssl)
makedepends=(cargo rust icoutils)
conflicts=(ajour)
provides=(ajour)
source=("https://github.com/casperstorm/$pkgname/archive/$pkgver.tar.gz"
        "$pkgname.desktop")
sha256sums=('532f8418de2648ce1ae3f890e9d612147c8d9a3bfd31d076bda2746435ffbd4a'
            'd356c0f7ab3087a087e2ff261bf6348e62e87190805fa166fcbe9e3f8b64fb0d')

build() {
  cd "$pkgname-$pkgver"
  cargo build --release
  icotool "resources/windows/ajour.ico" -x
}

package() {
  install -Dm644 "$pkgname.desktop" "$pkgdir/usr/share/applications/$pkgname.desktop"
  cd "$pkgname-$pkgver"
  install -Dm755 "target/release/$pkgname" "$pkgdir/usr/bin/$pkgname"
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

  for i in "1 16" "2 24" "3 32" "4 48" "5 64" "6 96" "7 128" "8 192" "9 256"
  do
    set -- $i
    install -Dm644 "${pkgname}_$1_$2x$2x32.png" "$pkgdir/usr/share/icons/hicolor/$2x$2/apps/$pkgname.png"
  done
}
