# Maintainer: Hugo Osvaldo Barrera <hugo@barrera.io>

pkgname=todoman-git
_pkgname=todoman
pkgver=latest
pkgrel=5
pkgdesc="A simple CalDav-based todo manager."
arch=("any")
url="https://gitlab.com/hobarrera/todoman"
license=('MIT')
depends=(python-icalendar python-urwid python-xdg python-ansi
         python-parsedatetime python-atomicwrites python-click
         python-setuptools_scm)
optdepends=('python-click-repl-git: the repl command.')
conflicts=("todoman")
provides=("todoman")
source=(git+https://gitlab.com/hobarrera/todoman.git)
md5sums=('SKIP')

pkgver() {
  cd "$srcdir/$_pkgname"
  python setup.py --version
}

build() {
  cd "$srcdir/$_pkgname"
  python setup.py build
}

package() {
  cd "$srcdir/$_pkgname"
  python setup.py install --root="$pkgdir"
}
