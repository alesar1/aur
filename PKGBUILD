# $Id$
# Maintainer: Joey Pabalinas <alyptik@protonmail.com>

pkgname=cepl-git
_pkgname=${pkgname%-*}
pkgver=3.5.0.r0.g3aec788
pkgrel=1
pkgdesc='C11 (ISO/IEC 9899:2011) read–eval–print loop (REPL) currently supporting multiple compilers, readline key-bindings/tab-completion, variable tracking, and incremental undo.'
url='https://github.com/alyptik/cepl'
arch=('i686' 'x86_64')
license=('GPL3')
depends=('gcc' 'readline')
source=("${_pkgname}::git+http://github.com/alyptik/cepl")
sha256sums=('SKIP')
provides=("${_pkgname}")
conflicts=("${_pkgname}")
options=('zipman')

pkgver() {
	cd "${srcdir}/${_pkgname}"
	git describe --long --tags  2>/dev/null | sed 's/^v//; s/\([^-]*-g\)/r\1/; s/-/./g'
}

build() {
	cd "${srcdir}/${_pkgname}"
	make
}

package() {
	cd "${srcdir}/${_pkgname}"
	mkdir -p "${pkgdir}/usr/share/man/man7"
	make PREFIX="${pkgdir}/usr" install
}
