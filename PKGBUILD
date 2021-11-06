# Maintainer: Igor Dyatlov <dyatlov.igor@protonmail.com>
# Contributor: Evangelos Paterakis <evan@geopjr.dev>

pkgname=hashbrown-git
_pkgname=hashbrown
_app_id=dev.geopjr.Hashbrown
pkgver=2.1.0.r2.g54122eb
pkgrel=1
pkgdesc="A simple GUI tool to generate, compare and verify MD5, SHA1 & SHA256 hashes"
arch=('x86_64')
url="https://github.com/GeopJr/Hashbrown"
license=('AGPL3')
depends=('gtk4' 'libadwaita')
makedepends=('crystal' 'gobject-introspection' 'gobject-introspection-runtime' 'shards' 'spglib')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=("git+$url.git")
_source=Hashbrown
sha256sums=('SKIP')

pkgver() {
  cd "$_source"
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "$_source"
  shards build --release --no-debug
}

check() {
  cd "$_source"
  crystal spec
}

package() {
  install -Dm755 "$_source/bin/hashbrown" "$pkgdir/usr/bin/$_pkgname"
  install -Dm644 "$_source/extra/Hashbrown.desktop" "$pkgdir/usr/share/applications/$_app_id.desktop"
  install -Dm644 "$_source/extra/icons/logo.svg" "$pkgdir/usr/share/icons/hicolor/scalable/apps/$_app_id.svg"
  install -Dm644 "$_source/extra/icons/symbolic.svg" "$pkgdir/usr/share/icons/hicolor/symbolic/apps/$_app_id-symbolic.svg"
  install -Dm644 "$_source/extra/dev.geopjr.Hashbrown.metainfo.xml" "$pkgdir/usr/share/metainfo/$_app_id.metainfo.xml"
}
