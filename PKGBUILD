pkgname=ant-bloody-gtk-theme
pkgver=0.8
pkgrel=1
pkgdesc="Ant Bloody Theme for GTK 3.x"
arch=(any)
url=https://www.gnome-look.org/p/1099856/
depends=('gtk3')
source=("https://dl.opendesktop.org/api/files/download/id/1507003569/Ant-Bloody.tar.xz")
md5sums=('7ff067cc249fa2fa84f508014f9a7a5e')

package(){
	cd "$srcdir"
	find */ -type f -exec install -Dm644 '{}' "$pkgdir/usr/share/themes/{}" \;
}
