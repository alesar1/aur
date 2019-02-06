# Maintainer: Josh Hoffer < hoffer dot joshua at gmail dot com > 

pkgname=python-bempp-git
_pkgname=bempp
pkgdesc='The BEM++ boundary element library'
pkgver=3.3.4_ce2ffc1c
pkgrel=1
epoch=1
arch=('i686' 'x86_64')
provides=('python-bempp')
url="https://bempp.com/"
license=(MIT)
options=('!strip')
depends=('python-scipy' 'python-mpi4py' 'intel-tbb')
makedepends=('dune-common' 'dune-geometry' 'doxygen' 'dune-uggrid' 'cython>=0.22' 'git')
optdepends=('ipython: interactive console'
	    'gmsh: external plots'
)
source=('git+https://bitbucket.org/bemppsolutions/bempp.git')
sha256sums=('SKIP')

pkgver() {
  cd "$srcdir/$_pkgname"
  echo $(cat VERSION)_$(git rev-parse --short HEAD)
#  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g
}

build() {
	cd "$srcdir"/"$_pkgname"
	python setup.py build
}

package() {
	cd "$srcdir"/"$_pkgname"
	python setup.py install --skip-build -O1 --root="$pkgdir"

	cd "$pkgdir"
	install -m0644 -D "$srcdir"/$_pkgname/LICENSE usr/share/licenses/$pkgname/LICENSE
	chmod -R a+r usr
}

