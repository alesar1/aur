# Maintainer: Alfredo Ramos <alfredo dot ramos at yandex dot com>
# Contributor: Arthur Țițeică arthur.titeica/gmail/com
# Contributor: Thomas Laube <tomx3@tomtomtom.org>

_pkgname=vokoscreen
pkgname=${_pkgname}-git
pkgver=2.4.18.beta.1.g9577fa1
pkgrel=2
pkgdesc='An easy to use screencast creator. Qt5 UI. Development version.'
arch=('i686' 'x86_64')
url='http://linuxecke.volkoh.de/vokoscreen/vokoscreen.html'
license=('GPL2')

depends=('ffmpeg' 'lame' 'qt5-x11extras' 'desktop-file-utils')
optdepends=(
	'pulseaudio-alsa: for PulseAudio support'
)
makedepends=('git' 'qt5-tools')
provides=("${_pkgname}=${pkgver}")
conflicts=("${_pkgname}")

install=${pkgname}.install

source=(
	"git+https://github.com/vkohaupt/${_pkgname}.git"
	'lrelease_fix.patch'
	'desktop_file.patch'
)
sha512sums=(
	'SKIP'
	'c88025e797daa551d9fb74d4edefd04f0f5034dd3a67163518687eb41a0a03b6b50074179bc9b8d620277ac96a53ccd100b788ebffb40e7dd741869e4e9bbab3'
	'3ddc567f831b9f6e2672997a77a099cf8fdd5a6a1d79157738c1670c9106fd6c4e09d74287a770c19bac23dcb73a19ce69cc1ac893d4988f75c7ac35668f7a90'
)

pkgver() {
	# Updating package version
	cd "${srcdir}"/${_pkgname}
	git describe --long --tags 2>/dev/null | sed -r 's/-/./g'
}

prepare() {
	cd "${srcdir}"/${_pkgname}

	# lrelease fix
	patch -Np1 < ../lrelease_fix.patch

	# Desktop entry
	patch -Np1 < ../desktop_file.patch

	# Create build directory
	mkdir -p "${srcdir}"/build
}

build() {
	# Number of jobs
	declare -i njobs=$(nproc)

	if [[ ${njobs} -ge 8 ]]; then
		njobs=$(( $njobs - 2 ))
	fi

	# Building package
	cd "${srcdir}"/build
	qmake-qt5 ../${_pkgname} \
		CONFIG+=release \
		CONFIG+=c++14 \
		-spec linux-g++

	make -j${njobs}
}

package() {
	# Installing package
	cd "${srcdir}"/build
	make INSTALL_ROOT="${pkgdir}" install
}
