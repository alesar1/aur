# Maintainer: Mathias Nedrebø <mathias.nedrebo@zivid.com>

pkgname=zivid-telicam-driver
pkgver='3.0.1.1_3'
pkgrel=1
pkgdesc='Defining the Future of 3D Machine Vision'
arch=('x86_64')
license=('custom')
url=https://www.zivid.com

depends=()
conflicts=(zivid-telicam-sdk)
provides=(zivid-telicam-sdk)

groups=(zivid-all)

source=(https://www.zivid.com/hubfs/softwarefiles/releases/2.3.0+a08763f1-1/u18/zivid-telicam-driver_3.0.1.1-3_amd64.deb)
sha256sums=(2ac4c1aa6638b79d91a740d79cf514c7aef19198ea0750e6996dfa80601a557e)

options=(!strip)

package() {
    bsdtar -xf data.tar.*z -C "${pkgdir}"
}
