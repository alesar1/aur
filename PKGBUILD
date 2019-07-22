# Maintainer: Tony Lambiris <tony@criticalstack.com>

pkgname=boston-icon-theme-git
pkgver=r76.2d6d673
pkgrel=1
pkgdesc="Boston is a highly minimalist icon theme, with a sober color palette inspired on basic hues."
arch=('any')
#url="https://github.com/tonylambiris/boston-icons"
url="https://github.com/heychrisd/Boston-Icons"
license=('GPL3')
conflicts=('boston-icon-theme')
provides=('boston-icon-theme')
source=("${pkgname}::git+https://github.com/heychrisd/Boston-Icons")
sha256sums=('SKIP')

pkgver() {
	cd "${srcdir}/${pkgname}"

	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
	cd "${srcdir}/${pkgname}"

	install -dm 755 "${pkgdir}/usr/share/icons"

	install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

	cp -a "${srcdir}/${pkgname}" "${pkgdir}/usr/share/icons/Boston"
}
