## Maintainer: AudioLinux  <audiolinux AT fastmail DOT fm>

pkgname=hqplayer-embedded
_debpkgver=3.7.1-20_amd64
pkgver=3.7.1
pkgrel=1
pkgdesc="Signalyst HQPlayer Embedded
 HQPlayer - the high-end upsampling multichannel software HD-audio player"
arch=('x86_64')
url="http://www.signalyst.com/custom.html"
license=('custom')
depends=('alsa-lib' 'glibc' 'flac' 'gcc-libs' 'libgmpris' 'glib2')
optdepends=('rygel: for network access with upnp' 'minimserver: UPnP Audio server')
source=("http://www2.signalyst.com/bins/hqplayerd/hqplayerd_$_debpkgver.deb" 'copyright' 'hqplayerd.service' 'start_hqplayerd.sh')
sha256sums=('f71e75d6c6063ca4bc7d7bf3a0bb3d3be3a79f17751ab6ffebdf32ce39e3030f' '3f3295916908afbf195993b163d7dc98696dddbc7b2f6574aab9605046dda2c7' 'ea4ea071b29bbbfce2223a0b8bbe7d62e3ac648af8f57ef49928381000bd82ea'
'2c1a93ea66e59a7eee1b76fc70816bb9f6169b155eb42b390ecddb4b38b31ca5')

package() {
 cd "$srcdir"
  bsdtar xf data.tar.xz -C "$pkgdir"
  install -Dm644 "copyright" \
    "$pkgdir/usr/share/licenses/$pkgname/COPYING"
  install -Dm644 "hqplayerd.service" \
    "$pkgdir/usr/lib/systemd/user/hqplayerd.service"
  install -Dm755 "start_hqplayerd.sh" \
    "$pkgdir/usr/bin/start_hqplayerd.sh"
}