# Maintainer: Matteo Bonora <bonora.matteo@gmail.com>
pkgname=bootcommander
pkgver=1.13.0
pkgrel=1
pkgdesc="BootCommander is a CLI program for performing firmware updates on a microcontroller that runs the OpenBLT bootloader."
arch=(x86_64)
url="https://www.feaser.com/openblt/doku.php?id=manual:bootcommander"
license=('GPL')
depends=('libopenblt')
makedepends=('cmake')
source=("$pkgname-$pkgver.zip::https://nav.dl.sourceforge.net/project/openblt/OpenBLT%20stable/version%20${pkgver}0/openblt_v0${pkgver//.}0.zip")
md5sums=('08dc23dc326eb4f402746b388c345881')

build() {
  cd "openblt_v0${pkgver//.}0/Host/Source/BootCommander/build"

  cmake ..
  make
}

package() {
  cd "openblt_v0${pkgver//.}0/Host"

  install -D "BootCommander"	  "$pkgdir/usr/bin/BootCommander"
  ln -sf "/usr/bin/BootCommander" "$pkgdir/usr/bin/bootcommander"
}
