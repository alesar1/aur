# Maintainer: Daniel Müllner <daniel@danifold.net>

pkgname=gtk-theme-mist-redmond-green
_pkgname=Mist-Redmond-Green
pkgver=1.0
pkgrel=1
pkgdesc="Simple, no-frills theme with warm gray tones for GTK 2/3."
arch=('any')
url="https://www.gnome-look.org/p/1150209/"
license=('GPL')
depends=('gtk-engines')
source=("$pkgname-$pkgver.zip::https://dl.opendesktop.org/api/files/download/id/1470259367/Mist-Redmond-Green.zip")
sha256sums=('bf62738d61587f7f776e5ea34d41759a188f3515ef65ee2e2f2769d12b543280')

package() {
	install -m755 -d "$pkgdir/usr/share/themes/$_pkgname"
	cp -r $_pkgname/* "$pkgdir/usr/share/themes/$_pkgname"
	chmod -R 644 "$pkgdir"/usr/share/themes/$_pkgname/gtk*/*
}
