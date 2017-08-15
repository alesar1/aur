# By MBC (Matteo's Basic Computing)
# Maintainer : Matteo Rossillol <mbasiccomputing@gmail.com>


_CompName=zfw-module-330r2
pkgname=zfw-module
pkgver=3.3.0
pkgrel=2
arch=('x86_64')
pkgdesc="It's a module for calculate a aircraft's Z.F.W." 
url="https://github.com/CompFile/My_AUR_PKG/tree/master/Sources/$pkgname/$pkgname-$pkgver.r$pkgrel"
license=('GPL3')
groups=('MBC')
depends=('qt5-base')
makedepends=('gcc' 'qt5-base')
validpgpkeys=('94832C0DBAC3B295A91C5F4081D2921276951309')
source=("https://github.com/CompFile/My_AUR_PKG/raw/master/PKG/$pkgname/$pkgname-$pkgver.r$pkgrel.tar.gz"{,.sig})
md5sums=('9d3ff27f7dc244d3c6c246d78261549c'
         'SKIP')


build()
{
    cd "$srcdir/$pkgname-$pkgver.r$pkgrel"
    qmake
    make
}

package()
{
    install -d $pkgdir/usr/share/pixmaps
    install -d $pkgdir/usr/bin
    install -d $pkgdir/usr/share/applications
    install -d $pkgdir/usr/share/zfw-module
    cd "$srcdir/$pkgname-$pkgver.r$pkgrel"
    install -m755 -s $_CompName $pkgdir/usr/bin/zfw-module
    install -m644 _Install/_Desktop/zfw-module.png $pkgdir/usr/share/pixmaps
    install -m644 _Install/_Desktop/zfw-module.desktop $pkgdir/usr/share/applications
    install -m644 _Install/_Share/* $pkgdir/usr/share/zfw-module
}
