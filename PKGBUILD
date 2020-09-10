# Maintainer: nightuser <nightuser.android@gmail.com>

pkgname=dduper-git
_pkgname=${pkgname%'-git'}
pkgver=0.01.r39.g3b65aec
pkgrel=1
pkgdesc='Block-level out-of-band BTRFS dedupe tool'
url="https://github.com/Lakshmipathi/dduper"
license=(GPL2)
arch=(x86_64)
makedepends=('git')
depends=('libutil-linux' 'lzo' 'zlib' 'zstd' 'libgcrypt' 'python-numpy' 'python-ptable')
source=(
	"$_pkgname::git+https://github.com/Lakshmipathi/dduper.git"
	'btrfs-progs::git://git.kernel.org/pub/scm/linux/kernel/git/kdave/btrfs-progs.git'
	'0001-Change-the-path-to-patched-btrfs.patch')
sha256sums=(
	'SKIP'
	'SKIP'
	'e00b2c85b3905155ebbedfe0b985e390915ee0576136137937687e008a2de352')

pkgver() {
	cd "$srcdir/$_pkgname"
	git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g;s/^v//'
}

prepare() {
	cd "$srcdir/$_pkgname"
	patch -Np1 -i "$srcdir/0001-Change-the-path-to-patched-btrfs.patch"

	cd "$srcdir/btrfs-progs"
	patch -Np1 -i "$srcdir/$_pkgname/patch/btrfs-progs-v5.6.1/0001-Print-csum-for-a-given-file-on-stdout.patch"
}

build() {
	cd "$srcdir/btrfs-progs"
	./autogen.sh
	./configure --prefix=/usr --with-crypto=libgcrypt \
		--disable-documentation \
		--disable-shared --disable-static \
		--disable-convert --disable-python
	make btrfs
}

package() {
	install -Dm755 "$srcdir/$_pkgname/$_pkgname" "$pkgdir/usr/bin/$_pkgname"
	install -Dm755 "$srcdir/btrfs-progs/btrfs" "$pkgdir/usr/lib/btrfs-$_pkgname"
}

# vim: noet:sw=8:ts=8
