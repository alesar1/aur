# Maintainer: Matthew Monaco <cx monaco dgbaley27>
#             Ivan           <vantu5z@mail.ru>

# http://kernel.opensuse.org/cgit/kernel-source/
# http://kernel.opensuse.org/cgit/kernel-source/commit/patches.drivers?id=940e57e2c66093f6fee481ab4224dd4294e3793f
# https://bugzilla.novell.com/768506
# https://bugzilla.novell.com/765524

_kver=4.8
_gitroot=git://repo.or.cz/linux.git
_gitcommit=linux-$_kver.y
_cur_kernel="$(uname -r)"

pkgname=synaptics-led
pkgver=$_kver
pkgrel=1
arch=(i686 x86_64)
license=(GPL2)
url="https://github.com/mmonaco/PKGBUILDs"
pkgdesc="Synaptics LED enabled psmouse kernel module"
depends=(linux)
makedepends=(git linux-headers)
install="$pkgname.install"

source=(
	SHA256SUMS
	"$pkgname.install"
	kernel.patch
)

sha256sums=('557131bc0d81dd14336fd8ae38efe2c6936c85accd82703af784dc621cf0927a'
            'b46af61822e8ec8639faa1b60dd3b6b1a64e24854611902499b9f81d2691e22c'
            '5b4222fe4336ebe9e9a17f6814c69393a3e9a13831b038aed1ede846868d6623')

build() {

	msg2 "Getting source from $_gitroot"
	cd "$srcdir"
	git archive --remote="$_gitroot" "$_gitcommit" drivers/input/mouse | tar -x

	msg2 "Performing Integrity Check"
	cd "drivers/input/mouse"
	sha256sum --quiet -c "$srcdir/SHA256SUMS"

	msg2 "Patching source"
    cd "${srcdir}"
	for p in ../*.patch; do
      msg2 "Applying patch: $p"
      patch -p1 -i "$p"
    done

	msg2 "Building psmouse.ko"
	cd "drivers/input/mouse"
	make -C "/usr/lib/modules/$_cur_kernel/build" M="$PWD" psmouse.ko

	msg2 "Compressing psmouse.ko.gz"
	gzip -9 psmouse.ko
}

package() {
	cd "$srcdir/drivers/input/mouse"

	# determin dir name in /usr/lib/modules/

	_EXTRAMODULES=$(ls /usr/lib/modules | grep extra)

	# for lts or ARCH kernel you can make like this (if it not only one):
	#_EXTRAMODULES=$(ls /usr/lib/modules | grep extra |grep lts)
	#_EXTRAMODULES=$(ls /usr/lib/modules | grep extra |grep ARCH)

	install -D -m 0644 psmouse.ko.gz "$pkgdir/usr/lib/modules/${_EXTRAMODULES}/psmouse.ko.gz"

	# if you have not one kernel installed, you should change install string for EXTRAMODULES manualy:
	# install -D -m 0644 psmouse.ko.gz "$pkgdir/usr/lib/modules/{YOUR_EXTRAMODULES_DIR}/psmouse.ko.gz"
}
