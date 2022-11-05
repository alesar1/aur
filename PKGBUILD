#Maintainer: Jay Ta'ala <jay@jaytaala.com>
#Contributor: Ekin Dursun <ekindursun@gmail.com>
#Contributor: danyf90 <daniele.formichelli@gmail.com>
#Contributor: syncrtl64 <syncrtl64@gmail.com>
#Contributor: Andrea Cattaneo <andrea.cattaneo.dev@gmail.com>

pkgname=genymotion
pkgver=3.3.1
pkgrel=1
pkgdesc="Complete set of tools that provides a virtual environment for Android."
arch=('x86_64')
url="http://www.genymotion.com/"
depends=('libpng' 'net-tools' 'protobuf' 'qca-qt5' 'qt5-script' 'qt5-webkit' 'virtualbox')
makedepends=('wget')
install=$pkgname.install
license=('custom')
_ARCH="x64"
DLAGENTS=("https::/usr/bin/wget -U "Mozilla" %u")
source=("virtualbox.conf"
	"genymotion.desktop"
        "https://dl.genymotion.com/releases/genymotion-$pkgver/$pkgname-${pkgver}-linux_$_ARCH.bin")
sha512sums=('63eba0963b3344ea7e7a0035560406899d878a0761cddef9853bec95deb9812b221e98f446f240070d6448d61d6ecbcf7a990bcd52863660e8f21cf9a98c0e1d'
            '42f629d6413e4e481ef68d019ec3071515b45d01fdb004a545c8b977a9bf2439581ca8a67ad7dead9a12a0d24e8e46ba02c5dc47abd76597451b09847cf5d78b'
            '0ec58b25ec3197f9e761b9321a3a54c532c1694a281c0f9006752d9cedb8da28190da1fb9be58ce0d18a54785633091eb6428cdc62cf195914b8f13721ada47b')

package(){
  cd $srcdir

  install -d $pkgdir/opt
  yes | bash ./$pkgname-${pkgver}-linux_$_ARCH.bin -d $pkgdir/opt

  install -d $pkgdir/usr/bin
  ln -s /opt/genymotion/genymotion $pkgdir/usr/bin/genymotion
  ln -s /opt/genymotion/genymotion-shell $pkgdir/usr/bin/genymotion-shell
  ln -s /opt/genymotion/player $pkgdir/usr/bin/genymotion-player
  ln -s /opt/genymotion/gmtool $pkgdir/usr/bin/gmtool
  install -Dm644 $srcdir/genymotion.desktop $pkgdir/usr/share/applications/genymotion.desktop
  chown -R root:root $pkgdir/opt/genymotion

  install -Dm644 $srcdir/virtualbox.conf $pkgdir/etc/modules-load.d/virtualbox.conf
}
