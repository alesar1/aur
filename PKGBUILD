# Maintainer: Marcel O'Neil <marcel@marceloneil.com>

pkgname=exodus
pkgver=1.25.1
pkgrel=1
pkgdesc="All-in-one app to secure, manage and exchange blockchain assets"
arch=('x86_64')
url="https://exodus.io"
license=('custom:"Copyright © 2016 Exodus"')
depends=('gconf' 'gtk2' 'nss' 'libxss')
source=("https://exodusbin.azureedge.net/releases/Exodus-linux-x64-${pkgver}.zip"
	"http://marceloneil.com/exodus-icons/icons.zip"
	"${pkgname}.desktop")
sha256sums=('c8a597c23046b3fe7a50bfcc9762df73538584ded5e7a365aac7de7c441583e1'
            '5f3da3a79fea80477f38e698a2ea1723320f4b3fc90bf7d615dab12af0d34c1a'
            '04676d81272a35a91150a7eec4640e69ca50f2e479d29fad8be90160ee74122c')

package() {
  cd $srcdir/exodus-$pkgver/Exodus-linux-x64

  install -d $pkgdir/{opt/$pkgname,usr/bin}
  cp -a * $pkgdir/opt/$pkgname
  rm $pkgdir/opt/$pkgname/{LICENSE*,version}
  ln -s /opt/$pkgname/Exodus $pkgdir/usr/bin/$pkgname
  
  # Launcher
  install -Dm644 $srcdir/$pkgname.desktop $pkgdir/usr/share/applications/$pkgname.desktop

  #Icons
  for i in 16x16 32x32 128x128 256x256 512x512; do
    install -Dm644 $srcdir/icons/icon_$i.png \
		   $pkgdir/usr/share/icons/hicolor/$i/apps/exodus.png
  done
  chmod -R ugo+rX $pkgdir/opt
}
