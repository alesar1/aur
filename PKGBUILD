# Maintainer: Skywol <Skywol@qq.com>
pkgname=deepin-qq-eim
_pkgname=deepin.com.qq.b.eim
pkgver=1.90.2220deepin1
pkgrel=1
epoch=
pkgdesc="Deepin Wine QQEIM 1.90"
arch=('i686' 'x86_64')
url="http://b.qq.com/"
license=('Proprietary')
groups=()
depends=('deepin-wine')
makedepends=('tar')
checkdepends=()
optdepends=()
provides=()
conflicts=(deepin.com.qq.eim)
replaces=()
backup=()
options=()
install=
changelog=
source=("https://mirrors.ustc.edu.cn/deepin/pool/non-free/d/${_pkgname}/${_pkgname}_${pkgver}_i386.deb")
noextract=("${_pkgname}_${pkgver}_i386.deb")
md5sums=('23b90ffce6d145a8b66722cfadd6ab92')
validpgpkeys=()

prepare() {
	ar -x ${_pkgname}_${pkgver}_i386.deb
	mkdir ${_pkgname}-${pkgver}
	tar -xf data.tar.xz --directory="${_pkgname}-${pkgver}"
}

package() {
	cd "${_pkgname}-${pkgver}"
	cp -r ./ ${pkgdir}/
}
