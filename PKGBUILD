pkgname=osx-arc-plus
pkgver=1.4.5
pkgrel=1
pkgdesc="OSX-Arc-Plus Theme for GTK 3.x"
arch=(any)
url=https://www.gnome-look.org/p/1167049/
depends=('gtk3')
makedepends=('unzip')
source=("https://dl.opendesktop.org/api/files/download/id/1511459132/OSX-Arc-Plus-v1.4.5.zip")
md5sums=('0b2f89b0ae2b034eb84d95f094ecf237')

package(){
	cd "$srcdir"
	find */ -type f -exec install -Dm644 '{}' "$pkgdir/usr/share/themes/{}" \;
}
