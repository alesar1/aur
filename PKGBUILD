# Maintainer: Cyano Hao <c@cyano.cn>

_pkgbase=linux-elbin  # for mkinitcpio hook
pkgname=linux-el-bin
_basever=4.18.0
_rhver=305.17.1
pkgver=$_rhver.kabi.$_basever
epoch=8
pkgrel=1
pkgdesc="The Enterprise Linux kernel, modules, headers and documentation (Rocky Linux binary)"
url="https://git.rockylinux.org/staging/rpms/kernel"
arch=(x86_64)
license=(GPL2)
depends=(coreutils kmod initramfs)
optdepends=(
	'crda: to set the correct wireless channels of your country'
	'linux-firmware: firmware images needed for some devices'
	'pahole: utility for building kernel modules'
)
makedepends=(xz cpio)
options=('!strip')
backup=("etc/mkinitcpio.d/$_pkgbase.preset")
install=linux-el.install

# corresponding packages (rhel -> archlinux)
#   kernel               -> N/A (meta package)
# ✓ kernel-core          -> linux
# ✓ kernel-modules       -> linux
#   kernel-modules-extra -> N/A (obsolete)
# ✓ kernel-devel         -> linux-headers
# ✓ kernel-doc           -> linux-docs
#   kernel-headers       -> linux-api-headers
#   kernel-tools         -> N/A (misc userland utils)

_rocky_mirror="https://download.rockylinux.org/pub/rocky"
_rocky_ver="8.4"
_rpmver=$_basever-$_rhver.el8_4
source=(
	"$_rocky_mirror/$_rocky_ver/BaseOS/x86_64/os/Packages/kernel-core-$_rpmver.x86_64.rpm"
	"$_rocky_mirror/$_rocky_ver/BaseOS/x86_64/os/Packages/kernel-modules-$_rpmver.x86_64.rpm"
	"$_rocky_mirror/$_rocky_ver/BaseOS/x86_64/os/Packages/kernel-devel-$_rpmver.x86_64.rpm"
	"$_rocky_mirror/$_rocky_ver/BaseOS/x86_64/os/Packages/kernel-doc-$_rpmver.noarch.rpm"
	"$_pkgbase.preset"
)
noextract=(kernel-doc-$_rpmver.noarch.rpm)  # bsdtar cannot extract it
sha256sums=('1880467dc2416dc9711e43349545a3fdddbc48b10f3a03e78893633b0f057fc9'
            '8c82b122b6043fa66afd5ce56a3af909fd52bcfcfc88a82143b4f2f889da7ae1'
            'd34365d9919ea7c168a9db926d19ce4aaafeda3907b2ebf9e2d19118aaab4da7'
            '4b3a0650899df54b569c5f7043f7b41ddefb74254386f57047db6bc0c9d43e70'
            'dcb7f4f352395287152bb6a3469171d9199b1e000bab9f244e17db893cff70d9')

_rpm2cpio() {
	# source: `rpm2cpio` from extra/rpmextract

	leadsize=96
	o=`expr $leadsize + 8`
	set `od -j $o -N 8 -t u1 $pkg`
	il=`expr 256 \* \( 256 \* \( 256 \* $2 + $3 \) + $4 \) + $5`
	dl=`expr 256 \* \( 256 \* \( 256 \* $6 + $7 \) + $8 \) + $9`
	# echo "sig il: $il dl: $dl"

	sigsize=`expr 8 + 16 \* $il + $dl`
	o=`expr $o + $sigsize + \( 8 - \( $sigsize \% 8 \) \) \% 8 + 8`
	set `od -j $o -N 8 -t u1 $pkg`
	il=`expr 256 \* \( 256 \* \( 256 \* $2 + $3 \) + $4 \) + $5`
	dl=`expr 256 \* \( 256 \* \( 256 \* $6 + $7 \) + $8 \) + $9`
	# echo "hdr il: $il dl: $dl"

	hdrsize=`expr 8 + 16 \* $il + $dl`
	o=`expr $o + $hdrsize`

	dd if=$pkg ibs=$o skip=1 2>/dev/null
}

prepare() {
	echo "Extracting kernel-doc-$_rpmver.noarch.rpm"
	pkg=kernel-doc-$_rpmver.noarch.rpm _rpm2cpio | unxz | cpio -idm
}

package() {
	cd "$srcdir"
	install -Dm644 $_pkgbase.preset "$pkgdir"/etc/mkinitcpio.d/$_pkgbase.preset

	# kernel image and modules
	install -m755 -d "$pkgdir"/usr/lib/modules/
	cp -r lib/modules/$_rpmver.x86_64/ "$pkgdir"/usr/lib/modules/$_rpmver.x86_64
	# mkinitcpio hook
	echo $_pkgbase >"$pkgdir"/usr/lib/modules/$_rpmver.x86_64/pkgbase
	# create modules.* files
	depmod -b "$pkgdir"/usr $_rpmver.x86_64

	# headers
	# dkms hook requires headers in module directory
	rm "$pkgdir"/usr/lib/modules/$_rpmver.x86_64/build
	cp -r usr/src/kernels/$_rpmver.x86_64/ "$pkgdir"/usr/lib/modules/$_rpmver.x86_64/build
	# symlink
	install -m755 -d "$pkgdir"/usr/src/
	ln -s ../lib/modules/$_rpmver.x86_64/build "$pkgdir"/usr/src/$_pkgbase

	# docs
	# follow arch linux packaging schema
	cp -r usr/share/doc/kernel-doc-$_basever/Documentation "$pkgdir"/usr/lib/modules/$_rpmver.x86_64/build/Documentation
	# symlink
	install -m755 -d "$pkgdir"/usr/share/doc/
	ln -s ../../lib/modules/$_rpmver.x86_64/build/Documentation "$pkgdir"/usr/share/doc/$_pkgbase
}
