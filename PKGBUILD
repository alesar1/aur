pkgname=kos32-sdk-bin
groups=('kos32-dev')
pkgver=0.4
pkgrel=1
pkgdesc="SDK for Kolibri OS + Toolchain by Serge."
url="http://board.kolibrios.org/viewtopic.php?t=3540"
arch=('x86_64')
license=('GPLv3')
depends=('gcc')
conflicts=('kos32-sdk' 'fasm' 'sasm')
source=("https://github.com/turbocat2001/kos32-sdk-linux/releases/download/${pkgver}-deb/kos32-sdk-${pkgver}.deb")
md5sums=('SKIP')
options=('!strip')


package() {
     cd $pkgdir
     tar -xf $srcdir/data.tar.xz
}
