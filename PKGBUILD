# Maintainer: Torben <torben.letorbi at gmail dot com>
# Contributor: emersion <contact at emersion dot fr>
# Contributor: Techlive Zheng <techlivezheng at gmail dot com>
# Contributor: Massimiliano Torromeo <massimiliano.torromeo at gmail dot com>

pkgname=geary-git
pkgver=r4719.5a87cf54
pkgrel=1
pkgdesc="A lightweight email client for the GNOME desktop"
arch=(i686 x86_64)
url="https://wiki.gnome.org/Apps/Geary"
license=('GPL3')
depends=('appstream-glib' 'enchant' 'gcr' 'gmime' 'gtk3' 'gnome-online-accounts'
         'gspell' 'libgee' 'libnotify' 'libsoup' 'libunwind' 'libxml2' 'sqlite'
         'webkit2gtk')
makedepends=('git' 'itstool' 'meson' 'vala')
provides=('geary')
conflicts=('geary')
source=('git+https://gitlab.gnome.org/GNOME/geary.git')
sha256sums=('SKIP')

pkgver() {
	cd "$srcdir/geary"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  cd "$srcdir/geary"
  if [[ -d build ]]; then
    rm -rf build
  fi
}

build() {
	cd "$srcdir/geary"
	meson --prefix=/usr --buildtype=release build
	ninja -v -C build
}

package() {
	cd "$srcdir/geary"
	DESTDIR="$pkgdir" ninja -v -C build install
}
