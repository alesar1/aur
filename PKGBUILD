# Maintainer: Daniel Milde <daniel at milde dot cz>
# Contributor: megadriver <megadriver at gmx dot com>

pkgname=xonsh
pkgver=0.6.0
pkgrel=1
pkgdesc="A Python-ish, BASHwards-compatible shell"
url="http://xon.sh/"
arch=('any')
license=('FreeBSD')
depends=('python' 'python-ply')
optdepends=('python-prompt_toolkit: support for SHELL_TYPE=prompt_toolkit')
makedepends=('python-setuptools')
source=("https://github.com/scopatz/xonsh/archive/$pkgver.zip")
install=xonsh.install
sha256sums=('d54fba4f5990a19594680f0b374240620691ad4bb3210d381ce040554bed365a')

package() {
  cd "$srcdir/$pkgname-$pkgver"
  python setup.py install --root="$pkgdir"
  install -D -m644 license "$pkgdir/usr/share/licenses/$pkgname/license"
}
