# Author: Syed Adnan Kamili <adnan.kamili AT gmail D0T com>
# Maintainer: Marc Rozanc <marc AT rozanc D0T fr>

pkgname=flareget
_rel=4.6
_subrel=104
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
sha256sums_i686=("6b1cba7c86099663c7e74592242ad27b1852427e7b3aa795bef8680926617cae")
sha256sums_x86_64=("ba2ad01d8ed625e5779b9a2e974f5b8fb91c040b8bc976294798240d534d4e2c")

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

