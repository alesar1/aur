# Maintainer: Léo Chéneau <leocheneau+arch@gmail.com>

pkgname=easena-git
pkgver=r430.g5c26d5d
pkgrel=3
pkgdesc="EAsy Specification of Evolutionary and Neural Algorithms is an Artificial Evolution platform developped by the SONIC (Stochastic Optimisation and Nature Inspired Computing) group of the BFO team at Université de Strasbourg. "
arch=(i686 x86_64)
url="http://easea.unistra.fr"
license=('AGPL3')
depends=(cmake flex bison valgrind java-environment cuda r)
makedepends=(make gcc)
provides=(easena)
conflicts=(easea)
source=("git+https://github.com/EASEA/easea" fix_config.patch)
sha256sums=('SKIP'
            '0e8f5c0745a8e67dcd523d5a886f9562d72bdcb377a34af1c02d356f96251cf4')

#credits to tenacity PKGBUILD
pkgver() {
	cd easea
	printf "r%s.g%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
	cd easea
	patch --forward --strip=1 --input="${srcdir}/fix_config.patch"
}

build() {
	cd easea
	cmake .
	make
}

package() {
	make DESTDIR="$pkgdir/" install
}
