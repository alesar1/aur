# Maintainer: absrdspc <repom2@airmail.cc>
# Developer: Timofey Titovets <nefelim4ag@gmail.com>

pkgname=ananicy
pkgver=2.2.0
pkgrel=1
pkgdesc="Another auto nice daemon, with community rules support"
arch=('any')
url="https://github.com/Nefelim4ag/Ananicy.git"
license=('GPL3')
depends=('systemd' 'bash' 'schedtool')
makedepends=('git' 'make')
conflicts=('ananicy-git')
source=("$pkgname"::"git+https://github.com/Nefelim4ag/Ananicy.git#tag=${pkgver}")
md5sums=('SKIP')
install=$pkgname.install
backup=( 'etc/ananicy.d/ananicy.conf' )

package() {
  cd "$srcdir/${pkgname}/"
  make install PREFIX="$pkgdir"
  mkdir -p "$pkgdir/usr/"
  mv -v "$pkgdir/lib" "$pkgdir/usr/"
}

