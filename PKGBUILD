# Maintainer: Tony Lambiris <tony@libpcap.net>

pkgname=gnome-shell-extension-system76-power-git
pkgver=1.2.0.r17.gfd70291
pkgrel=2
pkgdesc="Gnome shell extension for System76 power management"
arch=('any')
url="https://github.com/pop-os/gnome-shell-extension-system76-power"
license=('MIT')
depends=('gnome-shell' 'system76-power')
makedepends=('git' 'make' 'typescript')
source=("${pkgname}::git+${url}")
sha256sums=('SKIP')

pkgver() {
	cd "${srcdir}/${pkgname}"

	git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build(){
	cd "${srcdir}/${pkgname}"

	make DESTDIR="${pkgdir}"
}


package() {
	cd "${srcdir}/${pkgname}"

	make DESTDIR="${pkgdir}" install
}
