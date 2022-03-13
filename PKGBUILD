# Maintainer: Thorben Günther <echo YWRtaW5AeGVucm94Lm5ldAo= | base64 -d>
# Contributor: Sam Whited <sam@samwhited.com>
# Contributor: renek <aur@spaceshore.net>
# Contributor: Maxime "pep" Buquet <archlinux@bouah.net>

pkgname=python-aioxmpp
_pkgname=${pkgname#python-}
pkgver=0.13.2
pkgrel=1
pkgdesc="An XMPP library for use with Python 3.5+ asyncio"
arch=('any')
url="https://github.com/horazont/aioxmpp"
license=('LGPL3')
depends=('libxml2'
         'python-aioopenssl'
         'python-aiosasl'
         'python-babel'
         'python-dnspython'
         'python-lxml'
         'python-multidict'
         'python-pyasn1'
         'python-pyasn1-modules'
         'python-pyopenssl'
         'python-sortedcollections'
         'python-tzlocal')
makedepends=('python-setuptools')
checkdepends=('python-pytest')
source=("$pkgname-$pkgver.tar.gz::https://github.com/horazont/aioxmpp/archive/refs/tags/v$pkgver.tar.gz")
sha256sums=('bb5b7d876d43340d3dc562781634f58376cf6d2d74ed39f2a592b6a96d6210ac')

check() {
  cd "$srcdir/$_pkgname-$pkgver"
  python -m nose
}

build() {
  cd "$srcdir/$_pkgname-$pkgver"
  python setup.py build
}

package() {
  cd "$srcdir/$_pkgname-$pkgver"
  python setup.py install --skip-build --root="$pkgdir/" --optimize=1
}

# vim:set ts=2 sw=2 et:
