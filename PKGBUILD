# Maintainer: Darjan Krijan (daren) <darjan_krijan@gmx.de>
# Manual download of 'AOCC-${pkgver}-Compiler.tar.xz' required from upstream

pkgname=aocc-bin
pkgver=1.3.0
pkgrel=1
pkgdesc="AMD Optimizing C/C++ Compiler"
arch=('x86_64')
license=('custom')
url="https://developer.amd.com/amd-aocc/"
source=("file://AOCC-${pkgver}-Compiler.tar.xz")
options=('staticlibs' '!strip' 'libtool')
install=aocc-bin.install
sha256sums=("ba562e2d91b592d104278ccae2a7fd774a9894f3a30e849a30bcbe048790217e")

setenv_aocc=$(cat <<EOF
export PATH=/opt/aocc/bin:\$PATH
export LIBRARY_PATH=/opt/aocc/lib:/opt/aocc/lib32:\$LIBRARY_PATH
export LD_LIBRARY_PATH=/opt/aocc/lib:/opt/aocc/lib32:\$LD_LIBRARY_PATH
export C_INCLUDE_PATH=\$C_INCLUDE_PATH:/opt/aocc/include
export CPLUS_INCLUDE_PATH=\$CPLUS_INCLUDE_PATH:/opt/aocc/include
export LIBRARY_PATH=/usr/lib32:/usr/lib:/usr/lib64:\$LIBRARY_PATH
export LD_LIBRARY_PATH=/usr/lib32:/usr/lib:/usr/lib64:\$LD_LIBRARY_PATH
EOF
)

package() {
	mkdir -p ${pkgdir}/opt/aocc

	cp -r ${srcdir}/AOCC-${pkgver}-Compiler/* ${pkgdir}/opt/aocc

	rm ${pkgdir}/opt/aocc/install.sh

	printf ${setenv_aocc} > ${pkgdir}/opt/aocc/setenv_aocc.sh
}
