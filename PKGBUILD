# Maintainer: duzda <duzda666@gmail.com>

pkgname=deezer-enhanced-bin
_pkgname=deezer-enhanced
pkgver=0.1.0
pkgrel=1
pkgdesc='An unofficial application for Deezer with enhanced features, that is not just an electron wrapper.'
arch=('x86_64')
url="https://github.com/duzda/deezer-enhanced"
license=('MIT')
depends=('c-ares' 'ffmpeg' 'gtk3' 'http-parser' 'libevent' 'libvpx' 'libxslt' 'libxss' 'minizip' 'nss' 're2' 'snappy' 'libnotify' 'libappindicator-gtk3')
provides=('deezer-enhanced')
conflicts=('deezer-enhanced')
source=("$url/releases/download/v$pkgver/$_pkgname-$pkgver.pacman")
sha256sums=(ba6489464d6fc1ae8d409d9082808c84b556cfeee7ed38d8ad5d75f158bc62cb)

package() {
  # Main program
  install -d "${pkgdir}/opt"
  cp -r opt "${pkgdir}"

  # Desktop icon + icons
  install -dm755 "${pkgdir}/usr/"
  cp -r usr "${pkgdir}"
}