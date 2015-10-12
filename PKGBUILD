# Maintainer: Buce <dmbuce@gmail.com>
# Contributor: Duncan Bain <duncanjbain@gmail.com>
# Contributor: Maxwell Pray a.k.a. Synthead <synthead@gmail.com>
# Contributor: Mike Swanson <mikeonthecomputer@gmail.com>

_pkgname=Minecraft-Overviewer
pkgname=${_pkgname,,}
pkgver=0.12.0
pkgrel=2
pkgdesc="Render large resolution images of a Minecraft map with a Google Maps powered interface"
arch=('x86_64' 'i686')
url="https://github.com/overviewer/${_pkgname}"
license=('GPL')
depends=('python2' 'python-imaging' 'python2-numpy')
source=("$url/archive/v$pkgver.tar.gz")
sha256sums=('ca0599184a0a9f215486801e4f72accb1bfe49de53256babfb979de087d41d81')

build() {
	cd "${_pkgname}-$pkgver"
	python2 setup.py build
}

package() {
	cd "${_pkgname}-$pkgver"
	python2 setup.py install --prefix=/usr --root="$pkgdir"
}
