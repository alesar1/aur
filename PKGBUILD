# Maintainer: SKywol <skywol@qq.com>
# Maintainer: wszqkzqk <wszqkzqk@gmail.com>
pkgname=deepin.com.qq.office
pkgver=2.0.0deepin3
pkgrel=3
epoch=
pkgdesc="Deepin Wine TIM 2.0.0"
arch=('i686' 'x86_64')
url="http://office.qq.com/"
license=('Proprietary')
groups=()
depends=('deepin-wine')
makedepends=('tar')
checkdepends=()
optdepends=()
provides=()
conflicts=('deepin-wine-tim')
replaces=()
backup=()
options=()
install=
changelog=
source=("https://mirrors.ustc.edu.cn/deepin/pool/non-free/d/${pkgname}/${pkgname}_${pkgver}_i386.deb")
noextract=("${pkgname}_${pkgver}_i386.deb")
md5sums=('2acda3caeb774ac97fdb8754e8b1d549')
validpgpkeys=()

prepare() {
	ar -x ${pkgname}_${pkgver}_i386.deb
	mkdir ${pkgname}-${pkgver}
	tar -xf data.tar.xz --directory="${pkgname}-${pkgver}"	
}

package() {
	cd "${pkgname}-${pkgver}"
	cp -r ./ ${pkgdir}/
}
