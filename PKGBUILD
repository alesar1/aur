# Contributor: Yamashita Ren
# Contributor: Limao Luo <luolimao+AUR@gmail.com>
# Contributor: TuxSpirit <tuxspirit@archlinux.fr>

pkgname=peazip-qt-opensuse
pkgver=5.9.1
_rpmrel=1.2
pkgrel=3
pkgdesc="QT archiver utility (openSUSE x86_64 RPM)"
arch=(x86_64)
url=http://peazip.sourceforge.net/peazip-linux.html
license=(Artistic2.0 LGPL2.1)
depends=(balz desktop-file-utils curl gmp4 libx11 ncurses qt4pas p7zip upx)
optdepends=(quad unace zpaq unrar)
provides=(${pkgname%-*-*})
conflicts=(${pkgname%-*-*} ${pkgname%-*-*}-gtk2 ${pkgname%-*})
source=(http://download.opensuse.org/repositories/home:/X0F:/HSF/openSUSE_Tumbleweed/x86_64/${pkgname%-*-*}-${pkgver}-${_rpmrel}.x86_64.rpm)
sha256sums=('bbf6d23d2c2d5dbff27c24cb76f6ad18f0f4ccae95cb5453c090f3aa571e2661')

prepare() {
	rm -R "$srcdir/usr/share/doc"
	chmod go-w "$srcdir"/usr/bin/*
}

package() {
	cp -R "$srcdir"/usr $pkgdir/
}
