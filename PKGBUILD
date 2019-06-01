# Maintainer: schw0reismus <schw0reismus@protonmail.com>

pkgname=foliate-git
_name=foliate
pkgver=54.a4bfcf8
pkgrel=1
pkgdesc="A simple and modern GTK eBook reader"
arch=('i686' 'x86_64')
url="https://johnfactotum.github.io/foliate/"
license=('GPL-3.0')
depends=('gjs' 'webkit2gtk' 'libsoup')
makedepends=('meson' 'ninja')
source=("$_name::git+https://github.com/johnfactotum/$_name.git#branch=master")
provides=("$_name")
replaces=("$_name")
conflicts=("$_name")
md5sums=('SKIP')

build() {
	cd "$srcdir/$_name"
	meson build --prefix=/usr
	ninja -C build
}

package(){
	cd "$srcdir/$_name"
	DESTDIR="$pkgdir" ninja -C build install
}

pkgver() {
	cd "$srcdir/$_name"
	echo $(git rev-list --count HEAD).$(git rev-parse --short HEAD)
}
