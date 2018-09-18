# Maintainer: YOUNG HO CHA <ganadist@gmail.com>
pkgname=uftrace
pkgver=0.9
pkgrel=1
pkgdesc="Tool to trace and analyze execution of a program written in C/C++"
arch=(armv6h armv7h aarch64 x86_64)
url="https://github.com/namhyung/uftrace"
license=('GPL2')
groups=()
depends=()
makedepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=(!emptydirs)
install=
changelog=
source=("git+https://github.com/namhyung/$pkgname.git#tag=v$pkgver")
noextract=()
md5sums=('SKIP') #autofill using updpkgsums

build() {
  mkdir -p "$pkgname"/build
  cd "$pkgname"/build
  ../configure --prefix=/usr
  make
}

package() {
  cd "$pkgname"/build
  make DESTDIR="$pkgdir/" install
}
