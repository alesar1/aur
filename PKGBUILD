# Maintainer: wszqkzqk <wszqkzqk@gmail.com>
# Maintainer: skywol <skywol@qq.com>
# Maintainer: luosoy <249799588@qq.com>

pkgname=deepin-wine32-preloader
pkgvers=2.18-24~rc3
pkgver=2.18_24
pkgrel=3
epoch=
pkgdesc="Deepin Wine Preloader"
arch=('i686' 'x86_64')
url="http://www.deepin.org"
license=('Proprietary')
groups=()
depends=()
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
source=("https://community-packages.deepin.com/deepin/pool/main/d/deepin-wine/${pkgname}_${pkgvers}_i386.deb")
noextract=("${pkgname}_${pkgvers}_i386.deb")
md5sums=('10f966158927f8fc7aaed2705508536a')
validpgpkeys=()

prepare() {
	ar -x ${pkgname}_${pkgvers}_i386.deb
	mkdir ${pkgname}-${pkgvers}
	tar -xf data.tar.xz --directory="${pkgname}-${pkgvers}"	
}

package() {
	cd "${pkgname}-${pkgvers}"
	cp -r ./ ${pkgdir}/
}