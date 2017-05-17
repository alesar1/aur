# Maintainer: Tomasz Morawski (Kerrex) <romen3@linux.pl>

pkgname=zezenia
pkgver=590
pkgrel=1
pkgdesc="Zezenia Online is an actively developed free-to-play 2D MMORPG."
arch=('i686' 'x86_64')
url=http://zezeniaonline.com/
license=(custom)
makedepend=('unzip')
install=$pkgname.install
provides=($pkgname)
noextract=("$pkgname"_"$pkgver"_linux.zip)
source=(https://s3-eu-west-1.amazonaws.com/zezeniamedia/client/"$pkgname"_"$pkgver"_linux.zip)
md5sums=(229d4148ff955099c22517d5a8fba333)

build()
{
  cd $srcdir
  unzip "$pkgname"_"$pkgver"_linux.zip
}
package()
{
  mkdir -p $pkgdir/opt/Zezenia
  rm "$pkgname"_"$pkgver"_linux.zip
  cp -R $srcdir/* $pkgdir/opt/Zezenia/
  chown -R :games $pkgdir/opt/Zezenia
  chmod -R 774 $pkgdir/opt/Zezenia
}
