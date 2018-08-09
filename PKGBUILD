# Maintainer: liberodark

pkgname=qbackup
pkgver=1.10.0.0
pkgrel=1
pkgdesc="Cross-platform file backup"
arch=('x86_64')
url="https://www.qualeed.com/en/qbackup/"
license=('custom')
depends=('xdg-utils' 'jre8-openjdk')
source_x86_64=("https://storage-dag.iijgio.com/qualeed/downloads/qbackup/qBackup-${pkgver}.tar.gz")
source=($pkgname.desktop
        $pkgname.png)
sha512sums=('5342925f154bd4bf3d2dc415ccdce55a7e7381ed83744f47d1ea17e7dd3c82536f541b5e7f820f79795d7c4257f5923d8529654eb01c644bfe22acef63da5802'
         'a7020dc7a82e32827c3da5f67e6c3fbf6d79c8ac075fdbabaebe947b2da78105bb3fe309eae8aa0f3b679458a7dbcf2f6f2a1faf4181db9d207235b228602c24')
sha512sums_x86_64=('dae3603fffa85ed244677cfe58eb05817c2222fb68130ed63c9f646399b449d42d0cc4a3c6523b88583b084c23a3b1044c46a88edd01cbe0690fb95d565ed8f1')
        
package() {
  cd $srcdir
  tar xvf qBackup-${pkgver}.tar.gz
  mkdir -p "$pkgdir/opt/qbackup/"
  cp -r "qBackup/." "$pkgdir/opt/qbackup/"
  install -vDm644 $srcdir/$pkgname.desktop $pkgdir/usr/share/applications/$pkgname.desktop
  install -vDm644 $srcdir/$pkgname.png $pkgdir/usr/share/pixmaps/$pkgname.png
}