# Maintainer: mib <mib@mib.dev>
pkgname=lightburn-bin
pkgver=1.1.03
pkgrel=1
pkgdesc="A layout, editing, and control software for lastercutters."
arch=('x86_64')
url="https://lightburnsoftware.com"
license=('unknown')
depends=('qt5-multimedia' 'qt5-serialport')
makedepends=()
provides=("${pkgname}")
conflicts=("${pkgname}")
source=("https://github.com/LightBurnSoftware/deployment/releases/download/$pkgver/LightBurn-Linux64-v$pkgver.7z")
sha256sums=('5fb84093356a200069c85a2489868c199a9275aebd70a84a8211435831153a8c')

package() {
    install -Dm 755 "$srcdir/LightBurn/LightBurn" "$pkgdir/usr/bin/lightburn"
}
