# Maintainer: Trizen <echo dHJpemVueEBnbWFpbC5jb20K | base64 -d>

pkgname=menutray
pkgver=0.46
pkgrel=1

pkgdesc="A simple GTK+ application menu tray, written in Perl."
url="https://github.com/trizen/$pkgname"

arch=('any')
license=('GPLv3')

depends=('perl>=5.14.0' 'gtk2-perl' 'perl-data-dump' 'perl-linux-desktopfiles>=0.08')
optdepends=('perl-gtk3: for Gtk3 support (--gtk3)')
source=("https://github.com/trizen/${pkgname}/archive/${pkgver}.tar.gz")
sha256sums=('08db11bc9780d8541949b5de6c16fdfadf1d274f07f5b99d3aea46d32b956a22')
install='readme.install'

package() {
    cd "$pkgname-$pkgver"
    install -Dm755 "$pkgname" "$pkgdir/usr/bin/$pkgname"
    install -Dm644 "schema.pl" "$pkgdir/etc/xdg/$pkgname/schema.pl"
    #install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
