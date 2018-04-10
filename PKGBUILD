# Author: Syed Adnan Kamili <adnan.kamili AT gmail D0T com>
# Maintainer: Marc Rozanc <marc AT rozanc D0T fr>

pkgname=flareget
_rel=4.7
_subrel=106
pkgver=${_rel}.${_subrel}
pkgrel=1
pkgdesc="A full featured, advanced, multi-threaded, multisegment download manager and accelerator."
arch=('i686' 'x86_64')
url="http://flareget.com"
license=('custom')
depends=('glibc>=2.13' 'qt4>=4.8.1' 'libmetalink' 'curl')
install=${pkgname}.install
backup=('etc/opt/chrome/native-messaging-hosts/com.flareget.flareget.json'
        'etc/chromium/native-messaging-hosts/com.flareget.flareget.json')
source_i686=("https://flareget.com/downloads/files/flareget/rpm/i386/${pkgname}-${_rel}-${_subrel}.i386.rpm")
source_x86_64=("https://flareget.com/downloads/files/flareget/rpm/amd64/${pkgname}-${_rel}-${_subrel}.x86_64.rpm")
sha256sums_i686=("7368ef73d71cc76b554a03e4562b9c2ae6fe341966012eb5a79357b5bdce5480")
sha256sums_x86_64=("82eea01ac4754bf14d6ffec7ed8216c5df605fa3b1861a8c69dde95ddf9990c1")

package() {
    cd $srcdir
    cp -ra usr $pkgdir/usr
    cp -ra etc $pkgdir/etc
    [[ -d $pkgdir/usr/lib64 ]] && mv $pkgdir/usr/lib64 $pkgdir/usr/lib
    chmod 0755 $pkgdir/usr/bin/flareget
    chmod 0755 $pkgdir/usr/bin/flareget-chrome-host
    
    # License
    mkdir -p $pkgdir/usr/share/licenses/$pkgname
    mv $pkgdir/usr/share/doc/$pkgname/COPYING $pkgdir/usr/share/licenses/$pkgname/LICENSE
}

