# Messed by FabioLolix :/ loli_fabio@protonmail.com
# https://github.com/FabioLolix
# Contributor: Bernhard Landauer <oberon@manjaro.org>

_pkgname=Neobarok
pkgname=${_pkgname,,}
pkgver=1.0.1
pkgrel=1
pkgdesc="3D modeling software aimed at artists and users of all levels"
arch=('x86_64')
url="http://$pkgname.com"
license=('custom')
depends=('qt5-base' 'sfml')
source=("http://$pkgname.com/$_pkgname-$pkgver-linux.zip"
        "$pkgname.desktop"
        "$pkgname.svg")
md5sums=('d9cadc75ea151be790bfa982c1735672'
         '9dd13b4f7ad294e6ae639369cea6a1bd'
         '9e447434129fae9d99eeada08ac7d1f3')

package() {
  install -dm755 $pkgdir/opt
  cp -r $_pkgname $pkgdir/opt
  
  install -Dm644 $pkgname.svg $pkgdir/usr/share/icons/hicolor/scalable/apps/$pkgname.svg
  install -Dm644 $pkgname.desktop $pkgdir/usr/share/applications/$pkgname.desktop
  
  install -dm755 $pkgdir/usr/bin
  ln -s /opt/$_pkgname/Bin/$_pkgname $pkgdir/usr/bin/$pkgname
  ln -s /opt/$_pkgname/Bin/$_pkgname $pkgdir/usr/bin/$_pkgname
  install -dm755 $pkgdir/usr/lib
  ln -s /usr/lib/libsfml-window.so.2.4 "${pkgdir}"/usr/lib/libsfml-window.so.2.3
}
