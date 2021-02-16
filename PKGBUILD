# Contributor: Johannes Dewender  arch at JonnyJD dot net
pkgname=python-configshell-fb
_pkgname=configshell-fb
pkgver=1.1.28
pkgrel=2
pkgdesc="python framework for building simple CLI applications (free branch)"
arch=('any')
url="https://github.com/open-iscsi/configshell-fb"
license=('Apache')
options=()
depends=('python-pyparsing' 'python-urwid')
makedepends=('python-setuptools')
provides=('python-configshell')
conflicts=('python-configshell')
source=(https://github.com/open-iscsi/configshell-fb/archive/v${pkgver}.tar.gz)
sha512sums=('4cdc3ee72fc7c4bffcf2f508eef16cc8578d1358ceeb70050a619f5e93e0e189de7216ac0baa77af98fb1b7569940a22a0e3cd977cd460bb91252b4ab176d0f4')

package() {
  cd "$srcdir/$_pkgname-$pkgver"
  python setup.py install --root="$pkgdir/" --optimize=1
}

# vim:set ts=2 sw=2 et:
