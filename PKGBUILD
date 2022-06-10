# Maintainer: Aquarius <aquarius24 AT yandex DOT ru>
# Maintainer: AudioLinux  <audiolinux AT fastmail DOT fm>
# Contributor: Cvetoslav Ludmiloff <ludmiloff@gmail.com>

_name=smokegen

pkgname=$_name-git
pkgver=4.14.3
pkgrel=1
pkgdesc="A general purpose C++ parser with a plugin infrastructure. It is currently used for generating the various SMOKE libraries"
arch=('i686' 'x86_64')
url=""
license=('GPL')
groups=()
depends=('qt4')
makedepends=('git' 'cmake')
provides=("$pkgname")
conflicts=("$pkgname")
source=("git+https://github.com/KDE/smokegen.git")
noextract=()
md5sums=('SKIP')

pkgver() {
	cd "$srcdir/$_name"

# Git, tags available
	printf "%s" "$(git describe --long | sed 's/\([^-]*-\)g/r\1/;s/-/./g')"
}


build() {
	mkdir "$srcdir/$_name/build"
	cd "$srcdir/$_name/build"
	cmake ../
	make
}

package() {
	cd "$srcdir/$_name/build"
	make DESTDIR="$pkgdir/" install
}
