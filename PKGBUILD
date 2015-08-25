# Maintainer: Evan Teitelman <teitelmanevan@gmail.com>
# Contributor: Pranay Kanwar <pranay.kanwar@gamil.com>

pkgname=sipcrack
pkgver=0.2
pkgrel=1
pkgdesc="SIPcrack is a SIP protocol login cracker."
license=(custom)
url="http://www.remote-exploit.org/codes_sipcrack.html"
arch=(i686 x86_64)

source=(http://ftp.de.debian.org/debian/pool/main/s/sipcrack/${pkgname}_${pkgver}.orig.tar.gz
        LICENSE)
md5sums=('b9096c8d537fc231c7d74b759831a4c7'
         '80f9899bc5977147c1a18108e7d39339')

build() {
  cd $srcdir/sipcrack-$pkgver
  make || return 1
}

package() {
  cd $srcdir/sipcrack-$pkgver
  install -D -m755 sipcrack $pkgdir/usr/bin/sipcrack
  install -D -m755 sipdump  $pkgdir/usr/bin/sipdump
  install -D -m644 $srcdir/LICENSE $pkgdir/usr/share/licenses/$pkgname/LICENSE
}
