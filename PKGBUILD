# Maintainer: MithicSpirit <rpc01234 at gmail dot com>
# Contributor: SuchBlue
pkgname=salad
pkgver=0.5.7
pkgrel=1
epoch=
pkgdesc="Allows gamers to mine crypto in their downtime."
arch=(x86_64)
url="https://salad.com/"
license=('MIT')
depends=(nodejs)
makedepends=(unzip wget sed tar yarn)
optdepends=()
source=("https://github.com/SaladTechnologies/salad-applications/archive/refs/tags/${pkgver}.zip")
md5sums=('61586a0104b8df41ad725bd61e135616')

prepare() {
	cd "salad-applications-${pkgver}/packages/desktop-app"
	sed -i 's/: "electron-builder/: "electron-builder --linux pacman/g' package.json	
}

build() {
	cd "salad-applications-${pkgver}/packages/desktop-app"	
	yarn install
	yarn run lint
	yarn run build-app
	yarn run build-installer
}

package() {
	cd "salad-applications-${pkgver}/packages/desktop-app/dist/app"
	tar xf "Salad-${pkgver}.pacman" --directory="${pkgdir}"
	rm "${pkgdir}/.MTREE"
	rm "${pkgdir}/.INSTALL"
	rm "${pkgdir}/.PKGINFO"
	mkdir -p "${pkgdir}/usr/bin"
	ln -s "/opt/Salad/salad" "${pkgdir}/usr/bin/salad"
}
