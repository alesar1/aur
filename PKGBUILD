# Maintainer: Merrick Luo <merrick@luois.me>
pkgname=iease-music
pkgver=1.1.3
pkgrel=0
pkgdesc='Elegant neteaseMusic desktop app, Rock with NeteaseMusic.'
arch=('x86_64')
url='https://github.com/trazyn/ieaseMusic'
license=('MIT')
_rpmname="ieaseMusic-${pkgver}-linux-x86_64.rpm"
depends=()
makedepends=()
options=()
source=("https://github.com/trazyn/ieaseMusic/releases/download/v${pkgver}/${_rpmname}")
sha1sums=('2f574150e194a7c1c679c15a3863982da05a85d5')
install='iease-music.install'

package() {
	cp -r ${srcdir}/opt ${pkgdir}/
	cp -r ${srcdir}/usr ${pkgdir}/
	mkdir -p ${pkgdir}/usr/bin/
	ln -s /opt/ieaseMusic/iease-music ${pkgdir}/usr/bin/
}
