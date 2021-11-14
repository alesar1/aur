# Maintainer: spider-mario <spidermario@free.fr>
# Contributor: Jerome Leclanche <jerome@leclan.ch>

_pkgname=PuLP
pkgbase=python-pulp
pkgname=(python-pulp python2-pulp)
pkgver=2.5.1
pkgrel=1
pkgdesc="A Linear Programming modeler written in Python"
arch=("any")
license=("BSD")
url="https://github.com/coin-or/pulp"
makedepends=('python-setuptools' 'python2-setuptools')
source=("https://files.pythonhosted.org/packages/source/${_pkgname::1}/$_pkgname/$_pkgname-$pkgver.tar.gz")
b2sums=('ace8e52eac3d911039ea9c81417de615c1cb7b2ef136c206bdc2fc01657d67379168617148718156314b1d45f27cc099e226a08e561b297b7d2991b5effe9735')

prepare() {
	for _python in python python2; do
		rm -fr $_python-pulp
		cp -r $_pkgname-$pkgver $_python-pulp
	done
}

build() {
	for _python in python python2; do
		pushd $_python-pulp
		$_python setup.py build
		popd
	done
}

_package_for_python_version() {
	_python="$1"

	cd $_python-pulp

	$_python setup.py install --prefix=/usr --root="$pkgdir" --optimize=1 --skip-build

	install --directory "$pkgdir"/usr/share/licenses/$pkgname/
	install -m644 LICENSE "$pkgdir"/usr/share/licenses/$pkgname/
}

package_python-pulp() {
	depends=('python-amply')
	_package_for_python_version python
}

package_python2-pulp() {
	depends=('python2-amply')
	_package_for_python_version python2

	rm "$pkgdir"/usr/bin/pulptest
}
