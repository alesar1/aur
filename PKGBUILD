# Maintainer:  Ilya Chelyadin <ilya77105@gmail.com>

pkgname=kyocera-ppd-git
pkgver=1
pkgrel=1
pkgdesc='PPD files for Kyocera FS printers'
arch=('i686' 'x86_64')
url="https://github.com/mnorin/kyocera-ppd-installer.git"
license=('GPL 2.0')
depends=('cups')
makedepends=('git')
source=('git+https://github.com/mnorin/kyocera-ppd-installer.git')
sha256sums=('SKIP')

package(){
  cd "$srcdir"
  
  mkdir -p "$pkgdir/usr/share/cups/model/Kyocera"
  install -m 0644 kyocera-ppd-installer/*.ppd "$pkgdir/usr/share/cups/model/Kyocera"
  BITS=$(getconf LONG_BIT)
  
  install -D -m 0755 kyocera-ppd-installer/rastertokpsl_$BITS "$pkgdir/usr/lib/cups/filter/rastertokpsl-bin"
  install -D -m 0755 kyocera-ppd-installer/rastertokpsl_wrapper "$pkgdir/usr/lib/cups/filter/rastertokpsl"

  }
