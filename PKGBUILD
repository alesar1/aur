# Maintainer: willemw <willemw12@gmail.com>
# Contributor: Dimitris Kiziridis <ragouel at outlook dot com>

pkgname=digital-rain-git
pkgver=r8.d3963c4
pkgrel=2
pkgdesc="Matrix Digital Rain terminal program"
arch=('x86_64')
url='https://github.com/DavidWKnight/Digital-Rain'
license=('GPL3')
makedepends=('git')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=("$pkgname::git+$url")
sha256sums=('SKIP')

pkgver() {
  cd $pkgname
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  make -C $pkgname
}

package() {
  install -Dm755 $pkgname/Digital_Rain.out "$pkgdir/usr/bin/${pkgname%-git}"
}

