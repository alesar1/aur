# Maintainer : E5ten <e5ten.arch@gmail.com>
# Contributor : Shawn Dellysse sdellysse@gmail.com

pkgname=parsec-bin
pkgver=147_9
pkgrel=1
pkgdesc="Remotely connect to a gaming pc for a low latency remote computing experience"
url=http://parsec.tv
arch=('x86_64')
provides=('parsec')
conflicts=('parsec')
epoch=1
depends=('gcc-libs' 'libglvnd' 'libxext' 'libxcb')
optdepends=('libva: For hardware accelerated decoding')
source=("https://s3.amazonaws.com/parsec-build/package/parsec-linux.deb")
md5sums=('e4baa31eb9a2f5aaad28148014165626')
package() {
	mkdir -p $pkgdir/usr/bin
	mkdir -p $pkgdir/usr/share/icons/hicolor/256x256/apps
	mkdir -p $pkgdir/usr/share/applications
	mkdir -p $pkgdir/usr/share/parsec/skel
	bsdtar xf $srcdir/data.tar.xz
	install -Dm755 $srcdir/usr/bin/parsecd $pkgdir/usr/bin/
	install -Dm755 $srcdir/usr/share/applications/parsec.desktop $pkgdir/usr/share/applications/
	install -Dm644 $srcdir/usr/share/icons/hicolor/256x256/apps/parsec.png $pkgdir/usr/share/icons/hicolor/256x256/apps/
	ln -s /usr/bin/parsecd $pkgdir/usr/bin/parsec
	cp $srcdir/usr/share/parsec/skel/appdata.json $pkgdir/usr/share/parsec/skel/appdata.json
	cp $srcdir/usr/share/parsec/skel/parsecd-${pkgver//_/-}.so $pkgdir/usr/share/parsec/skel/parsecd-${pkgver//_/-}.so
}

