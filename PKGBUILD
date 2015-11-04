# Maintainer: Narthorn <narthorn@gmail.com>

_pkgname=termdown
pkgname=$_pkgname-git
pkgver=1.8.0.r11.g8dfcbff
pkgrel=1
arch=('any')
pkgdesc='Countdown timer and stopwatch in your terminal'
url='https://github.com/trehn/termdown'
license=('GPL3')
makedepends=('git' 'python-setuptools')
depends=('python' 'python-click' 'python-pyfiglet' 'python-dateutil')
provides=($_pkgname)
conflicts=($_pkgname)
source=("git+$url")
md5sums=('SKIP')

pkgver() {
	cd $_pkgname
	git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g' 
}

package() {
	cd $_pkgname
	python setup.py install --root="$pkgdir/"
}
