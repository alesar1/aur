# Maintainer: wszqkzqk <wszqkzqk@gmail.com>
pkgname=deepin-libwine
pkgvers=2.18-5~rc6
pkgver=2.18_5~rc6
pkgrel=1
epoch=
pkgdesc="Deepin Libwine"
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
options=(!strip)
install=
changelog=
source=("https://mirrors.ustc.edu.cn/deepin/pool/non-free/d/deepin-wine/${pkgname}_${pkgvers}_i386.deb")
noextract=("${pkgname}_${pkgvers}_i386.deb")
md5sums=('SKIP')
validpgpkeys=()

prepare() {
	ar -x ${pkgname}_${pkgvers}_i386.deb
	mkdir ${pkgname}-${pkgvers}
	tar -xf data.tar.xz --directory="${pkgname}-${pkgvers}"
}

package() {
	cd "${pkgname}-${pkgvers}"
	cp -rf ./ ${pkgdir}/
}
