# This is based on https://aur.archlinux.org/packages/pyrepl/, and modified
# to use the Mercurial repository, since there has not been a release for a
# long time.
pkgname=python-pyrepl-hg
_realpkg=pyrepl
pkgver=r271+.6e190161f8b1+
pkgrel=1
pkgdesc="A Python library for building flexible command line interfaces"
url="http://pypi.python.org/pypi/pyrepl"
arch=("any")
license=('MIT')
depends=('python')
conflicts=('python-pyrepl')
provides=('python-pyrepl')
source=("hg+https://bitbucket.org/pypy/pyrepl"
        "fix-curses-_find_clib.patch"
        "py3fixes.patch")
md5sums=('SKIP'
         '14f1a9fd02693f9d05d25fd9d1214070'
         '09b2308d4d1094786d6a8bd7e545a0c8')
makedepends=('mercurial' 'python')

pkgver() {
  cd "$_realpkg"
  printf "r%s.%s" "$(hg identify -n)" "$(hg identify -i)"
}

prepare() {
  cd "$srcdir/$_realpkg"
  patch -Np1 < ../fix-curses-_find_clib.patch
  patch -p1 < ../py3fixes.patch
}

# check() {
#   cd "$srcdir/$_realpkg"
#   tox -e py35 -- --tb=short
# }

package() {
  cd "$srcdir/$_realpkg"
  python setup.py install --root="$pkgdir/" --optimize=1
}

# vim:set ts=2 sw=2 et:
