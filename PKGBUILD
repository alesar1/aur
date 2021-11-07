# Maintainer: Hunter Wittenborn <hunter@hunterwittenborn.com>
_release=alpha
_target=aur

pkgname=makedeb-makepkg-alpha
pkgver=8.11.0
pkgrel=1
arch=(any)
depends=('awk' 'libarchive' 'bzip2' 'coreutils' 'fakeroot' 'file' 'findutils' 'gettext' 'gnupg' 'grep' 'gzip' 'sed' 'ncurses' 'xz' 'makedeb-makepkg-alpha')
makedepends=('asciidoctor' 'git' 'make' 'jq')
conflicts=('makedeb-makepkg' 'makedeb-makepkg-beta')
license=('GPL2')
url="https://github.com/makedeb/makepkg"

source=("makepkg::git+${url}/#tag=v${pkgver}-${pkgrel}-${_release}")
sha256sums=('SKIP')

prepare() {
	cd makepkg/
	make prepare TARGET="${_target}"
}

package() {
	cd makepkg/
	make package DESTDIR="${pkgdir}" TARGET_OS="${_target}"
}
