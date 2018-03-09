# Maintainer: DanManN <dnahimov@gmail.com>
_pkgname=better-apidoc
pkgname=python-$_pkgname-git
pkgver=r13.b52b365
pkgrel=1
pkgdesc="A version of sphinx-apidoc with support for templating."
arch=('any')
url="https://github.com/goerz/better-apidoc"
license=('FreeBSD')
depends=('python' 'python-sphinx')
makedepends=('git' 'python-setuptools' 'python-sphinxcontrib-websupport')
provides=('python-better-apidoc')
conflicts=('python-better-apidoc')
source=("git+https://github.com/goerz/better-apidoc.git")
md5sums=('SKIP')

pkgver() {
  cd $_pkgname
  ( set -o pipefail
    git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  )
}

package() {
  cd $_pkgname
  sed -i "s/sphinx\.quickstart/sphinx.cmd.quickstart/" better_apidoc.py
  python setup.py install --root="$pkgdir/" --optimize=1
  install -D -m644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
