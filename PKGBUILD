# Maintainer: kpcyrd <git@rxv.cc>

_gitname=wasm-gc
pkgname=wasm-gc-git
pkgver=0.0.0
pkgrel=2
pkgdesc="gc-sections for wasm"
url="https://github.com/alexcrichton/wasm-gc"
depends=('gcc-libs')
makedepends=('cargo')
provides=('wasm-gc')
conflicts=('wasm-gc')
arch=('i686' 'x86_64' 'armv6h')
license=('MIT' 'APACHE')
source=("git+https://github.com/alexcrichton/$_gitname.git")
sha256sums=('SKIP')
sha512sums=('SKIP')

build() {
  cd "$_gitname"
  cargo build --release
}

package() {
  cd "$_gitname"
  install -Dm755 "target/release/$_gitname" "$pkgdir/usr/bin/$_gitname"
  install -Dm644 LICENSE-MIT LICENSE-APACHE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
