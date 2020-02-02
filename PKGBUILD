# Maintainer: robertfoster

pkgname=mars-mips
pkgver=4.5
_ver=${pkgver%.*}_${pkgver#*.}
pkgrel=5
pkgdesc="An IDE for programming in MIPS assembly language intended for educational-level use"
arch=('any')
url="http://courses.missouristate.edu/KenVollmar/MARS/index.htm"
license=('MIT')
depends=('java-runtime')
noextract=("Mars${_ver}.jar")
install="${pkgname}.install"
source=(http://courses.missouristate.edu/KenVollmar/MARS/MARS_${_ver}_Aug2014/Mars${_ver}.jar
    $pkgname.sh
    $pkgname.svg
$pkgname.desktop)

package() {
    mkdir -p $pkgdir/usr/share/java/$pkgname
    cp $srcdir/*.jar $pkgdir/usr/share/java/$pkgname/Mars.jar
    install -Dm755 $srcdir/$pkgname.sh "$pkgdir"/usr/bin/$pkgname
    install -Dm644 $srcdir/$pkgname.svg "$pkgdir"/usr/share/pixmaps/$pkgname.svg
    install -Dm644 $srcdir/$pkgname.desktop "$pkgdir"/usr/share/applications/$pkgname.desktop
}

md5sums=('4709fae736e6c9d4078ea4b21e0be1e9'
         '8cec3648a041c8d5566109f66dc58cb8'
         'a0ecbc5271020cddb0c81bc32524734b'
         'e5dd4f170d32badc2e1fd3e2e27402b8')
