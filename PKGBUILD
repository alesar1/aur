# Maintainer: "strahe"

pkgname=binance
pkgver=0.0.3
pkgrel=1
pkgdesc="The Binance Desktop Application"
arch=('x86_64')
url="https://www.binance.com/en/download"
license=('custom')
depends=()
optdepends=()
source=("https://ftp.binance.com/electron-desktop/linux/production/${pkgname}-amd64-linux.deb")
noextract=("${pkgname}-amd64-linux.deb")
sha256sums=("SKIP")

package() {
    bsdtar -O -xf ${pkgname}-amd64-linux.deb data.tar.xz | bsdtar -C "$pkgdir" -xJf -

    # Permission fix
    find "${pkgdir}" -type d -exec chmod 755 {} +
}
