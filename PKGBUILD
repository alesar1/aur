# Maintainer: Schorsch <wsixcde+aur at gmail dot com>
# Thanks to <mti at tillenius dot com> whose packages the ps7b packages were based on
pkgname=ps7b_libpicoipp
pkgver=1.4.0_4r133
pkgrel=1
pkgdesc="Library for Pico Technology PicoScope 7 Beta Oscilloscope Software"
arch=('x86_64')
url="https://labs.picotech.com/rc/picoscope7/debian/pool/main/libp/libpicoipp/"
license=('custom')
groups=()
depends=(gcc-libs)
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=(!strip)
install=
changelog=
source=("https://labs.picotech.com/rc/picoscope7/debian/pool/main/libp/libpicoipp/libpicoipp_${pkgver//_/-}_amd64.deb")
md5sums=('aa22a84cb99c8ab59367811ba3dfd725')

package() {
  tar -xf data.tar.xz -C "${pkgdir}"
  chmod -R go-w $pkgdir
  chown -R root:root $pkgdir
}
