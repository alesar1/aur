# Maintainer: Erik Dubois <erik.dubois@gmail.com>
pkgname=archlabs-wallpapers-git
_pkgname=archlabs-wallpapers
_destname="/usr/share/backgrounds/archlabs/"
pkgver=1.2
pkgrel=7
pkgdesc="Wallpapers for ARCHLabs"
arch=('any')
url="https://github.com/ARCHLabs/Archlabs-Wallpapers"
license=('Attribution-NonCommercial-ShareAlike 4.0 International Public License')
makedepends=('git')
provides=("${pkgname}")
options=(!strip !emptydirs)
source=(${_pkgname}::"git+https://github.com/ARCHLabs/${_pkgname}.git")
sha256sums=('SKIP')
package() {
	rm -f "${srcdir}/${_pkgname}/"README.md
	rm -f "${srcdir}/${_pkgname}/"git-v*
	mkdir -p "${pkgdir}${_destname}"
	cp -r "${srcdir}/${_pkgname}/"* "${pkgdir}${_destname}"
}
