# Maintainer: NOGISAKA Sadata <ngsksdt@gmail.com>
# Contributor: Kohei Suzuki <eagletmt@gmail.com>

pkgname=ghq
pkgver=0.12.9
pkgrel=1
pkgdesc="Remote repository management made easy"
arch=('i686' 'x86_64')
url="https://github.com/motemen/ghq"
license=('MIT')
makedepends=('go' 'git')
optdepends=('zsh: ghq function for zsh')
source=("ghq-${pkgver}.tar.gz::https://github.com/motemen/ghq/archive/v${pkgver}.tar.gz")

build() {
  cd "$srcdir/$pkgname-$pkgver"
  export GOPATH="$srcdir/build"
  go get -t -d -v
  go build .
}

check() {
  cd "$srcdir/$pkgname-$pkgver"
  export GOPATH="$srcdir/build"
  go test -x -v .
}

package() {
  cd "$srcdir/$pkgname-$pkgver"
  install -Dm 755 ghq "$pkgdir/usr/bin/ghq"
  install -Dm 644 zsh/_ghq "$pkgdir/usr/share/zsh/site-functions/_ghq"
  install -Dm 644 LICENSE "$pkgdir/usr/share/licenses/ghq/LICENSE"
}

# vim: set et sw=2 sts=2:

sha512sums=('f9b7ec4ffeaf92c52face61f69353636c6f30f8822b68414ecf8d0ee5afec10b10ab010f9fbb65f2e6936a1e1d57988b47229360303338c8f233c36cc37e8299')
