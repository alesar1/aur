# Maintainer: Mufeed Ali <fushinari@protonmail.com>

pkgname=komikku
_author=valos
_gitname=Komikku
pkgver=0.29.2
pkgrel=1
pkgdesc='Online/offline Manga reader for GNOME, built for the Librem 5'
arch=(any)
url=https://gitlab.com/valos/Komikku
license=(GPL3)
depends=(
  gtk3
  libhandy
  python
  python-beautifulsoup4
  python-brotli
  python-cairo
  python-cffi
  python-cloudscraper
  python-dateparser
  python-gobject
  python-keyring
  python-lxml
  python-magic
  python-pillow
  python-pure-protobuf
  python-requests
  python-unidecode
  python-wheel
  webkit2gtk
)
makedepends=(
  gobject-introspection
  meson
)
optdepends=('org.freedesktop.secrets: store passwords safely')
source=("https://gitlab.com/$_author/$_gitname/-/archive/v$pkgver/$_gitname-v$pkgver.tar.gz")
sha256sums=('20e78e8fbdabc926d9ead44efcc8ec9e16807745fbda8502451de99a4e864ec4')

build() {
  arch-meson $_gitname-v$pkgver build
  ninja -C build
}

package() {
  DESTDIR="${pkgdir}" ninja -C build install
}
