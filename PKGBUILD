# Maintainer: steeltitanium <steeltitanium1 at gmail dot com>
# Contributor: steeltitanium <steeltitanium1 at gmail dot com>

pkgname=srb2kart-data
pkgver=1.1
pkgrel=6
pkgdesc="Data files for Sonic Robo Blast 2 Kart"
arch=('any')
license=('custom')
url='https://mb.srb2.org/showthread.php?t=43708'
optdepends=('srb2kart: "Sonic Robo Blast 2 Kart" game')
makedepends=('p7zip')
source=("https://github.com/STJr/Kart-Public/releases/download/v$pkgver/srb2kart-v${pkgver//./}-Installer.exe")
sha256sums=('3af7d005082c2d08a0494a5bb9137b335009ff311cb5bfec215ed07d8ab2185b')
noextract=("srb2kart-v${pkgver//./}-Installer.exe")

prepare() {
	# Fix broken permissions
	echo "Extracting srb2kart-v${pkgver//./}-assets.7z"
	7z x srb2kart-v${pkgver//./}-assets.7z
	echo "Extracting srb2kart-v${pkgver//./}-optional-assets.7z"
	7z x srb2kart-v${pkgver//./}-optional-assets.7z
	find "$srcdir"/mdls -type d -exec chmod 755 {} \;
}

package() {
	install -d "$pkgdir"/usr/share/games/SRB2Kart
	install -d "$pkgdir"/usr/share/games/SRB2Kart/mdls
	install -m644 {music,textures,gfx,maps,sounds,chars,bonuschars}.kart srb2.srb mdls.dat "$pkgdir"/usr/share/games/SRB2Kart
	cp -dpr --no-preserve=ownership mdls "$pkgdir"/usr/share/games/SRB2Kart
}