# Maintainer: Radim Sückr <contact@radimsuckr.cz>

pkgname=python-togglpy
pkgver=0.1.1
pkgrel=3
pkgdesc='A hosts file manager library written in python'
arch=('any')
url='https://github.com/matthewdowney/TogglPy'
license=('MIT')
source=('git+https://github.com/matthewdowney/TogglPy.git')
sha512sums=('SKIP')

prepare() {
	cd TogglPy
	python setup.py build
}

package() {
	cd TogglPy
	python setup.py install --root=${pkgdir} --optimize=1 --skip-build
}
