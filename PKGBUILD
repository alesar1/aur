# Maintainer: AudioLinux  audiolinux@fastmail.fm

pkgname=hqplayer-pro
_debpkgver=4.19.1-32
pkgver=4.19.1
pkgrel=1
pkgdesc="Professional high-end audio file converter, recorder and player"
arch=('x86_64')
url="https://www.signalyst.com/professional.html"
license=('custom')
depends=('alsa-lib' 'glibc' 'flac' 'libx11' 'gcc-libs' 'qt5-base' 'qt5-script' 'qt5-quickcontrols' 'qt5-charts' 'wavpack')
optdepends=('evince: hqplayer manual reading')
source=("http://www.signalyst.com/bins/hqplayer4pro_"$_debpkgver"_amd64.deb")
sha256sums=('8278e463297424bec30a384e11176fd294ff7336868b980b5f4ccb0e7f73262d')

package() {
 cd "$srcdir"
 bsdtar xf data.tar.xz -C "$pkgdir"
 rm -rf "$pkgdir/usr/share/doc-base"
 install -Dm644 "$pkgdir/usr/share/doc/hqplayer4pro/copyright" "$pkgdir/usr/share/licenses/$pkgname/COPYING"
 rm -f "$pkgdir/usr/share/doc/hqplayer4pro/copyright"
}
