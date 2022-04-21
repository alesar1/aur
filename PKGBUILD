# Maintainer: AudioLinux  <audiolinux AT fastmail DOT fm>

pkgname=hqplayer4
pkgver=4.18.1
_rpmpkgver=4.18.1-55
pkgrel=5
pkgdesc="The high-end upsampling multichannel software HD-audio player"
arch=('x86_64')
url="http://www.signalyst.com/consumer.html"
license=('custom')
depends=('glibc' 'gcc-libs' 'libx11' 'libusb-compat' 'openmp' 'qt5-base' 'qt5-webengine' 'qt5-script' 'qt5-quickcontrols' 'qt5-quickcontrols2' 'qt5-svg' 'qt5-declarative' 'qt5-graphicaleffects' 'qt5-charts' 'libmicrohttpd' 'alsa-lib' 'flac' 'wavpack' 'mpg123')
optdepends=('evince: hqplayer manual reading')
conflicts=('hqplayer-embedded-amd' 'hqplayer-embedded')
source=("https://www.signalyst.eu/bins/hqplayer/fc35/hqplayer4desktop-$_rpmpkgver.fc35.x86_64.rpm")
sha256sums=('e5f8f339c46764d61dc4e4642de61bf839ae433c8daa5b74914cb98812d2323f')
options=(!strip)

package() {
bsdtar xf hqplayer4desktop-"$_rpmpkgver".fc35.x86_64.rpm -C "$pkgdir"
rm -rf /usr/lib/build-id
install -Dm644 "$pkgdir/usr/share/doc/hqplayer4desktop/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/COPYING"
rm "$pkgdir/usr/share/doc/hqplayer4desktop/LICENSE"
cp "$pkgdir"/opt/hqplayer4desktop/lib/* "$pkgdir"/usr/lib/
rm -rf "$pkgdir/opt"
}
