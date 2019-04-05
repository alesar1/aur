# Maintainer: Marcel O'Neil <marcel@marceloneil.com>

pkgname=exodus-eden
pkgver=19.3.29
pkgrel=2
epoch=1
pkgdesc="An unsupported, advanced version of Exodus"
arch=('x86_64')
url="https://exodus.io/eden"
license=('custom')
depends=('gconf' 'gtk2' 'nss' 'libxss' 'glibc>=2.28-4')
source=("https://exodusbin.azureedge.net/releases/eden/exodus-eden-linux-x64-${pkgver//_/-}.zip"
	"${pkgname}.svg"
	"${pkgname}.desktop"
        "LICENSE")
sha256sums=('21086a20d2d7e9139938f2834d34fd8b9e5c3da218153f77cac8ed823aa80d23'
            '231eacce811bdbbf5ffbee3c677ed53df7ed41024af49c757d2f866159180031'
            '820c6de206ffdd5882f26a8b7d5a2720d0b2df6f9fe62d31aa3a9aaefb9b6322'
            '582d6782c9412cd961c55d105f38ed5c911bf8509be040b8d23a836504a25d0b')

package() {
  cd $srcdir/ExodusEden-linux-x64

  install -d $pkgdir/{opt/$pkgname,usr/bin}
  cp -a * $pkgdir/opt/$pkgname
  rm $pkgdir/opt/$pkgname/{LICENSE*,version}
  ln -s /opt/$pkgname/ExodusEden $pkgdir/usr/bin/$pkgname
  
  # Launcher
  install -Dm644 $srcdir/$pkgname.desktop $pkgdir/usr/share/applications/$pkgname.desktop

  # Icons
  install -Dm644 $srcdir/$pkgname.svg \
                 $pkgdir/usr/share/icons/hicolor/scalable/apps/$pkgname.svg

  # License
  install -Dm644 $srcdir/LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

  chmod -R ugo+rX $pkgdir/opt
}
