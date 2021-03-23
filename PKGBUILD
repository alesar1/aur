# Maintainer: Adrien Prost-Boucle <adrien.prost-boucle@laposte.net>

pkgname=ghdl-llvm-git
pkgver=2.0.0dev.r6076.g9f796794
pkgrel=1
arch=('any')
pkgdesc='VHDL simulator - LLVM back-end'
url='https://github.com/ghdl/ghdl'
license=('GPLv2')

provides=("ghdl=$pkgver" "ghdl-git=$pkgver")
conflicts=('ghdl' 'ghdl-gcc-git' 'ghdl-mcode-git')
makedepends=('git' 'llvm' 'clang')
depends=('gcc-ada')
checkdepends=('python-pytest' 'python-pydecor' 'python-pyvhdlmodel')
optdepends=(
	'python-pydecor: for pyGHDL'
	'python-pyvhdlmodel: for pyGHDL.dom'
)

source=(
	"ghdl::git://github.com/ghdl/ghdl.git"
)
sha256sums=(
	'SKIP'
)

pkgver() {
	cd "${srcdir}/ghdl"

	# GHDL version (extracted from configure)
	local _distver=`sed -n -e 's/^ghdl_version=.*"\(.*\)".*/\1/p' configure | tr -d '-'`

	# Date of the last git commit
	#local _gitver=`git log -n 1 --date=short | sed -n -e 's/.*Date:\s*\([0-9-]*\).*/\1/p' | tr -d -`
	# Revision number
	local _gitrev=`git rev-list --count HEAD`
	# Short hash of latest commit
	local _githash=`git rev-parse --short HEAD`

	#echo $_distver.git$_gitver;
	echo $_distver.r$_gitrev.g$_githash;
}

build() {
	cd "${srcdir}/ghdl"

	./configure \
		--prefix=/usr/ \
		--with-llvm-config \
		--enable-libghdl \
		--enable-synth

	make
}

check() {
	cd "${srcdir}/ghdl"

	make install.vpi.local

	make test
}

package() {
	cd "${srcdir}/ghdl"

	make DESTDIR="${pkgdir}" install

	# In case it does not exist, create symlink libghdl.so
	local _gso=`ls "${pkgdir}/usr/lib/" | grep -e '^libghdl-.*\.so$' | head -n 1`
	if [[ -n "$_gso" ]] ; then
		ln -s "$_gso" "${pkgdir}/usr/lib/libghdl.so"
	fi

}
