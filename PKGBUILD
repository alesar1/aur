# Maintainer: Baltazár Radics <baltazar.radics@gmail.com>

_target=xtensa-esp32-elf
pkgname=$_target-binutils
pkgver=2.34
pkgrel=1
pkgdesc='A set of programs to assemble and manipulate binary and object files for the xtensa esp32 (bare-metal) target'
arch=(x86_64)
url='https://www.gnu.org/software/binutils/'
license=(GPL)
depends=(libelf)
source=(https://ftp.gnu.org/gnu/binutils/binutils-$pkgver.tar.bz2{,.sig})
sha256sums=('89f010078b6cf69c23c27897d686055ab89b198dddf819efb0a4f2c38a0b36e6'
            'SKIP')
validpgpkeys=('EAF1C276A747E9ED86210CBAC3126D3B4AE55E93'  # Tristan Gingold <gingold@adacore.com>
              '3A24BC1E8FB409FA9F14371813FCEF89DD9E3C4F') # Nick Clifton (Chief Binutils Maintainer) <nickc@redhat.com>

prepare() {
	cd binutils-$pkgver
	sed -i "/ac_cpp=/s/\$CPPFLAGS/\$CPPFLAGS -O2/" libiberty/configure
}

build() {
	cd binutils-$pkgver

	./configure \
		--target=$_target \
		--with-sysroot=/usr/$_target \
		--prefix=/usr \
		--enable-multilib \
		--enable-interwork \
		--with-gnu-as \
		--with-gnu-ld \
		--disable-nls \
		--enable-ld=default \
		--enable-gold \
		--enable-plugins \
		--enable-deterministic-archives

	make
}

check() {
	cd binutils-$pkgver
	
	# unset LDFLAGS as testsuite makes assumptions about which ones are active
	# do not abort on errors - manually check log files
	make LDFLAGS="" -k check || true
}

package() {
	cd binutils-$pkgver

	make DESTDIR="$pkgdir" install

	# Remove file conflicting with host binutils and manpages for MS Windows tools
	# rm "$pkgdir"/usr/share/man/man1/arm-none-eabi-{dlltool,windres,windmc}*

	# Remove info documents that conflict with host version
	rm -r "$pkgdir"/usr/share/info
}

# vim: ts=2 sw=0 noet
