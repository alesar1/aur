# Maintainer: Tony Lambiris <tony@libpcap.net>

pkgname=libmodulemd-git
pkgver=2.13.0.r27.g9d3a115
pkgrel=1
pkgdesc="C Library for manipulating module metadata files"
arch=("any")
license=("MIT")
url="https://github.com/fedora-modularity/libmodulemd#branch=main"
makedepends=("meson" "ninja" "pkgconfig" "python-gobject" "valgrind" "autopep8")
source=("${pkgname}::git+https://github.com/fedora-modularity/libmodulemd.git")
provides=('libmodulemd')
conflicts=('libmodulemd')
sha256sums=('SKIP')

pkgver() {
	cd "${srcdir}/${pkgname}"

	git describe --long --tags | sed -e 's/\([^-]*-g\)/r\1/;s/-/./g' -e 's/libmodulemd.//'
}

build() {
	cd "${srcdir}/${pkgname}"

	arch-meson build -Ddeveloper_build=false -Dbuild_api_v1=true
	ninja -C build
}

check() {
	cd "${srcdir}/${pkgname}"

	ninja -C build test
}

package() {
	cd "${srcdir}/${pkgname}"

	DESTDIR="${pkgdir}/" ninja -C build install

	# Defaults to libmodulemd API v1 until more software are ported to API v2
	ln -sf "${pkgname%%-git}.so.1" "${pkgdir}/usr/lib/${pkgname%%-git}.so"

	install -Dp -m644 COPYING   "${pkgdir}/usr/share/licenses/${pkgname}/COPYING"
	install -Dp -m644 README.md "${pkgdir}/usr/share/doc/${pkgname}/README.md"
}

# vim: set ft=sh ts=4 sw=4 noet:
