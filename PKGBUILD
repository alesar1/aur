# Maintainer: wszqkzqk <wszqkzqk@gmail.com>
# Maintainer: Skywol <skywol@qq.com>
pkgname=deepin-wine-plugin-virtual
pkgver=1.0deepin0
pkgrel=1
epoch=
pkgdesc="Deepin Wine plugin virtual package"
arch=('i686' 'x86_64')
url="http://www.deepin.org"
license=('Proprietary')
groups=()
depends=('deepin-wine' 'p7zip' 'python-dbus')
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
source=("https://mirrors.ustc.edu.cn/deepin/pool/non-free/d/${pkgname}/${pkgname}_${pkgver}_all.deb")
noextract=("${pkgname}_${pkgver}_all.deb")
md5sums=('99c56b77334028514c2f3301401eabef')
validpgpkeys=()

prepare() {
	ar -x ${pkgname}_${pkgver}_all.deb
	mkdir ${pkgname}-${pkgver}
	tar -xf data.tar.xz --directory="${pkgname}-${pkgver}"	
}

package() {
	cd "${pkgname}-${pkgver}"
	cp -r ./ ${pkgdir}/
}
