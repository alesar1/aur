# Maintainer: Skywol <skywol@qq.com>
# Maintainer: wszqkzqk <wszqkzqk@gmail.com>
# Maintainer: luosoy <249799588@qq.com>

pkgname=deepin-wine-binfmt
deepin_name=deepin-wine-binfmt
pkgvers=2.18-24~rc3
pkgver=2.18_24
pkgrel=3
epoch=
pkgdesc="Deepin Wine Fonts"
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
source=("https://community-packages.deepin.com/deepin/pool/main/d/deepin-wine/${deepin_name}_${pkgvers}_all.deb")
noextract=("${deepin_name}_${pkgvers}_all.deb")
md5sums=('01103b67ec03be6c2bf30553e3073a1a')
validpgpkeys=()

prepare() {
	ar -x ${deepin_name}_${pkgvers}_all.deb
	mkdir ${deepin_name}-${pkgvers}
	tar -xf data.tar.xz --directory="${deepin_name}-${pkgvers}"	
}

package() {
	cd "${deepin_name}-${pkgvers}"
	cp -r ./ ${pkgdir}/
}
