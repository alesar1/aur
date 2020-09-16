# Maintainer: Chocobo1 <chocobo1 AT archlinux DOT net>

pkgname=rav1e-git
pkgver=0.4.0.alpha.r0.g2743df61
pkgrel=2
pkgdesc="The fastest and safest AV1 encoder"
arch=('i686' 'x86_64')
url="https://github.com/xiph/rav1e"
license=('BSD' 'custom')
depends=('gcc-libs')
makedepends=('git' 'rust' 'nasm' 'cargo-c')
provides=('rav1e' 'librav1e.so')
conflicts=('rav1e')
options=('staticlibs')
source=("git+https://github.com/xiph/rav1e.git")
sha256sums=('SKIP')


pkgver() {
  cd "rav1e"

  _tag=$(git tag -l --sort -v:refname | head -n1)
  _rev=$(git rev-list --count $_tag..HEAD)
  _hash=$(git rev-parse --short HEAD)
  printf "%s.r%s.g%s" "$_tag" "$_rev" "$_hash" | sed 's/^v//;s/-/./g'
}

check() {
  cd "rav1e"

  #cargo test --release
}

package() {
  cd "rav1e"

  cargo install \
    --no-track \
    --root "$pkgdir/usr" \
    --path "$srcdir/rav1e"
  # for librav1e
  cargo cinstall \
    --release \
    --destdir "$pkgdir" \
    --prefix "/usr"

  install -Dm644 "README.md" -t "$pkgdir/usr/share/doc/rav1e"
  install -Dm644 "LICENSE" -t "$pkgdir/usr/share/licenses/rav1e"
  install -Dm644 "PATENTS" -t "$pkgdir/usr/share/licenses/rav1e"
}
