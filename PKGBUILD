# Maintainer: Skywol <Skywol@qq.com>
# Maintainer: wszqkzqk <wszqkzqk@gmail.com>
# Maintainer: luosoy <249799588@qq.com>

pkgname=deepin-wine-helper
_pkgver=5.0deepin4
pkgver=5.0.4
pkgrel=4
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
source=("https://community-packages.deepin.com/deepin/pool/non-free/d/${pkgname}/${pkgname}_${_pkgver}_i386.deb")
noextract=("${pkgname}_${_pkgver}_i386.deb")
md5sums=('6ae60c1efb4459aedb1a517252b5a159')
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