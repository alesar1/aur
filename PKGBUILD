# Contributor: Andrew Querol <andrew@querol.me>
# Maintainer: Rafael Fontenelle <rafaeff@gnome.org>

pkgname=chrome-gnome-shell-git
pkgver=6.2_7_gc2df1fe
pkgrel=1
pkgdesc="Native connector for extensions.gnome.org"
arch=('any')
url="https://wiki.gnome.org/Projects/GnomeShellIntegrationForChrome"
license=('GPL')
depends=('gnome-shell' 'python')
makedepends=('git' 'cmake')
provides=("${pkgname%-git}")
replaces=('gs-chrome-connector') # Old name, renamed at request of the maintainer
conflicts=($replaces)
source=("git+https://git.gnome.org/browse/chrome-gnome-shell")
md5sums=('SKIP')

pkgver() {
	cd "$srcdir/${pkgname%-git}"
	git describe --tags | sed -e 's/v//;s/-/_/g'
}

prepare() {
	cd "$srcdir/${pkgname%-git}"
	mkdir -p 'build'
}

build() {
	cd "$srcdir/${pkgname%-git}/build"
	cmake -DCMAKE_INSTALL_PREFIX=/usr -DBUILD_EXTENSION=OFF ../
}

package() {
	cd "$srcdir/${pkgname%-git}/build"
	make DESTDIR="$pkgdir/" install
}
