# Maintainer: Chris Nixon <chris.nixon@sigma.me.uk>
pkgname=ripgrep-git
pkgver=0.1.17.2.rf5eb36b
pkgrel=1
pkgdesc="A search tool that combines the usability of The Silver Searcher with the raw speed of grep."
arch=('i686' 'x86_64')
url="https://github.com/BurntSushi/ripgrep"
license=('UNLICENSE' 'MIT')
provides=("ripgrep")
makedepends=('cargo')
conflicts=('ripgrep')
source=("$pkgname::git+https://github.com/BurntSushi/ripgrep")
sha1sums=('SKIP')

build() {
  cd "$pkgname"
  if command -v rustup > /dev/null 2>&1; then
    RUSTFLAGS="-C target-cpu=native" rustup run nightly \
      cargo build --release --features simd-accel
  elif rustc --version | grep -q nightly; then
    RUSTFLAGS="-C target-cpu=native" \
      cargo build --release --features simd-accel
  else
    cargo build --release
  fi
}

pkgver() {
  cd "$pkgname"
  # Get the first part of the latest tag and append the current revision
  echo "$(git describe --long --tags | sed 's/\(^.*\)-.*.*/\1/;s/-/./g').r$(git log --pretty=format:'%h' -n 1)"
}

package() {
  cd "$pkgname"

  install -Dm755 "target/release/rg" "$pkgdir/usr/bin/rg"
  install -Dm644 "doc/rg.1" "$pkgdir/usr/share/man/man1/rg.1"
  install -Dm644 "README.md" "$pkgdir/usr/share/doc/ripgrep/README.md"
  install -Dm644 "COPYING" "$pkgdir/usr/share/doc/ripgrep/COPYING"
  install -Dm644 "LICENSE-MIT" "$pkgdir/usr/share/doc/ripgrep/LICENSE-MIT"
  install -Dm644 "UNLICENSE" "$pkgdir/usr/share/doc/ripgrep/UNLICENSE"
}
