# Maintainer: intothegnu <intothegnu@protonmail.com>

pkgname="nyaash"
pkgver="1.3.0"
pkgrel="1"
pkgdesc="Simple POSIX shell script to query Nyaa instances."
arch=('any')
depends=('lynx' 'curl')
optdepends=('noto-fonts-cjk: chinese, japanese, and korean characters' 'dmenu: dmenu_nyaash gui')
license=('GPL')
url="https://notabug.org/BezierQuadratic/nyaash"
source=("https://notabug.org/BezierQuadratic/nyaash/archive/$pkgver.tar.gz")
md5sums=('7db7d53cda3937bf6f0bb4d47dec7f77')
package(){
	mkdir -p $pkgdir/usr/bin
	mkdir -p $pkgdir/usr/share/doc/nyaash
	mkdir -p $pkgdir/usr/share/man/man1
	cp -p $srcdir/nyaash/nyaa.sh $pkgdir/usr/bin/nyaash
	cp -p $srcdir/nyaash/dmenu_nyaa.sh $pkgdir/usr/bin/dmenu_nyaash
	cp -p $srcdir/nyaash/LICENSE $pkgdir/usr/share/doc/nyaash/LICENSE
	cp -p $srcdir/nyaash/README.md $pkgdir/usr/share/doc/nyaash/README.md
	gzip $srcdir/nyaash/man/nyaash
	cp -p $srcdir/nyaash/man/nyaash.gz $pkgdir/usr/share/man/man1/nyaash.1.gz
	gzip $srcdir/nyaash/man/dmenu_nyaash
	cp -p $srcdir/nyaash/man/dmenu_nyaash.gz $pkgdir/usr/share/man/man1/dmenu_nyaash.1.gz
}
