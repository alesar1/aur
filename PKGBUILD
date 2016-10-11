# $Id$
# Maintainer: Massimiliano Torromeo <massimiliano.torromeo@gmail.com>

pkgname=asix-module
pkgver=4.18.1
pkgrel=1
pkgdesc="A kernel module for the ASIX USB 2.0 low power AX88772B/AX88772A/AX88760/AX88772/AX88178 ethernet controllers"
url="http://www.asix.com.tw"
license=("GPL")
arch=('i686' 'x86_64')
depends=('glibc' 'linux')
makedepends=('linux-headers')
_filename=AX88772C_772B_772A_760_772_178_LINUX_DRIVER_v${pkgver}_Source
source=(http://www.asix.com.tw/FrootAttach/driver/$_filename.tar.gz
        linux-4.7.patch)
install=$pkgname.install

prepare() {
	cd "$srcdir"/$_filename
	# patch -p1 -i ../linux-4.7.patch
}

build() {
	_kernver=$(pacman -Q linux | sed -r 's#.* ([0-9]+\.[0-9]+).*#\1#')
	KERNEL_VERSION=$(cat /usr/lib/modules/extramodules-$_kernver-ARCH/version)

	cd "$srcdir"/$_filename
	make SYSSRC=/usr/src/linux-$_kernver KDIR=/usr/lib/modules/$KERNEL_VERSION/build
	gzip -f9 asix.ko
}

package() {
	_kernver=$(pacman -Q linux | sed -r 's#.* ([0-9]+\.[0-9]+).*#\1#')
	depends=("linux>=$_kernver" "linux<${_kernver/.*}.$(expr ${_kernver/*.} + 1)")
	KERNEL_VERSION=$(cat /usr/lib/modules/extramodules-$_kernver-ARCH/version)
	msg "Kernel = $KERNEL_VERSION"

	cd "$srcdir"/$_filename
	install -D -m644 asix.ko.gz "$pkgdir/usr/lib/modules/extramodules-$_kernver-ARCH/asix.ko.gz"
	sed -i "s|extramodules-.*-ARCH|extramodules-$_kernver-ARCH|" "$startdir/$pkgname.install"
}

sha256sums=('061ebb4b8164ecc78310c05e594b30e96cc2b4e9016d05d9cf90f0ac7eec0ab6'
            'c61fd6d00d78280df68be911f459662cd8b58b764b82d2ef4534b99dffa6e05e')
