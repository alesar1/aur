# Maintainer: benwaffle <vala@iofel.me>
# Maintainer: Prince781 <princetonferro@gmail.com>
pkgname=vala-language-server-git
pkgver=0.0.1.r0.881da9e8
pkgrel=1
pkgdesc='Language Server for Vala'
arch=('x86_64')
url="https://github.com/benwaffle/vala-language-server"
license=('LGPL-2.1')
depends=('libgee' 'jsonrpc-glib' 'vala' 'meson')
makedepends=('git')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=(git+${url}.git)
sha256sums=('SKIP')
 
pkgver() {
	cd "$srcdir/${pkgname%-git}"
	printf "%s" "$(git describe --long --tags | sed 's/\([^-]*-\)g/r\1/;s/-/./g')"
}
 
#prepare() {
#	cd "$srcdir/${pkgname%-git}"
#}
 
build() {
	cd "$srcdir/${pkgname%-git}"
    meson build --buildtype=release
    ninja -C build
}
 
package() {
	cd "$srcdir/${pkgname%-git}"
    DESTDIR="${pkgdir}" ninja -C build install
}

