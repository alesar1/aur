# Maintainer: Vasket <vasket at  dismail dot de>

pkgname="evolution-decsync"
_pkgname="Evolution-DecSync"
pkgbase="evolution-decsync"
pkgver="git"
pkgrel="1"
pkgdesc="DecSync Plugin for Evoulution. It syncs contact and calendars to a directory, which can be shared with syncthing or rsync"
arch=(x86_64 i686 armv7h aarch64)
license=("GPLv2")
url="https://github.com/39aldo39/${_pkgname}"
depends=(libgee json-glib evolution-data-server evolution)
makedepends=(cmake meson ninja vala git)
provides=("evolution-decsync")

source=("git+https://github.com/39aldo39/${_pkgname}")
sha256sums=("SKIP")

build() {
    cd "${_pkgname}"
    meson build
    ninja -C build
}

package() {
	cd "${_pkgname}"
  DESTDIR="${pkgdir}" meson install -C build

}

