# 2015-09-01 02:12:19.0 +0200
# Maintainer: Gilles Quenot <gilles.quenot@sputnick.fr>
pkgname=heyu
pkgver=2.11_rc2
_pkgver=2.11-rc2
pkgrel=1
pkgdesc="X10 Automation for Linux, Unix, and Mac OS X"
arch=(i686 x86_64)
url="http://www.heyu.org/"
license=('unknown')
provides=("heyu")
depends=()
makedepends=('make')
conflicts=('heyu')
source=("https://github.com/HeyuX10Automation/heyu/archive/v${_pkgver}.tar.gz")
md5sums=('9871b98bbf2069f6f20144e66e766bf8')
 
prepare() { true; }

build() {
  cd $srcdir/$pkgname-$_pkgver
  ./configure --prefix=/usr
  make || return 1
}

package() {
  cd $srcdir/$pkgname-$_pkgver
  make DESTDIR="$pkgdir/" install
}
