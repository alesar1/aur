# Maintainer: Ian Young <ian at iangreenleaf dot com>

pkgname=duplicacy
pkgver=2.1.1
pkgrel=1
pkgdesc="A new generation cloud backup tool based on lock-free deduplication"
arch=('x86_64' 'i686')
url="https://duplicacy.com/"
license=('custom')
depends=('glibc')
makedepends=('go' 'git')
source=("https://github.com/gilbertchen/$pkgname/archive/v$pkgver.tar.gz")
sha256sums=('0f72789d7d4391375ad87378758e679a1653ed0ff7bee4214b996e11ad995791')

prepare() {
  cd "$pkgname-$pkgver/$pkgname"

  mkdir -p "src/github.com/gilbertchen"
  ln -sf "$srcdir/$pkgname-$pkgver" "src/github.com/gilbertchen/$pkgname"

  GOPATH="$srcdir/$pkgname-$pkgver/$pkgname" go get -d -v
}

build() {
  cd "$pkgname-$pkgver/$pkgname"

  GOPATH="$srcdir/$pkgname-$pkgver/$pkgname" go build -x
}

check() {
  cd "$pkgname-$pkgver/$pkgname"

  GOPATH="$srcdir/$pkgname-$pkgver/$pkgname" go test -v -x
}

package() {
  cd "$pkgname-$pkgver"

  install -Dm755 "$pkgname/$pkgname" "$pkgdir/usr/bin/$pkgname"
  install -Dm644 LICENSE.md "$pkgdir/usr/share/licenses/$pkgname/LICENSE.md"
}
