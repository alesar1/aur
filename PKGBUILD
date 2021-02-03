# Maintainer: Felix Bühler <account at buehler dot rocks>

pkgname=newsflash
_pkgname=news_flash_gtk
pkgver=1.2.0
pkgrel=1
pkgdesc="The spiritual successor to FeedReader"
arch=(any)
url="https://gitlab.com/news-flash/news_flash_gtk"
license=(GPL3)
depends=(libhandy webkit2gtk)
makedepends=(cargo git meson rust)
conflicts=(newsflash-git)
_commit=945983c8c3f9bad529a6630095d2419b80bc918e
# in the future change this to download code directly instead of using git:
# https://gitlab.com/news-flash/$_pkgname/-/archive/$pkgver/$_pkgname-$pkgver.tar.gz
source=("git+https://gitlab.com/news-flash/news_flash_gtk.git#commit=$_commit")
sha512sums=("SKIP")

pkgver() {
  cd "${_pkgname}"
  git describe --tags | sed 's/^v//;s/-/+/g'
}

build() {
	cd "${_pkgname}"
	arch-meson _build
	ninja -C _build
}

package() {
	cd "${_pkgname}"
	env DESTDIR="$pkgdir" ninja -C _build install
}
