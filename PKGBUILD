# Maintainer: Andrew Whatson <whatson@gmail.com>
_pkgname=faudio
_pkgbase=${_pkgname}-git
_gitname=FAudio
pkgname=lib32-${_pkgbase}
pkgver=r894.27cdf05
pkgrel=1
pkgdesc="Accuracy-focused XAudio reimplementation for open platforms"
arch=('x86_64')
url="https://github.com/FNA-XNA/FAudio"
license=('custom')
depends=("${_pkgbase}" 'lib32-sdl2' 'lib32-ffmpeg')
makedepends=('git')
source=('git+https://github.com/FNA-XNA/FAudio'
        'faudio.pc')
sha256sums=('SKIP'
            '371d1dfdfa335a354f41376807848ba0cc448890d6da60d0b5c9478033b7e54c')

pkgver() {
	cd "$srcdir/${_gitname}"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
	cd "$srcdir/${_gitname}"
	CFLAGS="${CFLAGS} -m32" FAUDIO_RELEASE=1 FAUDIO_FFMPEG=1 make
}

package() {
	cd "$srcdir/${_gitname}"
	_tmpdir="${pkgdir}/temp"
	CFLAGS="${CFLAGS} -m32" FAUDIO_RELEASE=1 FAUDIO_FFMPEG=1 INSTALL_PREFIX="${_tmpdir}" make install
	install -D -t "${pkgdir}/usr/lib32" "${_tmpdir}/lib"/*
	install -D -m644 -t "${pkgdir}/usr/lib32/pkgconfig" ../faudio.pc
	rm -rf "${_tmpdir}"
}
