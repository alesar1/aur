# Maintainer : Taiki Sugawara <buzz.taiki@gmail.com>
pkgname=gcviewer-bin
_pkgname=gcviewer
pkgver=1.36
pkgrel=1
pkgdesc="GCViewer is a little tool that visualizes verbose GC output generated by Sun, IBM, HP and BEA Java Virtual Machines."
arch=('any')
url="https://github.com/chewiebug/GCViewer"
license=('LGPL')
depends=('java-runtime')
makedepends=('imagemagick')
provides=('gcviewer')
conflicts=('gcviewer' 'gcviewer-git')
source=("http://downloads.sourceforge.net/project/gcviewer/$_pkgname-$pkgver.jar"
        'gcviewer.sh'
        'gcviewer.desktop')
sha256sums=('5e6757735903d1d3b8359ae8fabc66cdc2ac6646725e820a18e55b85b3bc00f4'
            '20316cd8975215966d9983aab9cc61a1a95acdbd397d30db6ad1da7f2ecc2e0b'
            '255f2a7b966832b98b0e8683d3a2b97a3a71bd354000d226ab21500ec52e8a91')

build() {
  convert "$srcdir/images/gcviewericon.gif" "$srcdir/images/gcviewericon.png"
}

package() {
  install -D -m644 "$srcdir/$_pkgname-$pkgver.jar"  "$pkgdir/usr/share/java/$_pkgname/$_pkgname.jar"
  install -D -m644 "$srcdir/META-INF/README.md"  "$pkgdir/usr/share/doc/$_pkgname/README.md"
  install -D -m644 "$srcdir/META-INF/LICENSE.txt"  "$pkgdir/usr/share/licenses/$_pkgname/LICENSE.txt"
  install -D -m644 "$srcdir/images/gcviewericon.png" "$pkgdir/usr/share/pixmaps/$_pkgname.png"
  install -D -m755 "$srcdir/gcviewer.sh" "$pkgdir/usr/bin/gcviewer"
  install -D -m644 "$srcdir/gcviewer.desktop" "$pkgdir/usr/share/applications/$_pkgname.desktop"
}

# vim:set ts=2 sw=2 et:
