# Contributor: Stefan Husmann <stefan-husmann@t-online.de>
# Maintainer: Steven Allen <steven@stebalien.com>

pkgname=stapler-git
pkgver=0.3.2.r34.gee85df8
pkgrel=1
pkgdesc="Manipulate PDF documents from the command line"
url="http://github.com/hellerbarde/stapler"
arch=('any')
license=('BSD')
depends=('python-pypdf2' 'python-setuptools' 'python-more-itertools')
makedepends=('git')
source=('git+https://github.com/hellerbarde/stapler.git')
md5sums=('SKIP')
_gitname="stapler"

pkgver() {
  cd "$srcdir/$_gitname"
  git describe --tags --always | sed -e 's/\([^-]*-g\)/r\1/;s/-/./g'
}

check() {
  cd "$srcdir/$_gitname"
  python setup.py test
}

package() {
  cd "$srcdir/$_gitname"
  python setup.py install --prefix=/usr --root="$pkgdir" --optimize=1
  rm -rf "$pkgdir/usr/bin" # The setup.py scripts are broken
  install -Dm755 "stapler" "$pkgdir/usr/bin/stapler"

  install -Dm644 LICENSE $pkgdir/usr/share/licenses/stapler-git/LICENSE
  install -Dm644 README.rst $pkgdir/usr/share/doc/stapler-git/README
}
