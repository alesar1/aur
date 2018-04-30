# Maintainer: liberodark

pkgname=open-jardin
pkgver=1.03
pkgrel=2
pkgdesc="A garden management"
arch=('x86_64')
url="https://openjardin.eu/"
license=('GPL-v3')
depends=('xdg-utils')
source_x86_64=("https://openjardin.eu/download/open-jardin_${pkgver}_amd64.deb")
source=($pkgname.desktop
        $pkgname.png)
sha512sums=('1caee7197210b191657cc50d421ce50e5c926917139beaf003cdbaad7970bd7d6a88263c962b3d810a7ce12ef2df662a4c71ab17e23d4ba953141231cc58418a'
         '798bab296302facf5597a71d2f038de89417c0e99c63d891e6f03cafa1758bb993c762942b29b8f1caf3787d0553d15deb612f7a756ea6faef4e2348f08230e2')
sha512sums_x86_64=('a7f2bc66b11ee618e6b02087cd36ec07fe803f565421361619972e869f7c7d3886e35a7b0059fa51eda725a96cb084fbcd7e2b98cf91d1cc717af87191a5dc1a')
        
package() {
  cd $srcdir
  tar xvf data.tar.xz
  cp -r usr $pkgdir
  rm $pkgdir/usr/share/openjardin/champ.png
  rm $pkgdir/usr/share/applications/*.desktop
  install -vDm644 $srcdir/$pkgname.desktop $pkgdir/usr/share/applications/$pkgname.desktop
  install -vDm644 $srcdir/$pkgname.png $pkgdir/usr/share/pixmaps/$pkgname.png
}