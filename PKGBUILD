# Maintainer: Miika Launiainen <miika.launiainen@gmail.com>

pkgname=python-sauce-finder
_pkgname=sauce-finder
pkgver=v2.2.0
pkgrel=1
pkgdesc="Python script to find sauce for anime images."
arch=("any")
url="https://gitlab.com/miicat/$_pkgname"
license=("GPL3")
depends=("python-requests" "python-click" "python-validators")
makedepends=("git")
provides=("sauce-finder")
source=("${_pkgname}::git+https://gitlab.com/miicat/${_pkgname}")
md5sums=("SKIP")

pkgver() {
	cd "${srcdir}/${_pkgname}"
	git describe --long --tags | sed "s/\([^-]*-g\)/r\1/;s/-/./g"
}

build() {
	cd "${srcdir}/${_pkgname}"
	git checkout production
	python setup.py build
}

package() {
	cd "${srcdir}/${_pkgname}"
	python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
}
