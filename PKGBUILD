# Maintainer: AudioLinux  <audiolinux AT fastmail DOT fm>

pkgname=hqplayer-pro
_debpkgver=4.11.1-18
pkgver=4.11.1
pkgrel=1
pkgdesc="Professional high-end audio file converter, recorder and player"
arch=('x86_64')
url="https://www.signalyst.com/professional.html"
license=('custom')
depends=('alsa-lib' 'glibc' 'flac' 'libx11' 'gcc-libs' 'qt5-base' 'qt5-script' 'qt5-quickcontrols' 'qt5-charts' 'wavpack')
optdepends=('evince: hqplayer manual reading')
source=("http://www.signalyst.com/bins/hqplayer4pro_"$_debpkgver"_amd64.deb")
sha256sums=('9583946575da796fbd67648a9a75cd0a1845e5518c9e2bf5f2ec3642800ed4fc')

package() {
 cd "$srcdir"
  bsdtar xf data.tar.xz -C "$pkgdir"
 rm -rf "$pkgdir/usr/share/doc-base"
 install -Dm644 "$pkgdir/usr/share/doc/hqplayer4pro/copyright" "$pkgdir/usr/share/licenses/$pkgname/COPYING"
 rm -f "$pkgdir/usr/share/doc/hqplayer4pro/copyright"
}
