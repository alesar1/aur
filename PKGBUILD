# Maintainer: Peter Lamby <peterlamby@web.de>
_pkgname=intel-tbb
pkgname=lib32-${_pkgname}
pkgver=4.4u1
pkgrel=1
pkgdesc="32-bit multilib version of Intel's Threaded Building Blocks library"
arch=(x86_64)
license=('GPL')
depends=('lib32-gcc-libs')
makedepends=('gcc-multilib')
url=(http://threadingbuildingblocks.org)
source=(https://www.threadingbuildingblocks.org/sites/default/files/software_releases/source/tbb44_20151010oss_src.tgz)
sha1sums=('e28fdac66a971770d00f658c1c81e60b957fa5f0')

_foldername=tbb44_20151010oss

build() {
	cd "${srcdir}/${_foldername}"
	export CC="gcc"
	export CXX="g++"
	export PKG_CONFIG_PATH="/usr/lib32/pkgconfig"
	make arch=ia32
}

package() {
	cd "${srcdir}/${_foldername}/build/"
	cd `ls -a | grep release`
	
	mkdir "${pkgdir}/usr/"
	mkdir "${pkgdir}/usr/lib32/"
	cp -dpr --no-preserve=ownership *.{so,2} "${pkgdir}/usr/lib32/"
}
