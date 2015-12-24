# Maintainer: aksr <aksr at t-com dot me>
pkgname=neatmail-git
pkgver=r8.f8bb742
pkgrel=1
epoch=
pkgdesc="A command-line mail client."
arch=('i686' 'x86_64')
url="http://repo.or.cz/neatmail.git"
license=('custom:BSD')
groups=()
depends=('')
makedepends=('git')
optdepends=()
checkdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
changelog=
install=
source=("$pkgname::git+git://repo.or.cz/neatmail.git")
noextract=()
md5sums=('SKIP')

pkgver() {
  cd "$srcdir/$pkgname"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

#prepare() {
#  cd "$srcdir/$pkgname"
#  ./autogen.sh
#}

build() {
  cd "$srcdir/$pkgname"
  make
}

package() {
  cd "$srcdir/$pkgname"
  install -Dm755 mail $pkgdir/usr/bin/neatmail
  install -Dm644 README $pkgdir/usr/share/doc/$pkgname/README
}

