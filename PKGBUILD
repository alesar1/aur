# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=vimix-gtk-themes
_pkgver=2021-04-25
pkgver=${_pkgver//-/.}
pkgrel=1
pkgdesc="A flat Material Design theme for GTK 3, GTK 2, GNOME Shell, etc."
arch=('any')
url="https://vinceliuice.github.io/theme-vimix.html"
license=('GPL3')
depends=('gtk3')
optdepends=('gtk-engine-murrine: GTK2 theme support'
            'gtk-engines: GTK2 theme support'
            'kvantum-theme-vimix: Matching Kvantum theme'
            'vimix-icon-theme: Matching icon theme'
            'vimix-cursors: Matching cursor theme'
            'tela-icon-theme: Recommended icon theme')
conflicts=('vimix-gtk-themes-git')
options=('!strip')
source=("$pkgname-$pkgver.tar.gz::https://github.com/vinceliuice/$pkgname/archive/$_pkgver.tar.gz")
sha256sums=('709cff4100fd0ddc762ae7ece648a45b49281c607876db77121a67a3a8fecb56')

package() {
	cd "$pkgname-$_pkgver"
	install -d "$pkgdir/usr/share/themes"
	./install.sh -a -d "$pkgdir/usr/share/themes"
}
