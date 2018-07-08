# Maintainer: Oirio Joshi <joshirio@protonmail.com>
# Author: Vladimir Yakovlev <desktop-app@protonmail.ch>
pkgname=email-securely-app-bin
pkgver=1.0.0
pkgrel=1
pkgdesc="Unofficial desktop app for several E2E encrypted email providers"
arch=('x86_64')
url="https://github.com/vladimiry/email-securely-app"
license=('MIT')
depends=('c-ares' 'ffmpeg' 'gtk3' 'http-parser' 'libevent' 'libvpx' 'libxslt' 'libxss' 'minizip' 'nss' 're2' 'snappy' 'libnotify' 'libappindicator-gtk2' 'libappindicator-gtk3' 'gconf' 'gnome-keyring')
install="${pkgname}.install"
source=("https://github.com/vladimiry/email-securely-app/releases/download/v${pkgver}/email-securely-app-${pkgver}-linux.pacman" 'LICENSE')
md5sums=('9c831d596f4aef6ea1e5473343342823' 'fc680045f40b19ce3c3e771aeb08bbd3')

package() {
  cd "$srcdir"
  
  cp -R "${srcdir}/usr/" "${pkgdir}/usr/"
  cp -R "${srcdir}/opt/" "${pkgdir}/opt/"

  # License
  install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

