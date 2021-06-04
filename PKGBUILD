# Maintainer: librewish <librewish at gmail dot com>
# Co-Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
# Contributor: Chris Severance aur.severach aATt spamgourmet dott com
# Contributor: Jay Garcia <morbidj at gmail dot com>
# Contributor: Doug Newgard <scimmia22 at outlook dot com>
# Contributor: Robert Orzanna <orschiro at gmail dot com>
pkgname=timeshift
pkgver=20.11.1+3+g08d0e59
pkgrel=4
pkgdesc="A system restore utility for Linux"
arch=('i686' 'x86_64' 'armv6h' 'armv7h' 'aarch64')
url="https://github.com/teejee2008/timeshift"
license=('GPL')
depends=('gtk3' 'libsoup' 'cronie' 'rsync' 'libgee' 'vte3' 'xapp' 'xorg-xhost')
makedepends=('git' 'vala')
checkdepends=('appstream-glib' 'desktop-file-utils')
optdepends=('btrfs-progs: BTRFS support')
install="$pkgname.install"
_commit=08d0e5912b617009f2f0fdb61fb4173cb3576ed4
source=("git+https://github.com/teejee2008/timeshift.git#commit=$_commit"
        'util-linux.patch')
sha256sums=('SKIP'
            '4d7f17e697c47784b3c6fb587fa4bef59e8c036de3e04a838ca8d426a592f354')

pkgver() {
	cd "$srcdir/$pkgname"
	git describe --tags | sed 's/^v//;s/-/+/g'
}

prepare() {
	cd "$srcdir/$pkgname"
	sed -i -e 's/--Xcc="-O3" //g' src/makefile

	# https://github.com/teejee2008/timeshift/issues/753
	patch -Np1 -i $srcdir/util-linux.patch
}

build() {
	cd "$srcdir/$pkgname/src"
	make app-gtk
	make app-console
	make pot
}

check() {
	cd "$srcdir/$pkgname"
	appstream-util validate-relax --nonet debian/*.appdata.xml
	desktop-file-validate "src/$pkgname-gtk.desktop"
}

package() {
	cd "$srcdir/$pkgname/src"
	make DESTDIR="$pkgdir" install
}
