# Maintainer: Oleh Prypin <oleh@pryp.in>
# Contributor: Massimiliano Torromeo <massimiliano.torromeo@gmail.com>
# Contributor: Dan Serban
# Contributor: Fabio Volpe

pkgbase='python-pymunk'
_libname=${pkgbase/python-/}
pkgname=('python-pymunk' 'python2-pymunk')
pkgver=5.7.0
pkgrel=1
pkgdesc="A wrapper around the 2d physics library Chipmunk"
arch=('any')
url='http://www.pymunk.org/en/latest/'
license=('MIT')
makedepends=('python-setuptools' 'python2-setuptools')
source=("https://files.pythonhosted.org/packages/source/${_libname:0:1}/$_libname/$_libname-$pkgver.zip")
sha256sums=('585aabe9a7039b7a2dc07217120b6ccfc2abc200bd381187e0912ae852a63894')

prepare() {
	cd "$srcdir"/pymunk-$pkgver
	sed -r 's/^\s*ext_modules =/\0 [] and/' -i setup.py
	sed -r "s#^    libfn = .*#    libfn = '/usr/lib/libchipmunk.so'#" -i pymunk/_libload.py

	cd ..
	cp -r pymunk-$pkgver pymunk-$pkgver-py2
}

build() {
	cd "$srcdir"/pymunk-$pkgver
	python setup.py build

	cd "$srcdir"/pymunk-$pkgver-py2
	python2 setup.py build
}

package_python-pymunk() {
	depends=(python chipmunk python-cffi)

	cd "$srcdir"/pymunk-$pkgver
	python setup.py install -O1 --skip-build --root="$pkgdir"

	install -Dm644 LICENSE.txt "$pkgdir"/usr/share/licenses/$pkgname/LICENSE.txt
}

package_python2-pymunk() {
	depends=(python2 chipmunk python2-cffi)
	provides=(pymunk)
	replaces=(pymunk)
	conflicts=(pymunk)

	cd "$srcdir"/pymunk-$pkgver-py2
	python2 setup.py install -O1 --skip-build --root="$pkgdir"

	install -Dm644 LICENSE.txt "$pkgdir"/usr/share/licenses/$pkgname/LICENSE.txt
}
