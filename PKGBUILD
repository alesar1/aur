# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=vimix-gtk-themes
_pkgver=2022-10-30
pkgver=${_pkgver//-/.}
pkgrel=1
pkgdesc="A flat Material Design theme for GTK 3, GTK 2, GNOME Shell, etc."
arch=('any')
url="https://vinceliuice.github.io/theme-vimix.html"
license=('GPL3')
depends=('gtk3')
makedepends=('gnome-shell' 'sassc')
optdepends=('gtk-engine-murrine: GTK2 theme support'
            'gtk-engines: GTK2 theme support'
            'kvantum-theme-vimix: Matching Kvantum theme'
            'vimix-icon-theme: Matching icon theme'
            'vimix-cursors: Matching cursor theme'
            'plank: for Plank theme')
options=('!strip')
source=("$pkgname-$pkgver.tar.gz::https://github.com/vinceliuice/$pkgname/archive/$_pkgver.tar.gz")
sha256sums=('42253bb970852ee9fb0ae3d425134091acf12c4435485d0cbcd4537bec359388')

package() {
  cd "$pkgname-$_pkgver"
  install -d "$pkgdir/usr/share/themes"
  ./install.sh -a -d "$pkgdir/usr/share/themes"

  # Plank theme
  install -Dm644 src/plank/dock.theme -t "$pkgdir/usr/share/plank/themes/vimix"
}
