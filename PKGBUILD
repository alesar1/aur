# Maintainer: Jan Martin Reckel <jm.reckel@t-online.de>
pkgname=cantara-bin
pkgver=2.3.2
pkgrel=1
epoch=
pkgdesc="Song Presentation Software"
arch=('x86_64')
url="https://www.cantara.app"
license=('GPL3')
groups=()
conflicts=('cantara')
depends=('qt5pas')
provides=("cantara")
source=("https://github.com/reckel-jm/cantara/releases/download/v$pkgver/cantara-$pkgver-linux-x86_64_bin.zip")
md5sums=('3342f701ccde320ed8911faea2d3dac5')

package() {
	mkdir -p $pkgdir/usr/bin/
	install -D cantara $pkgdir/usr/bin/cantara
	install -D languages/de/cantara.mo $pkgdir/usr/share/locale/de/LC_MESSAGES/cantara.mo
	install -D languages/zh/cantara.mo $pkgdir/usr/share/locale/zh/LC_MESSAGES/cantara.mo
	install -D app.cantara.Cantara.desktop $pkgdir/usr/share/applications/cantara.desktop
    install -D app.cantara.Cantara.png $pkgdir/usr/share/icons/app.cantara.Cantara.png
}
