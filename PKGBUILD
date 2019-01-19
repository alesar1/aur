# Maintainer: weearc <q19981121@163.com>
pkgname=motrix
_pkgname=Motrix
pkgver=git20190120
pkgrel=2
epoch=
pkgdesc="elegent downloading tool frontend for aria2c,using vue"
arch=("x86_64")
url="https://github.com/agalwood/Motrix"
license=('MIT')
groups=()
depends=('bash'
	 'aria2')
makedepends=('npm'
	     'git')
checkdepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=("Motrix.desktop")
noextract=()
md5sums=(SKIP)
validpgpkeys=()

prepare() {
	git clone https://github.com/agalwood/$_pkgname.git
	npm config set registry 'https://registry.npm.taobao.org'
	export ELECTRON_MIRROR='https://npm.taobao.org/mirrors/electron/'
	export SASS_BINARY_SITE='https://npm.taobao.org/mirrors/node-sass'
	
}

build() {
	cd $_pkgname/
	npm install
	npm run build
}
package() {
	install -d ${pkgdir}/opt
	install -d ${pkgdir}/usr/bin
	install -d ${pkgdir}/usr/share/icons
	install -d ${pkgdir}/usr/share/applications
	mv ${srcdir}/$_pkgname/release/linux-unpacked/ ${pkgdir}/opt/motrix
	install -Dm 644 ${srcdir}/$_pkgname/build/256x256.png ${pkgdir}/usr/share/icons/motrix.png
	echo -e "#!/bin/bash \n /opt/motrix/motrix" > ${pkgdir}/usr/bin/motrix
	chmod a+x ${pkgdir}/usr/bin/motrix
	install -Dm 644 ${srcdir}/Motrix.desktop ${pkgdir}/usr/share/applications
	rm -rf ${srcdir}
}
