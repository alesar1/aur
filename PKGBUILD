# Maintainer: 'Konstantin Kogan < kostyalamer@yandex.ru >'
# Contributor: 'Yury Pakin < zxwarior@yandex.ru >'

pkgname=mplayer-vc
pkgver=0.3.0
pkgrel=1
pkgdesc="Script for full-screen viewing of local video in mplayer via console. Autor Yury Pakin "
arch=('x86_64')
url="http://forum.russ2.com/index.php?showtopic=4431"
license=('GPL2')

depends=(
  'coreutils' 'grep' 'gawk' 'bc' 'sed' 'fbset' 'util-linux'
  'mediainfo' 'filesystem' 'mplayer'
)

source=("http://altlinuxclub.ru/arhiv/${pkgname}-${pkgver}.tar.gz")
md5sums=('93fe06947995f2411e3ae39a11d7dfb3')

package() {

cd "$srcdir/$pkgname-$pkgver"
install -pDm755 $pkgname $pkgdir/usr/bin/$pkgname

}