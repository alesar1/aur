# Maintainer : Keshav Padram <(the.ridikulus.rat) (aatt) (gemmaeiil) (ddoott) (ccoomm)>
# Contributor: Murtuza Akhtari <inxsible at gmail dot com>

_pkgname="efibootmgr"
pkgname="${_pkgname}-git"

pkgver=Release_0_6_0
pkgrel=1
pkgdesc="Tool to modify UEFI Firmware Boot Manager Variables - GIT Version"
arch=('i686' 'x86_64')
url="http://linux.dell.com/efibootmgr/"
license=('GPL2')
makedepends=('git')
depends=('pciutils')
conflicts=("${_pkgname}")
provides=("${_pkgname}")
options=(strip purge docs zipman !emptydirs !libtool)

_gitroot="http://linux.dell.com/git/${_pkgname}.git"
_gitname="${_pkgname}"
_gitbranch="master"

source=("${_gitname}::git+${_gitroot}#branch=${_gitbranch}")
sha1sums=('SKIP')

pkgver() {
  cd "${_gitname}"
  git describe --always | sed 's|-|.|g'
}

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
	
	rm -rf "${srcdir}/${_gitname}_build/" || true
	cp -r "${srcdir}/${_gitname}" "${srcdir}/${_gitname}_build"
	
	cd "${srcdir}/${_gitname}_build/"
	
	make
	echo
	
}


package() {
	
	cd "${srcdir}/${_gitname}_build/"
	
	install -d "${pkgdir}/usr/sbin/"
	install -D -m0755 "${srcdir}/${_gitname}_build/src/efibootmgr/efibootmgr" "${pkgdir}/usr/sbin/efibootmgr"
	
	install -d "${pkgdir}/usr/share/man/man8/"
	install -D -m0644 "${srcdir}/${_gitname}_build/src/man/man8/efibootmgr.8" "${pkgdir}/usr/share/man/man8/efibootmgr.8"
	
}
