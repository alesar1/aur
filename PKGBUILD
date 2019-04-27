# Maintainer: Tommy Li <ttoo74@gmail.com>
# Contributor: Mark Lee <stealthsheath@msn.com>

pkgname=jupyterhub-git
_pkgname=jupyterhub
provides=("jupyterhub")
conflicts=("jupyterhub")
pkgver=1.0.0b2.r15.gccf13979
pkgrel=1
pkgdesc="Multi-user server for Jupyter notebooks"
url="http://jupyter.org/"
arch=(any)
license=('BSD')
depends=('python-prometheus_client' 'python-entrypoints' 'python-async_generator' 'python-oauthlib' 'python-certipy' 'python-alembic' 'python-tornado' 'python-jinja' 'ipython' 'python-pamela' 'python-sqlalchemy' 'python-requests' 'nodejs-configurable-http-proxy')
makedepends=('bower' 'npm')
source=("git+https://github.com/jupyterhub/jupyterhub.git")
sha256sums=("SKIP")

pkgver() {
  cd "${_pkgname}"
  git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "${_pkgname}"
  python setup.py build
} 

package() {
  cd "${_pkgname}"
  python setup.py install --root="${pkgdir}"
  install -Dm644 COPYING.md "${pkgdir}"/usr/share/licenses/$_pkgname/COPYING.md
}

