pkgname=osx-arc-darker
pkgver=1.4.1
pkgrel=1
pkgdesc="OSX-Arc-Darker Theme for GTK 3.x"
arch=(any)
url=https://www.gnome-look.org/p/1167049/
depends=('gtk3')
source=("https://dl.opendesktop.org/api/files/download/id/1492458071/OSX-Arc-Darker-v1.4.1.tar.gz")
md5sums=('75130b63ee3617e5538f676e8cbc3acf')

package(){
	cd "$srcdir"
	find */ -type f -exec install -Dm644 '{}' "$pkgdir/usr/share/themes/{}" \;
}
