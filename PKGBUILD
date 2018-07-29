# Maintainer: goll <adrian.goll+aur[at]gmail>

pkgname=waves-client
pkgver=1.0.0
pkgrel=1
pkgdesc="The official client application for the Waves platform"
arch=('x86_64')
url="https://wavesplatform.com/"
license=('Apache')
depends=('gtk2' 'libxtst' 'libxss' 'gconf' 'nss' 'alsa-lib')
source=("https://wavesplatform.com/files/WavesClient-${pkgver/_/-}-linux.deb")
sha256sums=('ebb00a922055af98849358536a36298dce74eb4cd98b240bb3e500b7008b23e2')

package() {
    bsdtar -O -xf "WavesClient-${pkgver/_/-}"*.deb data.tar.xz | bsdtar -C "${pkgdir}" -xJf -
    find "${pkgdir}" -type d -exec chmod 755 {} +

    mkdir -p "$pkgdir/usr/bin"
    ln -s "/opt/Waves Client/waves-client" "${pkgdir}/usr/bin/waves-client"
}
