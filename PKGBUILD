# Maintainer: Loewetiger <loewetiger@protonmail.com>

pkgname=obs-pipewire-audio-capture-bin
pkgver=1.0.1
pkgrel=1
pkgdesc='PipeWire audio capturing for OBS Studio'
arch=('x86_64')
url='https://github.com/dimtpap/obs-pipewire-audio-capture'
license=('GPL2')
depends=('pipewire' 'obs-studio>=27')
source=($pkgname-$pkgver.tar.gz::$url/releases/download/$pkgver/linux-pipewire-audio-$pkgver.tar.gz)
md5sums=('f1a9fbaa375efaf10715c3ec352c5180')

package() {
  install -Dm 755 "${srcdir}"/linux-pipewire-audio/bin/64bit/linux-pipewire-audio.so "${pkgdir}"/usr/lib/obs-plugins/linux-pipewire-audio.so
  install -Dm 644 "${srcdir}"/linux-pipewire-audio/data/locale/en-US.ini "${pkgdir}"/usr/share/obs/obs-plugins/linux-pipewire-audio/locale/en-US.ini
}
