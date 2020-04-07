# # Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=orchis-theme-git
pkgver=r5.dfc4178
pkgrel=1
pkgdesc="A Material Design theme for GNOME/GTK based desktop environments."
arch=('any')
url="https://www.pling.com/p/1357889"
license=('GPL2')
depends=('gtk-engine-murrine' 'gtk3' 'gnome-themes-extra')
makedepends=('git' 'bc')
optdepends=('tela-icon-theme: Recommended icon theme')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=("${pkgname%-git}::git+https://github.com/vinceliuice/Orchis-theme.git")
sha256sums=('SKIP')

pkgver() {
	cd "$srcdir/${pkgname%-git}"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
	cd "$srcdir/${pkgname%-git}"
	install -d "$pkgdir/usr/share/themes"
    ./install.sh -d "$pkgdir/usr/share/themes"
}
