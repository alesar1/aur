# Maintainer: Jingbei Li <i@jingbei.li>
# Contributor: Thomas Dziedzic < gostrc at gmail >
# Contributor: Angel 'angvp' Velasquez <angvp[at]archlinux.com.ve>
# Contributor: Ray Rashif <schiv@archlinux.org>
# Contributor: Douglas Soares de Andrade <dsa@aur.archlinux.org>
# Contributor: Bodor Dávid Gábor <david.gabor.bodor@gmail.com>
# Contributor: Andrzej Giniewicz <gginiu@gmail.com>

pkgbase='python-scipy-mkl'
pkgname=('python-scipy-mkl' 'python2-scipy-mkl')
pkgver=1.2.0
pkgrel=1
pkgdesc="SciPy is open-source software for mathematics, science, and engineering."
arch=('i686' 'x86_64')
url="http://www.scipy.org/"
license=('BSD')
depends=('intel-compiler-base' 'intel-fortran-compiler' 'intel-mkl')
makedepends=('gcc-fortran' 'python-numpy' 'python2-numpy' 'python-setuptools' 'python2-setuptools' 'intel-compiler-base' 'intel-fortran-compiler' 'intel-mkl')
checkdepends=('python-pytest' 'python2-pytest')
source=(
	"https://github.com/scipy/scipy/releases/download/v${pkgver}/scipy-${pkgver}.tar.gz"
	"build_python.sh"
	'fix-utf8.patch'
)
sha256sums=('51a2424c8ed80e60bdb9a896806e7adaf24a58253b326fbad10f80a6d06f2214'
            '541bade4ce71fc139594a7e025923916ec37a7fdbf5e4aec4b86abedf439395c'
            '8095c3ed80658019f8976ff7e298ac80939b3c2814dfdd372d63c04a285d419e')

prepare() {
	cd scipy-${pkgver}
	# Fix unicode issues that prevent importing scipy.stats on py2
	patch -p1 -i ../fix-utf8.patch

	cd ${srcdir}
	cp -r scipy-${pkgver} scipy-${pkgver}-py2
	for file in $(find scipy-${pkgver}-py2 -name '*.py' -print); do
		sed -i 's_^#!.*/usr/bin/python_#!/usr/bin/python2_' $file
		sed -i 's_^#!.*/usr/bin/env.*python_#!/usr/bin/env python2_' $file
	done

	cp build_python.sh scipy-${pkgver}
	cp build_python.sh scipy-${pkgver}-py2
}

build() {
	# glibc 2.18 compatibility issue
	# cp /opt/intel/compilers_and_libraries_*/linux/compiler/include/math.h .
	# sed \
	# 	-e '173s/.*/#    include "\/usr\/include\/math.h"/' \
	# 	-e '1218s/!//' \
	# 	-i math.h
	# export __INTEL_PRE_CFLAGS="-I$srcdir "

	export LDFLAGS="-Wall -shared"
	export use_intel_cc=true
	export use_gcc=false


	# build for python3
	cd scipy-${pkgver}
	python3 setup.py config --compiler=intelem --fcompiler=intelem build_clib --compiler=intelem --fcompiler=intelem build_ext --compiler=intelem --fcompiler=intelem
	#sh build_python.sh python

	# build for python2
	cd ../scipy-${pkgver}-py2
	python2 setup.py config --compiler=intelem --fcompiler=intelem build_clib --compiler=intelem --fcompiler=intelem build_ext --compiler=intelem --fcompiler=intelem
	#sh build_python.sh python2

}

#check() {
#	# we need to do a temp install so we can import scipy
#	# also, the tests must not be run from the scipy source directory
#	export LDFLAGS="-Wall -shared"
#
#	cd ${srcdir}/scipy-${pkgver}
#	python3 setup.py config_fc --compiler=intelem --fcompiler=intelem install \
#	  --prefix=/usr --root=${srcdir}/test --optimize=1
#	export PYTHONPATH=${srcdir}/test/usr/lib/python3.7/site-packages
#	cd ${srcdir}
#	python -c "from scipy import test; test('full')"
#
#	cd ${srcdir}/scipy-${pkgver}-py2
#	python2 setup.py config_fc --compiler=intelem --fcompiler=intelem install \
#	  --prefix=/usr --root=${srcdir}/test --optimize=1
#	export PYTHONPATH=${srcdir}/test/usr/lib/python2.7/site-packages
#	cd ${srcdir}
#	python2 -c "from scipy import test; test('full')"
#}

package_python-scipy-mkl() {
	depends+=('python-numpy')
	provides=('python3-scipy' 'scipy')
	conflicts=('python-scipy')
	optdepends=('python-pillow: for image saving module')

	cd scipy-${pkgver}
	export LDFLAGS="-Wall -shared"

	python3 setup.py config --compiler=intelem --fcompiler=intelem install --prefix=/usr --root="${pkgdir}/" --optimize=1

	install -Dm644 LICENSE.txt \
		"${pkgdir}/usr/share/licenses/python-scipy/LICENSE"
}

package_python2-scipy-mkl() {
	depends+=('python2-numpy')
	provides=('python2-scipy' 'scipy')
	conflicts=('python2-scipy')
	optdepends=('python2-pillow: for image saving module')

	cd scipy-${pkgver}-py2
	export LDFLAGS="-Wall -shared"

	python2 setup.py config --compiler=intelem --fcompiler=intelem install --prefix=/usr --root="${pkgdir}/" --optimize=1

	install -Dm644 LICENSE.txt \
		"${pkgdir}/usr/share/licenses/python2-scipy/LICENSE"
}
