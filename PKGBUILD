# Maintainer: Radoslaw Mejer <radmen@radmen.info>

pkgname=jd-tool-bin
pkgver=1.1
pkgrel=1
pkgdesc="JSON diff and patch"
arch=(x86_64)
url="https://github.com/josephburnett/jd"
license=(MIT)
depends=()
conflicts=(jd-tool)
source=("https://raw.githubusercontent.com/josephburnett/jd/master/LICENSE")
source_x86_64=("jd-${pkgver}::https://github.com/josephburnett/jd/releases/download/v${pkgver}/jd")
sha256sums=('7db445fe94ae6fb0c5ab69a6b47ec38a0e4b6d5a38f9d1493c0d8cb7c8ad2516')
sha256sums_x86_64=('42694f0a7a4b77a7e76ff88fc4e82be3bcd3d35f277f01967546f05ae598f40f')

package() {
  install -Dm655 ${srcdir}/jd-${pkgver} ${pkgdir}/usr/bin/jd
  install -Dm644 LICENSE ${pkgdir}/usr/share/licenses/jd/LICENSE
}
