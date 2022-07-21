# Maintainer: George Rawlinson <grawlinson@archlinux.org>

pkgname=harec
pkgver=r1346.8da848e
pkgrel=1
pkgdesc='The Hare programming language - bootstrapped compiler'
arch=('x86_64')
url='https://harelang.org/'
license=('GPL3')
depends=('qbe')
makedepends=('git')
_commit='8da848e1419c15c448e91f5c0fe987162784b572'
source=("git+https://git.sr.ht/~sircmpwn/harec#commit=$_commit")
b2sums=('SKIP')

pkgver() {
  cd harec

  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd harec

  ./configure --prefix=/usr

  make
}

check() {
  cd harec

  make check
}

package() {
  cd harec

  make DESTDIR="$pkgdir" install
}
