# Maintainer: Yauhen Kirylau <actionless DOT loveless PLUS aur AT gmail MF com>

_pkgname=python-gaphas
pkgname="${_pkgname}-git"
pkgver=2.1.2.r0.g2c145f3
pkgrel=1
pkgdesc="Diagramming widget library for Python"
arch=('x86_64' 'i686')
url="https://github.com/gaphor/gaphas"
license=('Apache')
source=(
	"${_pkgname}::git+${url}.git#branch=master"
)
md5sums=('SKIP')
depends=(
	'python-gobject'
	'python-cairo'
	'python-importlib-metadata'
)
makedepends=(
	'git'
	'python-pip'
)
optdepends=(
)
provides=(
	"${_pkgname}"
)
conflicts=(
	"${_pkgname}"
)

pkgver() {
	cd "${srcdir}/${_pkgname}"
	git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

package() {
	cd "${srcdir}/${_pkgname}"
	PIP_CONFIG_FILE=/dev/null pip install --isolated --root="$pkgdir" --ignore-installed --no-deps .
}

# vim: ft=PKGBUILD
