# Maintainer: Nomz <nomzisnice@yahoo.com>
# Contributor: Twann <twann@ctemplar.com>

pkgname=tlauncher-bin
pkgver=2.839
pkgrel=1
pkgdesc="TLauncher – The best Minecraft Launcher."
url="https://tlauncher.org"
arch=("any")
license=("custom")
depends=("java8-openjfx" "jdk8-openjdk" "jre8-openjdk" "jre8-openjdk-headless")
source=("${pkgname}-${pkgver}.zip::https://dl2.tlauncher.org/f.php?f=files%2FTLauncher-${pkgver}.zip" "tlauncher.desktop")
sha512sums=("ffa6b0ea0d299fd7101794ece2c30c68f76f6e8316233d70f9376db8dc5cc0611264564bb345012aca0119b8b89a8a8e687acb3e878a250f2d2a513bacfd29cc" "179d2229b4a0c72e8a02f2373e0ff33daf03afa05db5b5b96b115d1d5df7a3c8f7815bb25cae22a48b15b57d5c466a0bb314367926ea3bfc7a41ad12be7c3c55")

package()
{
        cd "$srcdir"
	install -Dm644 "$srcdir/TLauncher-$pkgver.jar" "$pkgdir/opt/tlauncher/tlauncher.jar"
	install -Dm644 "$srcdir/tlauncher.desktop" "$pkgdir/usr/share/applications/tlauncher.desktop"
}
