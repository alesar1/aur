# Maintainer: Jurriaan Pruis <email@jurriaanpruis.nl>

pkgname=deconz
arch=('x86_64')
pkgver=2.05.28
pkgrel=1
pkgdesc="A generic ZigBee monitoring and control tool"
url="http://www.dresden-elektronik.de"
license=('custom:"Copyright (c) dresden elektronik ingenieurtechnik GmbH"')
groups=()
depends=('hicolor-icon-theme'
         'libcap'
         'libpng'
         'qt5-base'
         'qt5-serialport'
         'qt5-websockets'
         'sqlite')
makedepends=('xz')
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=(https://www.dresden-elektronik.de/deconz/ubuntu/beta/$pkgname-$pkgver-qt5.deb)
noextract=()
sha256sums=(97133c796e7fb9279723b2973cdcdfe94da96ca08e126ac48f95f6e50db9088b)

package() {
  cd "${srcdir}"

  tar -xJf data.tar.xz -C "${pkgdir}"

  # Remove group write permissions from all files/directories
  chmod -R g-w "${pkgdir}"
}
