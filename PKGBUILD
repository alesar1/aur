# Maintainer: Mathias Nedrebø <mathias.nedrebo@zivid.com>

pkgname=zivid-genicam
pkgver='2.8.0+891708ba_1'
pkgrel=1
pkgdesc='Defining the Future of 3D Machine Vision'
arch=('x86_64')
license=('custom')
url=https://www.zivid.com

depends=(zivid)
conflicts=()
provides=()

groups=(zivid-all)

source=(https://www.zivid.com/hubfs/softwarefiles/releases/2.8.0+891708ba-1/u18/zivid-genicam_2.8.0+891708ba-1_amd64.deb)
sha256sums=(061251ec81b80232dcc79245fcf1498eed25b363c6df553fd7265635e4803df0)

options=(!strip)

package() {
    bsdtar -xf data.tar.*z -C "${pkgdir}"
}
