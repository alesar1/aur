## Maintainer: AudioLinux  <audiolinux AT fastmail DOT fm>

pkgname=hqplayer-embedded
_debpkgver=3.9.0-24_amd64
pkgver=3.9.0
pkgrel=1
pkgdesc="Signalyst HQPlayer Embedded
 HQPlayer - the high-end upsampling multichannel software HD-audio player"
arch=('x86_64')
url="http://www.signalyst.com/custom.html"
license=('custom')
depends=('alsa-lib' 'glibc' 'flac' 'gcc-libs' 'libgmpris' 'glib2')
optdepends=('rygel: for network access with upnp' 'minimserver: UPnP Audio server')
source=("http://www2.signalyst.com/bins/hqplayerd/hqplayerd_$_debpkgver.deb" 'copyright' 'hqplayerd.service' 'start_hqplayerd.sh')
sha256sums=('6007ed7f2f49d8687501f435bfdf47554c4fef2300cbaa19328b424cded718d3' '6a2b4e567010645f8a9ecabf5c69d9a8fc47f4a30eafcdc463b4d524fbfe3b7f' 'ea4ea071b29bbbfce2223a0b8bbe7d62e3ac648af8f57ef49928381000bd82ea'
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