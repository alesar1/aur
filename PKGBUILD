# Maintainer: bzt <unmacaque at gmail.com>

pkgname=dbgl
pkgver=0.91
pkgrel=1
pkgdesc="An open-source, free, multi-platform frontend for DOSBox"
arch=('x86_64')
url="http://members.quicknet.nl/blankendaalr/dbgl/"
license=('GPL')
depends=('java-runtime>=8' 'gtk2')
optdepends=('dosbox: necessary to run DOS games')
source=("http://members.quicknet.nl/blankendaalr/dbgl/download/${pkgname}091.tar.gz"
        dbgl.desktop
        dbgl.sh)
sha256sums=('c05d85b288f97e9d6659e8b76281e634f98dd5d6655623418d1df8df59396a4c'
            '7da06d297b5cbdbc1029c58ffe1c6643ae0fa3fe597e839b26d03ff3900de00d'
            'ec0f5d86d8a76b9ec2ee60e3e28b8ad5008df70eb86e28575b75dd0d2b1fd509')

package() {
  cd "$srcdir"

  install -dm755 "$pkgdir/usr/share/java/$pkgname"
  install -m755 dbgl "$pkgdir/usr/share/java/$pkgname"
  install -m644 COPYING \
    dbgl.jar \
    dbgl.png \
    "$pkgdir/usr/share/java/$pkgname"

  for dir in captures db dosroot export lib profiles templates xsl; do
    mv "$dir" "$pkgdir/usr/share/java/$pkgname"/
  done

  install -dm755 "$pkgdir"/usr/bin
  install -m755 dbgl.sh "$pkgdir"/usr/bin/dbgl

  install -dm755 "$pkgdir"/usr/share/icons/hicolor/256x256/apps
  install -m644 dbgl.png "$pkgdir"/usr/share/icons/hicolor/256x256/apps

  install -dm755 "$pkgdir"/usr/share/applications
  install -m644 dbgl.desktop "$pkgdir"/usr/share/applications

  install -dm755 "$pkgdir/usr/share/licenses/$pkgname"
  install -m644 COPYING "$pkgdir/usr/share/licenses/$pkgname"
}
