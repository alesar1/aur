# Maintainer: liberodark

pkgname=keeper-password-manager
pkgver=11.5.7
pkgrel=1
pkgdesc="Keeper is the world's #1 most downloaded password keeper and secure digital vault for protecting and managing your passwords."
arch=('x86_64')
url="https://keepersecurity.com"
license=('Custom')
depends=('xdg-utils')
source_x86_64=("https://keepersecurity.com/desktop_electron/Linux/repo/deb/keeperpasswordmanager_${pkgver}_amd64.deb")
source=($pkgname.desktop
        $pkgname.png)
sha512sums=('2f342f212fca342211adf90e633d557f8619b6737e3652cbb5f6f01e2875d22cf2799b21447e9bef4b3ef81d85407b8ee41937e5b10d577a8d8139813f36f941'
         '03db6ce057c53dacb4f242c131f4f5f599a4b79aa834a9555aa58216084f25c1bd5850968b7a80a5887dec23103df84694f3bbd0718e8fe49d0152f86a1ddc5d')
sha512sums_x86_64=('bc421d027dedfe5e96fe59baa0284a1dad27831734fd46ed3f7aa5d290fe645eee58ffccb463f45a753731284c0c628f19c4561249910c5abcbc1df5d6d086f6')
        
package() {
  cd $srcdir
  tar xpvf data.tar.xz
  cp -r usr $pkgdir
  install -vDm644 $srcdir/$pkgname.desktop $pkgdir/usr/share/applications/$pkgname.desktop
  install -vDm644 $srcdir/$pkgname.png $pkgdir/usr/share/pixmaps/$pkgname.png
}
