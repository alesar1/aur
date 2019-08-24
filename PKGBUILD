# Maintainer: Ponas <mykolas.peteraitis@gmail.com>
pkgname=snake
pkgver=0.2.0
pkgrel=1
pkgdesc="A simple lightweight terminal snake game"
arch=('any')
url="https://github.com/PonasKovas/snake"
license=('MIT')
makedepends=('cargo')
source=("https://github.com/PonasKovas/snake/archive/${pkgver}.tar.gz")
md5sums=('87d0eef74e04dc80934dd2640be2a0b4')

build () {
  cd "$srcdir/$pkgname-$pkgver"
  RUSTUP_TOOLCHAIN=stable \
    cargo build --release
}

package() {
  cd "$srcdir/$pkgname-$pkgver"
  install -Dm755 target/release/snake "${pkgdir}/usr/bin/snake"
}