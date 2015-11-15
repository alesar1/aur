
_pkgname=x-tile
pkgname=${_pkgname}-git
pkgver=2.5.r4.g6f39fd8
pkgrel=1
pkgdesc="X-tile is an application that allows you to select a number of windows and tile them in different ways. It works on any X desktop (gnome, kde, xfce, lxde…)."
arch=(any)
url=http://www.giuspen.com/$_pkgname
license=(GPL2)

depends=(hicolor-icon-theme python2-gconf)
makedepends=('git')

provides=("${_pkgname}")
conflicts=("${_pkgname}")

source=("${_pkgname}::git+https://github.com/giuspen/x-tile.git")
sha256sums=('SKIP')

pkgver() {
	cd "${srcdir}/${_pkgname}"
	git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    cd "${srcdir}/${_pkgname}"

    echo "python script, so nothing to build :) "
}

package() {
	cd "${srcdir}/${_pkgname}"

	python2 setup.py install --prefix=/usr --root="${pkgdir}"
}


