# $Id $
# Maintainer: John K. Luebs <jkl@johnluebs.com>
# Contributor: Eric Le Bras <eric.lebras@gmail.com>
# Contributor: Uwe Koloska <kolewu@koloro.de>

pkgname=mma
pkgver=19.08
pkgrel=1
pkgdesc="Musical MIDI Accompaniment (MMA) is an accompaniment generator"
url="http://www.mellowood.ca/mma/"
depends=('python')
optdepends=('timidity++: Synthesize MIDI files')
license=('GPL')
arch=('any')
install=mma.install
DLAGENTS=('http::/usr/bin/curl -fLC - --retry 3 --retry-delay 3 --user-agent Mozilla/4.0 -o %o %u')
source=("http://www.mellowood.ca/mma/mma-bin-$pkgver.tar.gz"
  mmarc)
sha1sums=('30592c7bee836b81982d9534738d086af7769587'
          '3c03107c2a1b380f66ed68458d9b9def8371c0f6')
options=(!strip)
backup=(etc/mmarc)

package () {
  cd "$srcdir/$pkgname-bin-$pkgver"

  mkdir -p "$pkgdir"/usr/{bin,share/mma,share/man/man1,share/man/man8}
  mkdir -p "$pkgdir"/etc

  cp mma.py "$pkgdir"/usr/bin/mma
  cp mma-gb "$pkgdir"/usr/bin/mma-gb
  cp mma-libdoc "$pkgdir"/usr/bin/mma-libdoc
  cp mma-renum "$pkgdir"/usr/bin/mma-renum
  cp mma-splitrec "$pkgdir"/usr/bin/mma-splitrec
  cp util/mma-mnx.py "$pkgdir"/usr/bin/mma-mnx
  cp util/mma-rm2std.py "$pkgdir"/usr/bin/mma-rm2std
  cp util/mmatabs.py "$pkgdir"/usr/bin/mmatabs
  cp util/mup2mma.py "$pkgdir"/usr/bin/mup2mma
  cp util/pg2mma.py "$pkgdir"/usr/bin/pg2mma
  cp util/synthsplit.py "$pkgdir"/usr/bin/mma-synthsplit
  cp -r {docs,egs,includes,lib,MMA,text} "$pkgdir"/usr/share/mma
  rmdir "$pkgdir"/usr/share/mma/includes/aria

  cp util/README.* "$pkgdir"/usr/share/mma/docs
  mv "$pkgdir"/usr/share/mma/docs/man/mma-libdoc.8 "$pkgdir"/usr/share/man/man8
  mv "$pkgdir"/usr/share/mma/docs/man/mma-renum.1 "$pkgdir"/usr/share/man/man1
  mv "$pkgdir"/usr/share/mma/docs/man/mma.1 "$pkgdir"/usr/share/man/man1
  mv "$pkgdir"/usr/share/mma/docs/man/mma-gb.1 "$pkgdir"/usr/share/man/man1
  rm -rf "$pkgdir"/usr/share/mma/docs/man
  cp "$srcdir"/mmarc "$pkgdir"/etc
}
