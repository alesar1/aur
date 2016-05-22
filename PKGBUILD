# Contributor: Hy Goldsher aka hyness <hyness-at-gmail>                
# Maintainer: Hy Goldsher aka hyness <hyness-at-gmail>
pkgname=squirrel-sql
pkgver=3.7.1
pkgrel=1
pkgdesc="A Java SQL client for any JDBC compliant database"
arch=('i686' 'x86_64')
url="http://www.squirrelsql.org/"
license=('GPL')
makedepends=('unzip')
depends=('java-runtime')
arch=('i686' 'x86_64')
source=(http://downloads.sourceforge.net/squirrel-sql/squirrelsql-$pkgver-optional.zip $pkgname $pkgname.desktop)
install=$pkgname.install
md5sums=('13d65b769e6c0dd6b8876a26ecd85d3a'
         '13fcedb38028ddafae5d5d4526dad5a3'
         '14f0b383472e67040112c446cd2dc3d4')
package() {
  _src=$srcdir/squirrelsql-$pkgver-optional

  # Create directories
  install -d $pkgdir/usr/share/java/$pkgname/{icons,lib}

  # Create startup script
  install -Dm755 $srcdir/squirrel-sql $pkgdir/usr/bin/squirrel-sql

  # Install files
  install -Dm755 $srcdir/squirrel-sql $pkgdir/usr/bin/squirrel-sql
  install -m644 $_src/{squirrel-sql.jar,*.properties} $pkgdir/usr/share/java/$pkgname/
  install -m755 $_src/{restore,$pkgname}.sh $pkgdir/usr/share/java/$pkgname/
  install $_src/icons/*.* $pkgdir/usr/share/java/$pkgname/icons/
  install $_src/lib/*.* $pkgdir/usr/share/java/$pkgname/lib/
  cp -a $_src/plugins $pkgdir/usr/share/java/$pkgname/

  # Create desktop and icon
  install -Dm644 $srcdir/$pkgname.desktop $pkgdir/usr/share/applications/$pkgname.desktop
  install -Dm644 $_src/icons/acorn.xpm $pkgdir/usr/share/icons/hicolor/32x32/apps/$pkgname.xpm
}

