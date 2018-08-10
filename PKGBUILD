# Maintainer: Bert Peters <bert@bertptrs.nl>
# Maintainer: wedjat <wedjat@protonmail.com>
# Contributor: Andrzej Giniewicz <gginiu@gmail.com>
pkgname=('python-pydicom' 'python2-pydicom')
pkgver=1.1.0
pkgrel=3
pkgdesc="Pure python package for working with DICOM files"
arch=("x86_64")
url="https://pydicom.github.io/pydicom/stable/index.html"
license=('MIT' 'custom')
depends=('python')
makedepends=('python-setuptools' 'python2-setuptools')
optdepends=('python-numpy: for working with pixel data'
            'python-pillow: for working with compressed image data')
checkdepends=('python-pytest')
source=("$pkgname-$pkgver.tar.gz::https://github.com/pydicom/pydicom/archive/v$pkgver.tar.gz")
md5sums=('759799fbe1d01d1daadeca649717122b')

build()
{
	cd "$srcdir/pydicom-$pkgver"
	python setup.py build
}

package_python-pydicom()
{
	cd "$srcdir/pydicom-$pkgver"
	python setup.py install --skip-build --root="$pkgdir"/ --optimize=1

	install -D "$srcdir/pydicom-$pkgver/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

package_python2-pydicom()
{
	depends=('python2')
	optdepends=('python2-numpy: for working with pixel data'
                'python2-pillow: for working with compressed image data')
	cd "$srcdir/pydicom-$pkgver"
	python2 setup.py install --skip-build --root="$pkgdir"/ --optimize=1

	install -D "$srcdir/pydicom-$pkgver/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}


check()
{
	cd "$srcdir/pydicom-$pkgver"
	# Test suite has a known issue with Pillow 5 and up
	# See: https://github.com/pydicom/pydicom/issues/663
	# Timezone test isn't supposed to run in python 3, but it does
	# Don't write byte code to prevent a "$srcdir in pkg" error on rebuilds
	PYTHONDONTWRITEBYTECODE=1 \
		pytest --deselect=pydicom/tests/test_pillow_pixel_data.py::test_PI_RGB[JPEG_RGB_RGB] \
			--deselect pydicom/tests/test_fixes.py::TestTimeZone::test_constructor
}
