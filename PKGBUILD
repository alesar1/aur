# Maintainer: Igor Dyatlov <dyatlov.igor@protonmail.com>
# Contributor: Gustavo Peredo <gustavomperedo@protonmail.com>

pkgname=font-downloader-git
_pkgname=font-downloader
pkgver=4.3.0
pkgrel=2
pkgdesc="A simple GTK font downloader"
arch=('any')
url="https://github.com/GustavoPeredo/font-downloader"
license=('GPL3')
depends=('gtk3' 'libhandy' 'python3' 'python-gobject')
makedepends=('git' 'meson' 'ninja')
install=
source=("git+https://github.com/GustavoPeredo/font-downloader.git")
b2sums=('SKIP')

build() {
  arch-meson $_pkgname build
  meson compile -C build
}

package() {
  DESTDIR="$pkgdir" ninja install -C build
}