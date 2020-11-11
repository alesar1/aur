# Maintainer: Tavian Barnes <tavianator@tavianator.com>
pkgname=bfs
pkgver=2.1
pkgrel=1
pkgdesc="A breadth-first version of find."
arch=('i686' 'x86_64' 'arm' 'armv6h' 'armv7h' 'aarch64')
url="https://tavianator.com/projects/bfs.html"
license=('BSD')
groups=()
depends=('acl' 'libcap')
makedepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/tavianator/${pkgname}/archive/${pkgver}.tar.gz")
md5sums=('5b96140681761fafa81b164e2b986e29')
sha256sums=('be51966ca3bcc0167fb16c89f81fa37ee13c6326c616c31b87fd564a54bdc5f2')
noextract=()

build() {
	cd "${pkgname}-${pkgver}"
	make
}

check() {
	cd "${pkgname}-${pkgver}"
	make -k check
}

package() {
	cd "${pkgname}-${pkgver}"
	make install DESTDIR="${pkgdir}"
	install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
