# Maintainer:  Maxime Poulin <maxpoulin64@gmail.com>
# Contributor: Jan Hrdina <jan.hrdka@gmail.com>
# Contributor: Gabriel B. Casella <gbc921@gmail.com>
pkgname=soundwire
pkgver=2.1
pkgrel=2
pkgdesc="Wirelessly transmit any audio from your PC to your Android phone or other PCs"
url="http://georgielabs.net"
arch=('x86_64' 'i686')
license=('custom')
depends=('portaudio' 'qt4' 'curl')
optdepends=('pavucontrol')
install='soundwire.install'

source_i686=("http://georgielabs.altervista.org/SoundWire_Server_linux32.tar.gz")
md5sums_i686=('b8b67ebbd8ad1b9591fcd98a0388a5a1')

source_x86_64=("http://georgielabs.altervista.org/SoundWire_Server_linux64.tar.gz")
md5sums_x86_64=('032210e672b7500226361f2d3f4f7057')

package() {
  cd "${srcdir}/SoundWireServer"

  sed -i 's/sw-icon.xpm/soundwire/' SoundWire-Server.desktop

  install -Dm644 license.txt "$pkgdir/usr/share/doc/$pkgname/license.txt"
  install -Dm644 opus_license.txt "$pkgdir/usr/share/doc/$pkgname/opus_license.txt"
  install -Dm644 README.txt "$pkgdir/usr/share/doc/$pkgname/README.txt"
  install -Dm644 sw-icon.xpm "$pkgdir/usr/share/icons/hicolor/256x256/apps/$pkgname.xpm"
  install -Dm644 SoundWire-Server.desktop "$pkgdir/usr/share/applications/$pkgname.desktop"
  install -D SoundWireServer "$pkgdir/usr/bin/SoundWireServer"
}
# vim:set ts=2 sw=2 et:
