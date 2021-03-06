# Maintainer: Térence Clastres <t dot clastres at gmail dot com>
# PKGBUILD based on the one from https://aur.archlinux.org/packages/lite

pkgname=lite-xl
_pkgname=lite
pkgver=1.16.2
pkgrel=1
pkgdesc='A lightweight text editor written in Lua'
arch=('x86_64')
url="https://github.com/franko/$pkgname"
license=('MIT')
depends=('agg' 'lua52' 'sdl2')
makedepends=('meson' 'gendesk')
conflicts=("$_pkgname")
provides=("$_pkgname")
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver-$pkgname.tar.gz"
	# credits to 6r1d  for the svg icon
	"$pkgname.svg.zip::https://github.com/rxi/lite/files/4716765/lite.svg.zip")
sha256sums=('9a5a01afc4f7e969685fca1297bc40a9aabce3782bb5c4d1486a63cc43c7dc01'
            '504d2ccd74f1c5b631b5b83a4f4319c74edb705fc383b3058f4b2d9354093b53')

prepare() {
    cd "$pkgname-$pkgver-$pkgname"

  # XDG desktop file
  gendesk -n -f \
          --pkgname "$pkgname" \
          --pkgdesc "$pkgdesc" \
          --exec "$_pkgname %F" \
          --name "Lite XL" \
          --categories "Utility;TextEditor;Development" \
          --mimetype "text/plain"

}

build() {
    cd "$pkgname-$pkgver-$pkgname"
    arch-meson build
    meson compile -C build
}

package() {
  cd "$pkgname-$pkgver-$pkgname"

  DESTDIR="$pkgdir" meson install -C build
  
  install -Dm 644 "../$_pkgname.svg" \
	"$pkgdir/usr/share/icons/hicolor/scalable/apps/$pkgname.svg"
  install -Dm 644 "$pkgname.desktop" -t "$pkgdir/usr/share/applications"
  install -Dm 644 "LICENSE" -t "$pkgdir/usr/share/licenses/$pkgname"
}

