# Maintainer: Kyle Shiue <shiue.kyle@gmail.com>
# Maintainer: Ilesh Thiada <ileshkt@gmail.com>
pkgname=ferium-gui-bin
_pkgname=ferium-gui
pkgver=4.1.0
pkgrel=1
pkgdesc="Fast and multi-source CLI program for managing Minecraft mods and modpacks from Modrinth, CurseForge, and Github Releases"
arch=("x86_64")
depends=("xdg-desktop-portal" "bzip2")
provides=("ferium")
conflicts=("ferium-bin")
url="https://github.com/theRookieCoder/ferium"
license=('MPL2')
source=("$_pkgname-$pkgver-$pkgrel.zip::https://github.com/theRookieCoder/ferium/releases/download/v$pkgver/ferium-linux-gnu-xdg.zip")
sha256sums=('b7e0cbb79f35dc16e2f3ad9d7af69d6d97594bcde7cc2eb3996f05071663d00f')

package() {
	cd "$srcdir"
	install -Dm0755 "ferium" "$pkgdir/usr/bin/ferium" 
}
