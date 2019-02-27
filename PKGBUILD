# $Id: PKGBUILD 164237 2012-07-28 03:14:33Z stephane $
# Maintainer: Vladimir Khodygo <khodygo == at == gmail.com>
# Contributor: Ilya Elenskiy <elenskiy.ilya@gmail.com>
# Contributor: Jan de Groot <jgc@archlinux.org>
# Contributor: Douglas Soares de Andrade <dsa@aur.archlinux.org>
# Contributor: Angel 'angvp' Velasquez <angvp[at]archlinux.com.ve>
# Adapted to mkl by Simone Riva
pkgbase="python-numpy-mkl"
pkgname="python-numpy-mkl"
true && pkgname=('python-numpy-mkl' 'python2-numpy-mkl')
#pkgname=('python-numpy')
pkgver=1.16.2
pkgrel=1
pkgdesc="Scientific tools for Python compiled with intel mkl"
arch=('i686' 'x86_64')
license=('custom')
options=('staticlibs')
url="http://numpy.scipy.org/"
depends=('intel-mkl' 'python' 'python2')
makedepends=('python-setuptools' 'python2-setuptools' 'intel-compiler-base' 'intel-fortran-compiler' 'cython')

source=(https://github.com/numpy/numpy/archive/v${pkgver}.tar.gz
	'site64.cfg' 'site32.cfg' 'intelccompiler.py.patch'
	'fix_compiler.patch')

sha256sums=('88835849921a970dae7705b0ea4a144d6b22f5e28148e17f25723c492a74a3c0'
            '86cd68a695a5e1d76f8e53cda70c888c4ed04349f15c8096d4492e346e7187e1'
            '882f2717deca0fd6a2e2384aac2dc7973c566f9cd2ba46777c3b5ffdffa814df'
            '0d185daf0f2fcab08778173f54cee86cd88dc3c6703413686ab3742c0097db4e'
	    '7389feba5dc3db997be652fc8d98d573a936c62c4ef5272c142598636fcea2df')

build() {
	#cd "${srcdir}"

	patch ${srcdir}/numpy-${pkgver}/numpy/distutils/intelccompiler.py < ${srcdir}/intelccompiler.py.patch
	# set by hand this flag if you want to compile with gcc
	#force_gcc=false

	#if hash icc; then
	#	use_intel_cc=true
	#	use_gcc=false
	#else
	#	use_intel_cc=false
	#	use_gcc=true
	#fi

	#if [ "$force_gcc" = true ]; then
	#	use_intel_cc=false
	#	use_gcc=true
	#fi

	if [ "$CARCH" = "i686" ]; then
		cp ${srcdir}/site32.cfg ${srcdir}/site.cfg
		_compiler=intel
	else
		cp ${srcdir}/site64.cfg ${srcdir}/site.cfg
		_compiler=intelem
	fi

	cp -a numpy-${pkgver} numpy-py2-${pkgver}

	export Atlas=None
	#export LDFLAGS="$LDFLAGS -shared" # makes no difference

	#if [ "$use_gcc" = true ]; then
	#	export CFLAGS="-fopenmp -m64 -mtune=native -O3 -Wl,--no-as-needed"
	#	export CXXFLAGS="-fopenmp -m64 -mtune=native -O3 -Wl,--no-as-needed"
	#	export LDFLAGS="-ldl -lm"
	#	export FFLAGS="-fopenmp -m64 -mtune=native -O3"
	#fi

	#if [ "$use_intel_cc" = true ]; then
	#	export __INTEL_PRE_CFLAGS="$__INTEL_PRE_CFLAGS -D__PURE_INTEL_C99_HEADERS__ -D_Float32=float -D_Float64=double -D_Float128=\"long double\" -D_Float32x=_Float64 -D_Float64x=_Float128"
	#fi

	echo "Building Python2"
	cd "${srcdir}"
	cp ${srcdir}/site.cfg "${srcdir}/numpy-py2-${pkgver}"
	cd "${srcdir}/numpy-py2-${pkgver}"

	#if [ "$use_intel_cc" = true ]; then
	python2 setup.py config --compiler=${_compiler} build_clib --compiler=${_compiler} build_ext --compiler=${_compiler}
	#fi

	#if [ "$use_gcc" = true ]; then
	#	python2 setup.py config build_clib build_ext
	#fi

	echo "Building Python3"
	cd "${srcdir}"	
	cp ${srcdir}/site.cfg "${srcdir}/numpy-${pkgver}"
	cd "${srcdir}/numpy-${pkgver}"

	#if [ "$use_intel_cc" = true ]; then
	python setup.py config --compiler=${_compiler} build_clib --compiler=${_compiler} build_ext --compiler=${_compiler}
	#fi

	#if [ "$use_gcc" = true ]; then
	#	python setup.py config build_clib build_ext
	#fi

}

package_python2-numpy-mkl() {

	depends=('intel-mkl' 'python2')
	provides=("python2-numpy=${pkgver}")
	conflicts=("python2-numpy")
	optdepends=('python2-pytest: testsuite')

	cd "${srcdir}/numpy-py2-${pkgver}"
	python2 setup.py config_fc install --prefix=/usr --root="${pkgdir}" --optimize=2

	install -m755 -d "${pkgdir}/usr/share/licenses/python2-numpy"
	install -m644 LICENSE.txt "${pkgdir}/usr/share/licenses/python2-numpy/"

	sed -i -e "s|#![ ]*/usr/bin/python$|#!/usr/bin/python2|" \
		-e "s|#![ ]*/usr/bin/env python$|#!/usr/bin/env python2|" \
		-e "s|#![ ]*/bin/env python$|#!/usr/bin/env python2|" \
		$(find ${pkgdir} -name '*.py')

	mv "$pkgdir"/usr/bin/f2py{,2}
	patch ${pkgdir}/usr/lib/python2.7/site-packages/numpy/distutils/ccompiler.py < ${srcdir}/fix_compiler.patch
}

package_python-numpy-mkl() {

	depends=('intel-mkl' 'python')
	provides=("python-numpy=${pkgver}")
	conflicts=('python-numpy')
	optdepends=('python-pytest: testsuite')

	cd "${srcdir}/numpy-${pkgver}"
	python setup.py config_fc install --prefix=/usr --root="${pkgdir}" --optimize=2

	install -m755 -d "${pkgdir}/usr/share/licenses/python-numpy"
	install -m644 LICENSE.txt "${pkgdir}/usr/share/licenses/python-numpy/"
	patch ${pkgdir}/usr/lib/python3.7/site-packages/numpy/distutils/ccompiler.py < ${srcdir}/fix_compiler.patch
}
