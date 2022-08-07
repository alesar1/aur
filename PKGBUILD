# Maintainer: Alif Zakiansyah As Syauqi <alifzakiansyah10@gmail.com>
pkgname="spoof-dpi-bin"
pkgver=0.62
pkgrel=1
# epoch=
pkgdesc="A simple and fast software designed to bypass Deep Packet Inspection"
arch=(x86_64)
url="https://github.com/xvzc/SpoofDPI"
license=('MIT')
groups=()
depends=()
makedepends=()
checkdepends=()
optdepends=()
provides=(spoof-dpi)
conflicts=(spoof-dpi)
replaces=()
backup=()
options=()
install=
changelog=
source=("spoof-dpi.service"
        "${url}/raw/main/LICENSE"
        "${pkgname/-bin/}-${pkgver}-${pkgrel}.tar.gz::${url}/releases/download/${pkgver}/${pkgname/-bin/}-linux.tar.gz")
noextract=()
md5sums=("d6d5ee0dfa44d0503e75d8f2fa3178d9"
  "fdfc8c7b3ca5899d9adff76f0083298a"
  "f4c7b33b6569d5f72d2ef9e360e462da")
# validpgpkeys=()

package() {
	install -Dm 644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  install -Dm 755 spoof-dpi "${pkgdir}/usr/bin/${pkgname/-bin/}"
  install -Dm 644 spoof-dpi.service "${pkgdir}/usr/lib/systemd/system/spoof-dpi.service"
}
