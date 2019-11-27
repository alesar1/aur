# Maintainer: Darjan Krijan (daren) <darjan_krijan@gmx.de>
# Manual download of '${pkgname}-compiler-${pkgver}.tar' required from upstream

pkgname=aocc
pkgver=2.1.0
pkgrel=1
pkgdesc="AMD Optimizing C/C++ Compiler"
arch=('x86_64')
license=('custom')
url="https://developer.amd.com/amd-aocc/"
source=("local://aocc-compiler-${pkgver}.tar" "local://modulefile")
options=('staticlibs' '!strip' 'libtool')
depends=('ncurses5-compat-libs' 'env-modules')
install=aocc.install
md5sums=("8f0349c1138949c511a15bfa5850af10" "SKIP")

aocc_prefix=/opt/aocc

package() {
	prefix=${pkgdir}${aocc_prefix}
	mkdir -p ${prefix}

	# Cleanup
	rm ${srcdir}/${pkgname}-compiler-${pkgver}/install.sh
	# amdlibm seems to be an outdated version in aocc, use recent one from from aocl
	find ${srcdir}/${pkgname}-compiler-${pkgver}/lib/ -name "*amdlibm*" -delete

	cp -r ${srcdir}/${pkgname}-compiler-${pkgver}/* ${prefix}

	# modulefile
	cp ${srcdir}/modulefile ${prefix}
	mkdir -p ${pkgdir}${MODULESHOME}/modulefiles/
	ln -s ${aocc_prefix}/modulefile ${pkgdir}${MODULESHOME}/modulefiles/${pkgname}
}
