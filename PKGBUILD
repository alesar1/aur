# Maintainer: NOGISAKA Sadata <ngsksdt@gmail.com>
# Contributor: Kohei Suzuki <eagletmt@gmail.com>

pkgname=ghq
pkgver=0.15.0
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

sha512sums=('f445b39aab16a3f4f2ce8d938130b1f421da29675d8bbcac6f21866bc4a5a2ce8c31ce3439c6b6da23c5e0ff0da84f50121acd5b758ee36301f1a78e70867685')
