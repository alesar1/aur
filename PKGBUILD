pkgname=osx-arc-shadow
pkgver=1.4.5
pkgrel=2
pkgdesc="OSX-Arc-Shadow Theme for GTK 3.x"
arch=(any)
url=https://www.gnome-look.org/p/1167049/
depends=('gtk3')
source=("https://dl.opendesktop.org/api/files/downloadfile/id/1511459169/s/478c7995e96c3694c30aa8db98fe43a5/t/1512760162/OSX-Arc-Shadow-v1.4.5.zip")
md5sums=('f58e3c160e6b71ae7dadbc056210da45')

package(){
	cd "$srcdir"
	find */ -type f -exec install -Dm644 '{}' "$pkgdir/usr/share/themes/{}" \;
}
