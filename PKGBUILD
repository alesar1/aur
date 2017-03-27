# Maintainer: Jack O'Connor <oconnor663@gmail.com>

pkgname=peru-git
pkgdesc='A tool for fetching code'
url='https://github.com/buildinspace/peru'
license=('MIT')
pkgver=601.bb9396e
pkgver() {
  cd "$srcdir/peru"
  echo $(git rev-list --count master).$(git rev-parse --short master)
}
pkgrel=1
arch=('any')
# Asyncio and pathlib are standard in Python 3.4, so they're not in the
# dependencies list.
depends=(python python-yaml python-docopt git)
makedepends=(python-setuptools)
optdepends=(
  'mercurial: fetching from hg repos'
  'subversion: fetching from svn repos'
)
conflicts=(peru)
source=('git://github.com/buildinspace/peru')
md5sums=('SKIP')

package() {
  cd "$srcdir/peru"
  python3 setup.py install --root="$pkgdir"
}
