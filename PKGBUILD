# Maintainer: Skywol <Skywol@qq.com>
# Maintainer: wszqkzqk <wszqkzqk@gmail.com>
# Maintainer: luosoy <249799588@qq.com>

pkgname=deepin-wine-helper
_pkgver=5.1.13-1
pkgver=5.1.13
pkgrel=1
epoch=
pkgdesc="Deepin Wine Helper"
arch=('i686' 'x86_64')
url="http://www.deepin.org"
license=('Proprietary')
groups=()
depends=('deepin-wine-plugin' 'deepin-wine-plugin-virtual')
makedepends=('tar')
checkdepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=("https://cdn-package-store6.deepin.com/appstore/pool/appstore/d/${pkgname}/${pkgname}_${_pkgver}_i386.deb")
noextract=("${pkgname}_${_pkgver}_i386.deb")
md5sums=('9f31d8d9b4a978ce6b935b6d1b7ae8a1')
validpgpkeys=()

prepare() {
	ar -x ${pkgname}_${_pkgver}_i386.deb
	mkdir ${pkgname}-${pkgver}
	tar -xf data.tar.xz --directory="${pkgname}-${pkgver}"	
}

package() {
	cd "${pkgname}-${pkgver}"
	cp -r ./ ${pkgdir}/
}