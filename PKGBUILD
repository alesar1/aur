# Maintainer: grufo <madmurphy333@gmail.com>

_libname='libconfini'
pkgname="${_libname}-git"
pkgver='r144.06d6402'
pkgrel=1
pkgdesc='Yet another INI parser'
arch=('i686' 'x86_64')
url='https://madmurphy.github.io/libconfini'
license=('GPL')
provides=("${_libname}")
conflicts=("${_libname}" "${_libname}-bin")
source=("git+https://github.com/madmurphy/${_libname}.git")
md5sums=('SKIP')

pkgver() {

	cd "${_libname}"
	printf "'r%s.%s'" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"

}

prepare() {

	cd "${srcdir}/${_libname}"
	./bootstrap --noconfigure

}

build() {

	cd "${srcdir}/${_libname}"
	./configure --prefix=/usr
	make

}

check() {

	cd "${srcdir}/${_libname}"
	make check

}

package() {

	cd "${srcdir}/${_libname}"
	make DESTDIR="${pkgdir}" install

}

