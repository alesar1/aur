# Maintainer: Léo Chéneau <leocheneau+arch@gmail.com>

pkgname=easena-git
pkgver=5c26d5d
pkgrel=1
pkgdesc="EAsy Specification of Evolutionary and Neural Algorithms is an Artificial Evolution platform developped by the SONIC (Stochastic Optimisation and Nature Inspired Computing) group of the BFO team at Université de Strasbourg. "
arch=(i686 x86_64)
url="http://easea.unistra.fr"
license=('AGPL3')
depends=(cmake flex bison valgrind java-environment cuda r)
makedepends=(make gcc)
provides=(easena)
conflicts=(easea)
source=("git+https://github.com/EASEA/easea" final.patch link.patch)
sha256sums=('SKIP'
            'e1d4ee16c41713dce4fc9562816710e0f0782fc296cadb9755cf88ac8dc3549b'
            'cfeddd55b0b9c086ba7c736cc5b515caaba248a1c38d0015a9ee3c82000cb2b8')

#credits to tenacity PKGBUILD
pkgver() {
  cd easea
  printf "r%s.g%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
	cd easea
	patch --forward --strip=1 --input="${srcdir}/final.patch"
	patch --forward --strip=1 --input="${srcdir}/link.patch"
	mkdir -p build
}

build() {
	cd easea/build
	cmake ..
	make
}

package() {
	cd easea/build
	make DESTDIR="$pkgdir/" install
}
