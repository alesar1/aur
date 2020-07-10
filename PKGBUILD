# Maintainer: Gustavo Castro < gustawho [ at ] gmail [ dot ] com >

pkgname='colorlatex-git'
pkgver=r44.8c2db30
pkgrel=1
pkgdesc='A script to colorize the terminal output of LaTeX compilers'
arch=('any')
url='https://gitlab.com/vmaison/colorlatex'
license=('MIT')
provides=(${pkgname%-*}=$pkgver)
conflicts=(${pkgname%-*})
depends=('perl' 'texlive-bin')
makedepends=('git')
source=("$pkgname::git+${url}.git")
md5sums=('SKIP')

pkgver() {
  cd "$srcdir/$pkgname"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
  cd "$srcdir/$pkgname"
  make DESTDIR="$pkgdir" prefix=/usr install
}
