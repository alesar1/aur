# Maintainer: KokaKiwi <kokakiwi+aur@kokakiwi.net>

pkgname=gleam-git
pkgver=0.7.0.r0.ga89f777
pkgrel=1
pkgdesc="A statically typed language for the Erlang VM"
arch=('x86_64')
license=('Apache')
url='https://github.com/gleam-lang/gleam'
makedepends=('rust')
depends=('erlang-nox')
provides=('gleam')
conflicts=('gleam')
options=(strip !docs !libtool !staticlibs)
source=('gleam::git://github.com/gleam-lang/gleam.git')
sha256sums=('SKIP')

pkgver() {
  cd "gleam"

  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "gleam"

  cargo build --release
}

check() {
  cd "gleam"

  cargo test
}

package() {
  cd "gleam"

  install -Dm0755 target/release/gleam "${pkgdir}"/usr/bin/gleam
}
