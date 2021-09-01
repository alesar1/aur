# Maintainer: Simon Marcher <marchersimon@zohomail.eu>
pkgname=tldr-cpp-git
pkgver=1.5
pkgrel=1
pkgdesc="The all-in-one tldr client for users and contributors"
arch=(x86_64)
url="https://github.com/marchersimon/tldr-cpp.git"
license=('GPL3')
makedepends=(git make gcc curl libzip)
provides=(tldr)
conflicts=(tldr)
source=("git+$url")
md5sums=('SKIP')

pkgver() {
  cd tldr-cpp
  git tag | tail -n 1
}

build() {
	cd tldr-cpp
	make
}

package() {
	cd tldr-cpp
	mkdir -p ${pkgdir}/usr/bin
	make DESTDIR="${pkgdir}" install
}
