# Maintainer:  TEL.RED LLC <linux_at_tel_d0t_red>

pkgname=sky
pkgver=2.1.7700
pkgrel=1
pkgdesc="Lync and Skype for Business client on Linux"

arch=(
	'x86_64'
)
if [[ $CARCH == 'x86_64' ]]; then
	_arch=64
fi

url="https://tel.red"

license=('custom: Copyright © 2015-2018 TEL.RED LLC')
options=()
install="${pkgname}.install"

depends=(
	'curl'
	'ffmpeg'
	'libxcursor'
	'libxinerama'
	'libxkbfile'
	'libxrandr'
	'libxss'
	'libxv'
	'qt5-base>=5.15'
	'openssl'
)
makedepends=(
	'binutils'
	'tar'
	'zstd'
)

source_x86_64=("https://tel.red/repos/archlinux/sky-archlinux-${pkgver}-${pkgrel}-${CARCH}.pkg.tar.zst")
sha256sums_x86_64=('3f6a790d46270b29277896717b8aa5c27fd879f9037c6cf70e02875c346831bc')

package() {
	local _sky_libdir="/usr/lib/sky/lib64"
	local _sky_bindir="/usr/lib/sky"
	local _sky_datadir=( "${_sky_bindir}/sounds" )

	cd "${pkgdir}"
	tar -xf "${srcdir}/sky-archlinux-${pkgver}-${pkgrel}-${CARCH}.pkg.tar.zst"
	find "${pkgdir}" -maxdepth 1 -type f -delete
}

# vim: set ts=2 sw=2 ft=sh noet:
