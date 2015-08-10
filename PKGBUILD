# Maintainer: farseerfc <farseerfc@archlinuxcn.org>
# Contributor: Andreas Hauser <andy-aur@splashground.de>

pkgname=jave
pkgver=5
pkgrel=9
pkgdesc="Java Ascii Versatile Editor - graphics editor for editing texts instead of images."
url="http://www.jave.de/"
license="custom"
depends=(java-runtime)
optdepends=('figlet: provide base figlet fonts'
'figlet-fonts: provide additional asciiart fonts')
makedepends=()
conflicts=()
replaces=()
backup=()
arch=('any')
install=
source=(${url}download/${pkgname}${pkgver}.zip jave.sh)

package() {

	mkdir -p $pkgdir/usr/share/java/$pkgname
	mv $srcdir/* $pkgdir/usr/share/java/$pkgname
	rm $pkgdir/usr/share/java/$pkgname/$pkgname*.zip
	rm $pkgdir/usr/share/java/$pkgname/$pkgname.sh
	rm $pkgdir/usr/share/java/$pkgname/fonts -r
	cd  $pkgdir/usr/share/java/$pkgname/ 
	ln -s  /usr/share/figlet/fonts fonts
	mkdir -p $pkgdir/usr/bin
        install $startdir/jave.sh $pkgdir/usr/bin/jave
}

md5sums=('ef048242023f7afe2a30e1f1454cb44b'
         '6c604bf7f354b542c75fbf78523fa2ff')
