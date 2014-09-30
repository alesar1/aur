# $Id: PKGBUILD 179889 2013-03-11 02:36:11Z dan $
# Maintainer: Dan McGee <dan@archlinux.org>
# Contributor: Daniele Paolella <dp@mcrservice.it>

pkgname='pypy-virtualenv'
pkgver=1.11.6
pkgrel=1
pkgdesc="Virtual Python Environment builder"
url="http://www.virtualenv.org/"
arch=('any')
license=('MIT')
depends=('pypy' 'pypy-distribute')
source=("http://pypi.python.org/packages/source/v/virtualenv/virtualenv-$pkgver.tar.gz")

package() {
  cd "$srcdir/virtualenv-$pkgver"
  pypy setup.py build
  pypy setup.py install --root="$pkgdir"

  install -D -m755 "$pkgdir/opt/pypy/bin/virtualenv" "$pkgdir/usr/bin/virtualenv-pypy"

  # should report this upstream as still not fixed...
  sed -i "s|#!/usr/bin/env python$|#!/usr/bin/env python2|" \
    $pkgdir/opt/pypy/site-packages/virtualenv.py
 
  install -D -m644 LICENSE.txt \
    "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
md5sums=('f61cdd983d2c4e6aeabb70b1060d6f49')
