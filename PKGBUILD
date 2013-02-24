# Maintainer: Mike Swanson <mikeonthecomputer@gmail.com>

pkgname=reposurgeon
pkgver=2.21
pkgrel=1
pkgdesc="Performs surgery on version control repositories."
arch=('any')
url="http://www.catb.org/esr/reposurgeon/"
license=('BSD')
depends=('python2')
makedepends=('xmlto')
optdepends=('bzr' 'cvs-fast-export' 'darcs' 'git' 'mercurial' 'rcs-fast-export' 'subversion')
source=(http://www.catb.org/~esr/reposurgeon/$pkgname-$pkgver.tar.gz)
sha256sums=('3d427821630010532139c7c9442cb01ee164cb59a6f429afd658cce3372c60ee')

build() {
  cd "$srcdir/$pkgname-$pkgver"
  sed -i -e '1s/python/python2/' repodiffer reposurgeon
  make repodiffer.1 repodiffer.html repopuller.1 repopuller.html \
    reposurgeon.1 reposurgeon.html features.html
}

package() {
  cd "$srcdir/$pkgname-$pkgver"
  install -Dm755 repodiffer "$pkgdir/usr/bin/repodiffer"
  install -Dm755 repopuller "$pkgdir/usr/bin/repopuller"
  install -Dm755 reposurgeon "$pkgdir/usr/bin/reposurgeon"
  install -Dm644 repodiffer.1 "$pkgdir/usr/share/man/man1/repodiffer.1"
  install -Dm644 repopuller.1 "$pkgdir/usr/share/man/man1/repopuller.1"
  install -Dm644 reposurgeon.1 "$pkgdir/usr/share/man/man1/reposurgeon.1"

  install -dm755 "$pkgdir/usr/share/doc/reposurgeon"
  install -m644 NEWS README repodiffer.html reposurgeon.html repopuller.html \
    features.html TODO "$pkgdir/usr/share/doc/reposurgeon"

  install -Dm644 COPYING "$pkgdir/usr/share/licenses/reposurgeon/COPYING"
}

# vim:set ts=2 sw=2 et:
