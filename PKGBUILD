pkgname="deskx-git"
_pkgname="deskx"
pkgver=r20.b16ae8a
pkgrel=1
pkgdesc="A very small program to remotely control a computer in a local network (X11-only). "
arch=("x86_64")
url="https://github.com/DeskX11/DeskX"
license=("apache")
makedepends=(
  "libx11"
  "libxtst"
  "openssl"
)
source=(
  "$_pkgname::git+https://github.com/DeskX11/DeskX.git"
)
sha256sums=(
  "SKIP"
)

pkgver() {
  cd "$srcdir/$_pkgname"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "$srcdir/$_pkgname/src"
  make
}

package() {
  cd "$srcdir"
  install -Dm755 "$_pkgname/src/dxc" "$pkgdir"/usr/bin/dxc
  install -Dm755 "$_pkgname/src/dxs" "$pkgdir"/usr/bin/dxs
}
