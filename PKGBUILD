# Maintainer Madison Brooke <madgeraccoon@outlook.com>

pkgname=mineonline
pkg_case=MineOnline
pkgdev=codieradical
pkgver=$(curl -s "https://api.github.com/repos/codieradical/MineOnline/releases/latest" | jq -r '.tag_name')
pkgrel=1
pkgdesc="Launch old versions of Minecraft just as you remembered them, only without a browser."
url="http://mineonline.codie.gg"
license=('CCPL:by-nc')
arch=('any')
depends=('jre8-openjdk')
source=("https://github.com/${pkgdev}/${pkg_case}/releases/download/${pkgver}/${pkg_case}.jar"
		"${pkg_case}.desktop"
		"${pkg_case}.png"
		"${pkgname}")
noextract=('MineOnline.jar')
md5sums=('SKIP'
		 'b4ca44fc2a05a1f1638420cd90b633f9'
		 '21c69aad5d0faae6e05271651631c7ca'
		 '4dcd0b3e90b5ce932b9a5048ce0c9a13')

package() {
	cd $srcdir
	mkdir -p $pkgdir/usr/{bin,share/{applications,pixmaps,java/$pkgname}}
	install -m 755 $pkgname $pkgdir/usr/bin/
	install -m 755 ${pkg_case}.jar $pkgdir/usr/share/java/$pkgname/
	install -m 644 $srcdir/${pkg_case}.desktop $pkgdir/usr/share/applications/
	install -m 644 $srcdir/${pkg_case}.png $pkgdir/usr/share/pixmaps/
}
