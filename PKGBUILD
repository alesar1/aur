# Maintainer: Michael Lojkovic <mikelojkovic@gmail.com>

pkgname=windows8-cursor
pkgver=1.01
pkgrel=1
pkgdesc="Cursors similliar to Windows 8 cursor"
arch=('any')
url="http://gnome-look.org/content/show.php/?content=155025"
license=("GPL")
source=("http://gnome-look.org/CONTENT/content-files/155025-win8.tar.gz")
sha1sums=('d0707f4f5b2e669cea4139f3df6863572082bbba')

package()
{
	cd win8

	install -d -m 755 "$pkgdir/usr/share/icons/Windows8-cursor"

	find . -type f -exec \
		install -D -m 644 '{}' "$pkgdir/usr/share/icons/Windows8-cursor/{}" \;
}