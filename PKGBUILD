# Maintainer: Sosthène Guédon <sosthene.gued@gmail.com>
pkgname=qcalc
pkgver=1.0
pkgrel=1
pkgdesc="Simple Qt calculator"
arch=('x86_64')
url="https://gitlab.com/SostheneGuedon/qcalc"
license=('GPL')
depends=(
  'qt5-base'
)
makedepends=(
  'qt5-base'
  'gcc'
  'gzip'

)
source=("https://gitlab.com/SostheneGuedon/qcalc/-/archive/v1.0/qcalc-v1.0.tar.gz")
md5sums=('26a65fe1600b58da5565b024beae250e')

build() {
  cd $pkgname-v$pkgver
  qmake
  make 
}

package() {
  cd $pkgname-v$pkgver
  make INSTALL_ROOT="$pkgdir"  install
  install -d "$pkgdir"/usr/share/man/man1/
  install -g 0 -o 0 -m 0644 qcalc.1 "$pkgdir"/usr/share/man/man1/
  gzip "$pkgdir"/usr/share/man/man1/qcalc.1
}
