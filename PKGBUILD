# Maintainer: NOGISAKA Sadata <ngsksdt@gmail.com>
# Contributor: Kohei Suzuki <eagletmt@gmail.com>

pkgname=ghq
pkgver=0.14.2
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

sha512sums=('997bd1a153fc3774beed073171203a6469aae1c2c16d1ea65454ab6ea8694c5f7d8bd98a3f571bf2b59db9a6c5d626ee5d2bae78a4c31e8714b9ee64b1fd5977')
