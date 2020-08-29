# Contributor: Thaodan <theodorstormgrade@gmail.com>

pkgname=wargus
pkgver=2.4.3
pkgrel=1
pkgdesc="Warcraft2 Mod that allows you to play Warcraft2 with the Stratagus engine"
arch=("i686" "x86_64")
url="https://github.com/WARGUS/WARGUS"
license=('GPL')
depends=( "stratagus=$pkgver" 'ffmpeg2theora' 'cdparanoia' 'timidity++' 'gtk2' 'tolua++' )
makedepends=('cmake')
source=("https://github.com/Wargus/$pkgname/archive/v${pkgver}.tar.gz")
md5sums=('86220e0fbb081c0831db8f92361d20a1')
install=wargus.install

prepare()
{
  mkdir -p build
}
build() {
  cd build
  cmake "$srcdir"/"$pkgname-$pkgver" \
        -DCMAKE_BUILD_TYPE=Release \
	-DCMAKE_INSTALL_PREFIX=/usr \
        -DGAMEDIR=/usr/bin
  make 
}

package()  {
  cd build
  make  DESTDIR=${pkgdir} install
}

