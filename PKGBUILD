# Maintainer: Ryan Greenblatt <ryan_greenblatt at brown dot edu>

pkgname=python-sympy-git
pkgver=1.6.r1751.gb88c69a1ed
pkgrel=1
pkgdesc="Computer algebra system (CAS) in Python, written in pure Python - git version"
arch=('any')
url='https://sympy.org/en/index.html'
license=('BSD')
depends=('python-mpmath')
conflicts=('python-sympy')
provides=('python-sympy')
optdepends=('ipython: user friendly interface for isympy')
makedepends=('python-setuptools' 'git')
source=("git+https://github.com/sympy/sympy.git")
srcdirname="sympy"
sha256sums=('SKIP')

if [ -n "$VIRTUAL_ENV" ]; then
  echo "Warning: You're building within a virtualenv. Use"
  echo "a shell without virtualenv to build this package!"
  exit 1
fi

pkgver() {
  cd "$srcdirname"
  git describe --long --tags | sed 's/sympy-\(.*\)/\1/g;s/\([^-]*-g\)/r\1/;s/-/./g'
}

package() {
  cd "$srcdirname"
  python setup.py install --root="$pkgdir" --optimize=1
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

# vim:set ts=2 sw=2 et:
