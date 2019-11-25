# Maintainer: Jingbei Li <i@jingbei.li>
# Contributor: Thomas Dziedzic < gostrc at gmail >
# Contributor: Angel 'angvp' Velasquez <angvp[at]archlinux.com.ve>
# Contributor: Ray Rashif <schiv@archlinux.org>
# Contributor: Douglas Soares de Andrade <dsa@aur.archlinux.org>
# Contributor: Bodor Dávid Gábor <david.gabor.bodor@gmail.com>
# Contributor: Andrzej Giniewicz <gginiu@gmail.com>

pkgname='python-scipy-mkl'
pkgver=1.3.3
pkgrel=1
pkgdesc="SciPy is open-source software for mathematics, science, and engineering."
arch=('x86_64')
url="http://www.scipy.org/"
license=('BSD')
depends=('intel-compiler-base' 'intel-fortran-compiler' 'intel-mkl' 'python-numpy')
provides=("python-scipy=$pkgver")
conflicts=('python-scipy')
makedepends=('gcc8' 'python-setuptools')
#checkdepends=('python-pytest')
optdepends=('python-pillow: for image saving module')
source=("https://github.com/scipy/scipy/releases/download/v${pkgver}/scipy-${pkgver}.tar.gz" 'build.sh')
sha512sums=('28a16f75a61a57c3655312345c4014454065180a8a1dbc7d8f3a3f81742b345bb64bf1dabb4c05914d8e684547f3b12d7a50a6f80b68d9dae66849a67075bc50'
            '1ad168482bd4774e47af009f888a549233defe5593b7464f3f5577a25ebec180905c948ebf3936c33ac49f2ea8cba5dcd060f8b86adb99ed2f1fc41fd2bf82bf')

build() {
	export LDFLAGS="-Wall -shared"
	export __INTEL_PRE_CFLAGS="-I/usr/lib/gcc/x86_64-pc-linux-gnu/8.3.0/include/c++ -I/usr/lib/gcc/x86_64-pc-linux-gnu/8.3.0/include/c++/x86_64-pc-linux-gnu/"

	cd scipy-${pkgver}
	sh ${srcdir}/build.sh
}

#check() {
#	# we need to do a temp install so we can import scipy
#	# also, the tests must not be run from the scipy source directory
#	export LDFLAGS="-Wall -shared"
#
#	cd ${srcdir}/scipy-${pkgver}
#	python3 setup.py config_fc --fcompiler=intelem install \
#	  --prefix=/usr --root=${srcdir}/test --optimize=1
#	export PYTHONPATH=${srcdir}/test/usr/lib/python3.7/site-packages
#	cd ${srcdir}
#	python -c "from scipy import test; test('full')"
#}

package() {
	export LDFLAGS="-Wall -shared"

	cd scipy-${pkgver}
	python3 setup.py config --compiler=intelem --fcompiler=intelem install --prefix=/usr --root="${pkgdir}/" --optimize=1

	install -Dm644 LICENSE.txt "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
