# Maintainer: Adrien Prost-Boucle <adrien.prost-boucle@laposte.net>

pkgname=ghdl-llvm-git
pkgver=0.34dev.git20161030
pkgrel=1
arch=('i686' 'x86_64')
pkgdesc='VHDL simulator - LLVM flavour'
url='http://sourceforge.net/projects/ghdl-updates/'
license=('GPLv2')

provides=('ghdl')
conflicts=('ghdl' 'ghdl-gcc-git' 'ghdl-mcode-git')
makedepends=('gcc-ada' 'git' 'llvm' 'clang')

source=(
	#"ghdl::git://git.code.sf.net/p/ghdl-updates/ghdl-updates.git"
	"ghdl::git://github.com/tgingold/ghdl.git"
)
md5sums=(
	'SKIP'
)

pkgver() {
	cd "${srcdir}/ghdl"

	# GHDL version (extracted from version.ads)
	_distver=`sed -n -e 's/.*Ghdl_Ver .*"\(.*\)".*/\1/p' src/version.in | tr -d '-'`
	# Date of the last git commit
	_gitver=`git log -n 1 --date=short | sed -n -e 's/.*Date:\s*\([0-9-]*\).*/\1/p' | tr -d -`

	echo $_distver.git$_gitver;
}

build() {
	cd "${srcdir}/ghdl"

	./configure --prefix=/usr/ --with-llvm=/usr/

	make

}

package() {
	cd "${srcdir}/ghdl"

	make DESTDIR="${pkgdir}" install

}
