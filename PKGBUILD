# Contributor: Tim Schumacher <timschumi@gmx.de>
# Contributor: David Vilar <davvil@gmail.com>
pkgname=vassal
pkgver=3.5.8
pkgrel=2
pkgdesc="Game engine for building and playing online adaptations of board games and card games."
arch=('i686' 'x86_64')
url="http://www.vassalengine.org/"
license=('LGPL')
depends=('java-runtime>=11')
source=(https://github.com/vassalengine/vassal/releases/download/${pkgver}/VASSAL-${pkgver}-linux.tar.bz2
        VASSAL-256x256.png
        vassal.sh
        vassal.desktop)
noextract=()
md5sums=('bfe7fa525c7a53f3ac041daeeb2727d0'
         '4a4ec11bdbd7dbbf56e6f1d533f69a7e'
         'SKIP'
         'SKIP')
build() {
  true
}

package() {
  cd "$srcdir/VASSAL-$pkgver"
  destdir=$pkgdir/usr/share/java/$pkgname

  mkdir -p $destdir

  cp -r doc lib $destdir

  mkdir -p $pkgdir/usr/bin
  install -Dm755 ${srcdir}/vassal.sh $pkgdir/usr/bin/vassal
  chmod a+x $pkgdir/usr/bin/vassal

  mkdir -p $destdir/images
  cp $srcdir/VASSAL-256x256.png $destdir/images

  mkdir -p $pkgdir/usr/share/applications

  install -Dm644 ${srcdir}/vassal.desktop $pkgdir/usr/share/applications/vassal.desktop
}

# vim:set ts=2 sw=2 et:
