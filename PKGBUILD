# Maintainer: Timofey Titovets <nefelim4ag@gmail.com>

pkgname=ananicy-git
pkgver=1.17.0.r2.g1961fbf
pkgrel=1
pkgdesc="Ananicy - is Another auto nice daemon, with community rules support"
arch=('any')
url="https://github.com/Nefelim4ag/Ananicy.git"
license=('GPL3')
depends=('systemd' 'bash' 'schedtool')
makedepends=('git' 'make')
source=("$pkgname"::'git+https://github.com/Nefelim4ag/Ananicy.git#branch=master')
md5sums=('SKIP')
install=$pkgname.install
backup=( 'etc/ananicy.d/ananicy.conf' )

pkgver() {
  cd "$pkgname"
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

package() {
  cd "$srcdir/${pkgname}/"
  make install PREFIX="$pkgdir"
  mkdir -p "$pkgdir/usr/"
  mv -v "$pkgdir/lib" "$pkgdir/usr/"
}
