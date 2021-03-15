# Contributor: Biginoz < biginoz AT free point fr >
# Contributor: ggranga
# Maintainer: Jose Riha < jose 1711 gmail com >

pkgname=mobac
pkgver=2.1.4
pkgrel=1
pkgdesc="Mobile Atlas Creator (formerly TrekBuddy Atlas Creator) creates offline atlases for GPS handhelds and cell phone applications like TrekBuddy, AndNav and other Android and WindowsCE based applications."
arch=('any')
url="http://mobac.sourceforge.net/"
license=('GPL')
depends=('java-runtime')
source=("http://sourceforge.net/projects/mobac/files/Mobile Atlas Creator/MOBAC 2.0/Mobile Atlas Creator ${pkgver}.zip"
	"mobac.sh"
	"directories.ini"
	"mobac.desktop"
	"mobac.png")

md5sums=('4ac760797addd217887bca2d3058d9c3'
         '1bc898bc6a623b5550249f96da0f0a29'
         '1552ae46115fd8315658ed660b16cf03'
         'a5710ec7830b78216f516e7955b57c55'
         'b1dc3b3e5f08216e0b32d31d60809cee')

build ()
{
  rm "Mobile Atlas Creator.exe"
}

package() {
	cd "$srcdir/"

	mkdir -p $pkgdir/usr/bin
	install -Dm 755 $srcdir/mobac.sh $pkgdir/usr/bin/mobac

	mkdir -p $pkgdir/usr/share/applications
	install -Dm 755 $srcdir/mobac.desktop $pkgdir/usr/share/applications/mobac.desktop

	mkdir -p $pkgdir/usr/share/mobac/mapsources
	install -Dm 644 $srcdir/mapsources/* $pkgdir/usr/share/mobac/mapsources/
	install -Dm 644 $srcdir/directories.ini $pkgdir/usr/share/mobac/
	install -Dm 644 $srcdir/Mobile_Atlas_Creator.jar $pkgdir/usr/share/mobac/
	install -Dm 644 $srcdir/sqlite-jdbc-3.16.1.jar $pkgdir/usr/share/mobac/
	install -Dm 644 $srcdir/README.HTM $pkgdir/usr/share/mobac/
	install -Dm 644 $srcdir/ReleaseNotes.txt $pkgdir/usr/share/mobac/
	install -Dm 644 $srcdir/CHANGELOG.txt $pkgdir/usr/share/mobac/
	install -D -m644 $srcdir/mobac.png $pkgdir/usr/share/pixmaps/mobac.png

}
