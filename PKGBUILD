# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=vimix-gtk-themes
_pkgver=2020-11-28
pkgver=${_pkgver//-/.}
pkgrel=2
pkgdesc="A flat Material Design theme for GTK 3, GTK 2, GNOME Shell, etc."
arch=('any')
url="https://vinceliuice.github.io/theme-vimix.html"
license=('GPL3')
depends=('gtk3' 'gtk-engine-murrine' 'gtk-engines')
optdepends=('kvantum-theme-vimix: Matching Kvantum theme'
            'vimix-icon-theme: Matching icon theme'
            'vimix-cursors: Matching cursor theme'
            'tela-icon-theme: Recommended icon theme')
conflicts=('vimix-gtk-themes-git')
options=('!strip')
source=("$pkgname-$pkgver.tar.gz::https://github.com/vinceliuice/$pkgname/archive/$_pkgver.tar.gz")
sha256sums=('c2fbe0d29cb32ab4b4cd4f419655212c684bb1cb9becd37eb6b7874f5555fc8d')

package() {
	cd "$pkgname-$_pkgver"
	install -d "$pkgdir/usr/share/themes"
	./install.sh -a -d "$pkgdir/usr/share/themes"
}
