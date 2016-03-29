# Maintainer: megadriver <megadriver at gmx dot com>

pkgname=xonsh-git
_gitname=xonsh
pkgver=0.2.7.r29.ge245bc5
pkgrel=1
pkgdesc="A Python-ish, BASHwards-compatible shell"
url="http://github.com/scopatz/xonsh"
arch=('any')
license=('FreeBSD')
depends=('python' 'python-ply')
conflicts=('xonsh')
source=("git://github.com/scopatz/$_gitname.git")
install=xonsh.install
sha256sums=('SKIP')

pkgver() {
  cd "$_gitname"
  git describe --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

package() {
  cd "$srcdir/$_gitname"
  python setup.py install --root=$pkgdir
  install -D -m644 license "$pkgdir/usr/share/licenses/$_gitname/license"
}

