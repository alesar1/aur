# Maintainer: liberodark

pkgname=mindmapp
pkgver=0.7.12
pkgrel=1
pkgdesc="Desktop application to draw mind maps."
arch=('x86_64')
url="https://mindmapp.org"
license=('MIT')
depends=('xdg-utils')
source_x86_64=("https://github.com/Mindmapp/mindmapp/releases/download/v${pkgver}/Mindmapp-${pkgver}.deb")
source=($pkgname.desktop
        $pkgname.png)
sha512sums=('f8026d4136b75526311e562230decb46eb25b82d797b5580d7d00266cdd2714f75b1dfac543b2b7a1726843f6b322fec55d1c01ce466fc3e020b98e7b36d5cf5'
         '0f1ffadbec65fdea1af40502c204dd12ce9563db457c34140269791df191a4a819de871ec7b299059828d2af6a78c567046f33725af710a8ab2e398d21675ecc')
sha512sums_x86_64=('78fdf55d3ae5acce6942e9e5fdfede07494b5f1c885ab446b0d5e2f2e2aa7d15cb6cc601b9f2b5403bd92a9f1b67fa2c745a1b34cc023d875b38221d87177472')
        
package() {
  cd $srcdir
  tar xvf data.tar.xz
  cp -r opt $pkgdir
  install -vDm644 $srcdir/$pkgname.desktop $pkgdir/usr/share/applications/$pkgname.desktop
  install -vDm644 $srcdir/$pkgname.png $pkgdir/usr/share/pixmaps/$pkgname.png
}

