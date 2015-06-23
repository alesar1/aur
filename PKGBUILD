# Maintainer: Sander Boom <sanderboom@gmail.com>

pkgname=whatsapp-desktop
pkgver=1.1.0
pkgrel=2
pkgdesc="Unofficial WhatsApp for Desktop"
arch=('i686' 'x86_64')
url="http://whatsapp-desktop.com/"
license=('MIT')
depends=('libsystemd' 'desktop-file-utils')
makedepends=('tar')
install='whatsapp-desktop.install'
source_i686=("https://github.com/Aluxian/WhatsApp-Desktop/releases/download/v${pkgver}/UnofficialWhatsApp_linux32.deb")
source_x86_64=("https://github.com/Aluxian/WhatsApp-Desktop/releases/download/v${pkgver}/UnofficialWhatsApp_linux64.deb")
noextract_i686=("UnofficialWhatsApp_linux32.deb")
noextract_x86_64=("UnofficialWhatsApp_linux64.deb")
sha256sums_i686=('2d95b8d669395a81f3315aa397ab809a2aded01537765f47a67bbc087d520382')
sha256sums_x86_64=('d49509aa61e5b1d5dc8eba66ba8333b2d3c700081424778579238998e010583f')
options=(!strip)

prepare() {
    cd "${srcdir}"
    ar x *.deb
}

package() {
    cd "${srcdir}"
    tar -C "${pkgdir}" -xf data.tar.gz
}
