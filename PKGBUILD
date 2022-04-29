# Maintainer: George Rawlinson <grawlinson@archlinux.org>
# Contributor: Armin Preiml <apreiml@strohwolke.at>

pkgname=hare
pkgver=r2289.9c7dd2e0
pkgrel=1
pkgdesc='The Hare programming language'
arch=('x86_64')
url='https://harelang.org/'
license=('GPL3' 'MPL2')
depends=('qbe' 'harec')
makedepends=('git' 'scdoc')
_commit='9c7dd2e0f89bc31a1dd028b566dee3c231f4a992'
source=(
  "hare::git+https://git.sr.ht/~sircmpwn/hare#commit=$_commit"
)
sha512sums=('SKIP')
b2sums=('SKIP')

pkgver() {
  cd hare

  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  cd hare

  sed "s:/usr/local:/usr:" config.example.mk > config.mk
}

build() {
  cd hare

  # XXX: parallel build driver builds are broken
  LOCALVER=arch make -j1
}

check() {
  cd hare

  # XXX: parallel build driver builds are broken
  make check -j1
}

package() {
  cd hare

  make DESTDIR="$pkgdir" install
}
