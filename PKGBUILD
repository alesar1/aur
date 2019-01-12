# Maintainer: <andrew dot myers at wanadoo  dot fr>
pkgname=vpacman
pkgver=1.3.0
pkgrel=1
pkgdesc="A programme to view and manage the pacman database - built with Tcl/Tk"
arch=('any')
url="https://github.com/fdservices/vpacman"
license=('GPL')
depends=('tcl' 'tk' 'wmctrl')
optdepends=('xorg-xwininfo: for fine control of terminal windows'
			'pkgfile: for faster retrieval of package files'
			)
source=(http://github.com/fdservices/$pkgname/archive/$pkgver.tar.gz)
md5sums=('9dada01776531c4ac9802622ead0eb14')

package() {
    cd "$srcdir/$pkgname-$pkgver"
#   /usr/share/vpacman
    install -d "$pkgdir"/usr/share/vpacman
    install -m755 vpacman.tcl "$pkgdir"/usr/share/vpacman
    install -m644 README.txt "$pkgdir"/usr/share/vpacman
#   /usr/share/pixmaps/vpacman
    install -d "$pkgdir"/usr/share/pixmaps/vpacman
    install -d "$pkgdir"/usr/share/pixmaps/vpacman/medium
    install -d "$pkgdir"/usr/share/pixmaps/vpacman/small
    install -d "$pkgdir"/usr/share/pixmaps/vpacman/tiny
    install -m644 icons/medium/* "$pkgdir"/usr/share/pixmaps/vpacman/medium
    install -m644 icons/small/* "$pkgdir"/usr/share/pixmaps/vpacman/small
    install -m644 icons/tiny/* "$pkgdir"/usr/share/pixmaps/vpacman/tiny
#   /usr/bin
    install -d "$pkgdir"/usr/bin
    install -m755 vpacman "$pkgdir"/usr/bin/
#   /usr/share/applications
    install -d "$pkgdir"/usr/share/applications
    install -m644 vpacman.desktop "$pkgdir"/usr/share/applications/
}






















