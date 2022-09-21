# Maintainer: curlywei <dewei0724@gmail.com>
# Contributer: 1st submitter coolerfall <coolingfall@gmail.com>

_target=arm-linux-gnueabihf
_pkgdate=2022.09
_pkgrev=1
_compiler_name=gcc
_compiler_supplier=linaro
_compiler_version_major=13
_compiler_version_minor=0
_compiler_version_rel=0

pkgname=${_target}-${_compiler_name}${_compiler_version_major}-${_compiler_supplier}-bin
pkgver=${_compiler_version_major}.${_compiler_version_minor}
pkgrel=${_compiler_version_rel}
epoch=
pkgdesc="The GNU Compiler Collection- cross compiler for ARMv7 EABI hard float target. (Linaro)"
arch=('x86_64')
url="https://snapshots.linaro.org/gnu-toolchain"
license=('GPL' 'LGPL')
groups=(${_target}-toolchain-linaro-bin)
depends=()
makedepends=()
checkdepends=()
optdepends=()
provides=()
conflicts=("${_target}-gcc")
replaces=("${_target}-gcc")
backup=()
options=(!emptydirs !strip staticlibs)
install=
changelog=
source=(${url}/${pkgver}-${_pkgdate}-${_pkgrev}/${_target}/${_compiler_name}-${_compiler_supplier}-${pkgver}.${pkgrel}-${_pkgdate}-${arch}_${_target}.tar.xz)
sha512sums=('111033bd7c4059895fa4c8b415dc31e2e4203601193065932694e04c4d25990b9f68d4481feb0d1fa6554d68c5d4c9500bcc1c2721dcdd73c46e6614ca0aa80b')


package() {
	mkdir -p ${pkgdir}/usr
	cp -a ${srcdir}/${_compiler_name}-${_compiler_supplier}-${pkgver}.${pkgrel}-${_pkgdate}-${arch}_${_target}/* ${pkgdir}/usr

	rm -f 	${pkgdir}/usr/*-manifest.txt
	rm -f 	${pkgdir}/usr/bin/runtest
	rm -f 	${pkgdir}/usr/lib/lib*
	rm -rf 	${pkgdir}/usr/include
	rm -rf 	${pkgdir}/usr/share/{dejagnu,doc,gcc-*,gdb,info,locale}
	rm -rf 	${pkgdir}/usr/share/man/{man1/runtest.1,man5,man7}
}

