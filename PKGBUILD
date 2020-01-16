# Maintainer: Jakob Gahde <j5lx@fmail.co.uk>

pkgname=ausweisapp2
pkgver=1.20.0
pkgrel=1
pkgdesc="A software application that you install on your computer to use your national identity card or your electronic residence permit for online identification"
arch=('i686' 'x86_64')
license=('custom:EUPL1.2')
url="https://www.ausweisapp.bund.de/"
depends=('qt5-declarative' 'qt5-graphicaleffects' 'qt5-quickcontrols2' 'qt5-svg' 'qt5-websockets' 'pcsclite' 'http-parser')
makedepends=('cmake' 'qt5-tools')
optdepends=('ccid' 'acsccid' 'pcsc-cyberjack')
source=("https://github.com/Governikus/AusweisApp2/releases/download/${pkgver}/AusweisApp2-${pkgver}.tar.gz"{,.asc})
validpgpkeys=('699BF3055B0A49224EFDE7C72D7479A531451088')
sha256sums=('8289678d19e2c4d5845afd7a516d645f78d8e0a09f857a8d5cc1037569d2e807'
            'SKIP')

build() {
  mkdir -p "${srcdir}/Build"

  cd "${srcdir}/Build"
  cmake -DCMAKE_BUILD_TYPE=RELEASE -DCMAKE_INSTALL_PREFIX=/usr "${srcdir}/AusweisApp2-${pkgver}"
  make
}

package() {
  cd "${srcdir}/Build"

  make DESTDIR="${pkgdir}" install
  install -Dm644 "${srcdir}/AusweisApp2-${pkgver}/LICENSE.txt" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE.txt"
}
