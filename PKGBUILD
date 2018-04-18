# Maintaner: sgerwk <sgerwk at aol dot com>
# package script file for archlinux
# makepkg -p THISFILE
pkgname=libllfat
pkgver=0.1.4
pkgrel=1
pkgdesc="library for low-level access to a FAT12/16/32 filesystem"
license=(GPL3)
url="http://github.com/sgerwk/libllfat"
depends=(glibc)
makedepends=('gcc' 'make')
arch=('x86_64' 'i686')
source=("$pkgname-$pkgver.tar.gz::https://github.com/sgerwk/libllfat/archive/v$pkgver.tar.gz")
md5sums=('871e2aebd09818adb2cf9ff85ad082aa')

build() {
        cd "$pkgname-$pkgver"
	make || return 1
}

check() {
        cd "$pkgname-$pkgver"
	return $(test -x build/fattool)
}

package() {
        cd "$pkgname-$pkgver"
        make DESTDIR="$pkgdir" install || return 1
}

