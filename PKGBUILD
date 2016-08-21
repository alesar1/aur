# Maintainer: Brad Kennedy <bk@co60.ca>
pkgname=bunnysay-git 
pkgver=v1.0.r1.3c98d2b
pkgrel=1
pkgdesc='Fullwidth bunny signs for terminal and Twitter/webforms'
arch=('i686' 'x86_64')
url='https://github.com/co60ca/stella'
license=('GPL3')
groups=()
depends=()
makedepends=('cmake' 'git') 
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
source=('git+https://github.com/co60ca/bunnysay.git')
noextract=()
md5sums=('SKIP')

pkgver() {
	cd "bunnysay"
	printf "%s" "$(git describe --long | sed 's/\([^-]*-\)g/r\1/;s/-/./g')"
}

build() {
	cd "bunnysay"
	cmake \
		-DCMAKE_BUILD_TYPE=Release \
		-DCMAKE_INSTALL_PREFIX=/usr .
	make
}

package() {
	cd "bunnysay"
	make DESTDIR="${pkgdir}" install
	install -Dm644 LICENSE "${pkgdir}"/usr/share/licenses/${pkgname}/LICENSE
}
