# Maintainer: librewish <librewish at gmail dot com>
# Co-Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
# Contributor: Chris Severance aur.severach aATt spamgourmet dott com
# Contributor: Jay Garcia <morbidj at gmail dot com>
# Contributor: Doug Newgard <scimmia22 at outlook dot com>
# Contributor: Robert Orzanna <orschiro at gmail dot com>
pkgname=timeshift
pkgver=20.11.1+3+g08d0e59
pkgrel=2
pkgdesc="A system restore utility for Linux"
arch=('i686' 'x86_64' 'armv6h' 'armv7h' 'aarch64')
url="https://github.com/teejee2008/timeshift"
license=('GPL')
depends=('gtk3' 'libsoup' 'desktop-file-utils' 'cronie' 'rsync' 'libgee' 'vte3'
         'xapp' 'xorg-xhost' 'btrfs-progs')
makedepends=('git' 'vala' 'diffutils' 'coreutils')
install="$pkgname.install"
_commit=08d0e5912b617009f2f0fdb61fb4173cb3576ed4
source=("git+https://github.com/teejee2008/timeshift.git#commit=$_commit")
sha256sums=('SKIP')

pkgver() {
	cd "$srcdir/$pkgname"
	git describe --tags | sed 's/^v//;s/-/+/g'
}

build() {
	cd "$srcdir/$pkgname/src"
	export CFLAGS="${CFLAGS} --std=c99"
	make app-gtk
	make app-console
	make pot
}

package() {
	cd "$srcdir/$pkgname/src"
	make DESTDIR="$pkgdir" install
}
