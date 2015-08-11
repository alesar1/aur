# Maintainer: William Di Luigi <williamdiluigi@gmail.com>
#
# https://github.com/wil93/aur/tree/master/cms-git

pkgname=cms-oia-git
pkgver=1.3.0
pkgrel=2
pkgdesc="CMS, or Contest Management System, is a distributed system for running and (to some extent) organizing a programming contest."
arch=('any')
url="http://cms-dev.github.io/"
license=('AGPL3')
depends=(
  'postgresql' 'postgresql-libs' 'python2' 'python2-setuptools'
  'python2-tornado' 'python2-psycopg2' 'python2-sqlalchemy' 'python2-psutil'
  'python2-netifaces' 'python2-crypto' 'python2-pytz' 'python2-six'
  'iso-codes' 'shared-mime-info' 'python2-beautifulsoup3' 'python2-mechanize'
  'python2-mock' 'python2-requests' 'python2-werkzeug' 'python2-gevent'
  'python2-coverage' 'libcgroup' 'patool-py2'
)
optdepends=(
  'fpc: support for Pascal submissions'
  'sgi-stl-doc: support for STL documentation inside the contest'
  'python2-yaml: support for cmsMake (for tasks in the "italian format")'
  'python2-pycups: support for printing'
  'python2-pypdf2: support for printing'
)
makedepends=('git')
provides=('cms')
conflicts=('cms' 'cms-git')

source=(
  'git://github.com/mvpossum/cms-oia.git'
)
sha256sums=(
  'SKIP'
)

prepare() {
  cd "cms-oia"
  sed "s|MAKEPKG_INSTALL_ROOT|$pkgdir|g" -i setup.py
}

build() {
  cd "cms-oia"
  git submodule update --init
  python2 setup.py build
}

package() {
  cd "cms-oia"
  python2 setup.py install --prefix="/usr" --root="$pkgdir"
}
