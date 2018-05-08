# Maintainer: Streetwalrus <streetwalrus@codewalr.us>
_pkgname=racerd
pkgname=$_pkgname-git
pkgver=r135.29cd4c6
pkgrel=1
pkgdesc="Rust semantic analysis server powered by Racer"
arch=('x86_64')
url="https://github.com/jwilm/$_pkgname"
license=('Apache')
depends=('gcc-libs')
makedepends=('git' 'cargo')
source=("git+https://github.com/jwilm/$_pkgname.git"
        'Cargo.lock')
md5sums=('SKIP'
         '1d619706841bfd62d9e8f7ad994b9ffc')

pkgver() {
  cd "${srcdir}/$_pkgname"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  cd "${srcdir}/$_pkgname"
  cp ../Cargo.lock .
}

build() {
  cd "${srcdir}/$_pkgname"
  cargo build --release
}

package() {
  cd "${srcdir}/$_pkgname"
  install -Dm755 target/release/$_pkgname ${pkgdir}/usr/bin/$_pkgname
}

# vim:set ts=2 sw=2 et:
