# Maintainer: deadhead <deadhead3492@gmail.com>
pkgname=fetchmirrors
pkgver=0.6
pkgrel=3
pkgdesc="Fetch and rank new pacman mirrorlist"
arch=('any')
url="https://github.com/deadhead420/fetchmirrors"
license=('GPL')
depends=('curl' 'pacman-contrib')
source=('https://raw.githubusercontent.com/deadhead420/fetchmirrors/master/fetchmirrors.sh')
md5sums=('d2996d8b1febfeaaf6d6a8eeaa78f2a8')

package() {
  cd "${srcdir}"
  install -Dm755 fetchmirrors.sh $pkgdir/usr/bin/fetchmirrors
}

# vim:set ts=2 sw=2 et:
