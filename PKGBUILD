# Maintainer: Yuan Zhou <xyyqzy@hotmail.com>

_pkgname=woboq_codebrowser
pkgname=$_pkgname-git
pkgver=r447.3c41d81
pkgrel=1
pkgdesc="A web-based code browser for your C/C++ projects"
arch=('x86_64')
url="https://woboq.com/codebrowser.html"
license=('CCPL')
depends=('clang')
makedepends=('llvm' 'clang')
source=("$pkgname::git+https://github.com/woboq/$_pkgname")
sha512sums=('SKIP')

pkgver() {
  cd "$pkgname"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "$pkgname"
  cmake -DCMAKE_INSTALL_PREFIX=/usr .
  make
}

package() {
  cd "$pkgname"
  make DESTDIR="$pkgdir" install
}
