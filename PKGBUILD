# Maintainer: Timo Schwichtenberg <therealbassx at yahoo dot de>
pkgname=forge-gui-desktop
pkgver=1.6.49
pkgrel=2
pkgdesc="Implementation of Magic the Gathering that lets you play against a computer AI"
arch=('any')
url="https://www.slightlymagic.net/wiki/Forge"
license=('GPL3')
depends=('jre8-openjdk')
source=("https://releases.cardforge.org/forge/$pkgname/$pkgver/$pkgname-$pkgver.tar.bz2"
	"https://github.com/Card-Forge/forge/raw/e16a80e822dd040cc6c768152f3493eb4f2ce09a/AppIcon.png")
sha1sums=('3d6e8d04c1ab8b66273dccdc02afa6a7ccc9215f'
	  '9a957969da65cf281ceb31a3737bb3b8b799f14b')

package() {
	cd "$srcdir"
	install -d -m0755 "$pkgdir"/usr/share/$pkgname/res
	cp -r "$srcdir"/res/* "$pkgdir"/usr/share/$pkgname/res
	install -Dm0664 "$srcdir"/LICENSE.txt "$pkgdir/usr/share/licenses/$pkgname/LICENSE.txt"
	install -Dm0644 "$srcdir"/AppIcon.png "$pkgdir"/usr/share/pixmaps/$pkgname.png
	install -Dm0644 "$srcdir"/$pkgname-$pkgver-jar-with-dependencies.jar "$pkgdir"/usr/share/java/$pkgname.jar
  	_deskfile="$pkgdir/usr/share/applications/$pkgname.desktop"
	_startfile="$pkgdir/usr/bin/$pkgname.sh"
  	install -Dm0644 /dev/stdin "$_deskfile"<<END
[Desktop Entry]
Name=$pkgname
Comment=$pkgdesc
Exec=/usr/bin/$pkgname.sh
Terminal=false
Type=Application
Categories=Game;
Keywords=mtg magic gathering
Icon=$pkgname
END
  	
  	install -Dm0644 /dev/stdin "$_startfile"<<END
#!/bin/sh
cd "/usr/share/$pkgname"
exec /usr/bin/java -Xmx1024m -jar '/usr/share/java/$pkgname.jar'
END
	chmod +x "$_startfile"
}
