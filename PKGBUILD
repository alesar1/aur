# Maintainer : Keshav P R <(the.ridikulus.rat) (aatt) (gemmaeiil) (ddoott) (ccoomm)>
# Contributor: Thomas Bächler <thomas@archlinux.org>
# Contributor: Tobias Powalowski <tpowa@archlinux.org>

__pkgname="syslinux"
_pkgname="${__pkgname}-efi"
pkgname="${_pkgname}-git"

pkgver=20121112
pkgrel=1
arch=('any')
pkgdesc="SYSLINUX built for x86_64 and i386 UEFI firmwares - GIT (Alpha) Version"
url="http://syslinux.zytor.com/"
license=('GPL2')

makedepends=('git' 'python2' 'gnu-efi-libs' 'nasm')
depends=('dosfstools' 'efibootmgr')

install="${_pkgname}.install"

provides=("${_pkgname}")
conflicts=("${_pkgname}")

options=('!strip' 'docs' '!libtool' 'emptydirs' 'zipman' '!purge' '!makeflags')

source=('syslinux-efi-fix-makefiles.patch')

sha1sums=('a55d1d7bec78b929a667e4a59306ca3fb942da68')

_gitroot="git://git.kernel.org/pub/scm/boot/syslinux/syslinux.git"
_gitname="${__pkgname}"
_gitbranch="firmware"

_update_git() {
	
	cd "${srcdir}/"
	
	msg "Connecting to GIT server...."
	
	if [[ -d "${srcdir}/${_gitname}/" ]]; then
		cd "${srcdir}/${_gitname}/"
		git reset --hard
		git fetch
		git checkout "${_gitbranch}"
		git merge "remotes/origin/${_gitbranch}"
		msg "The local GIT repo has been updated."
	else
		git clone "${_gitroot}" "${_gitname}"
		cd "${srcdir}/${_gitname}/"
		git checkout "${_gitbranch}"
		msg "GIT checkout done or server timeout"
	fi
	
	echo
	
}

build() {
	
	if [[ "${CARCH}" != "x86_64" ]]; then
		echo "${pkgname} package can be built only in a x86_64 system. Exiting."
		exit 1
	else
		_update_git
		echo
	fi
	
	rm -rf "${srcdir}/${_gitname}_build" || true
	cp -r "${srcdir}/${_gitname}" "${srcdir}/${_gitname}_build"
	
	cd "${srcdir}/${_gitname}_build"
	
	## Unset all compiler FLAGS for UEFI build
	unset CFLAGS
	unset CPPFLAGS
	unset CXXFLAGS
	unset LDFLAGS
	
	## Fix UEFI related Makefiles
	patch -Np1 -i "${srcdir}/syslinux-efi-fix-makefiles.patch" || true
	echo
	
	rm -rf "${srcdir}/${_gitname}_build/obj/efi64" || true
	PYTHON="python2" make efi64
	echo
	
	rm -rf "${srcdir}/${_gitname}_build/obj/efi32" || true
	PYTHON="python2" make efi32
	echo
	
}

package() {
	
	cd "${srcdir}/${_gitname}_build/"
	
	make INSTALLROOT="${pkgdir}/" AUXDIR="/usr/lib/syslinux" efi64 install
	echo
	
	make INSTALLROOT="${pkgdir}/" AUXDIR="/usr/lib/syslinux" efi32 install
	echo
	
}
