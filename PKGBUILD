# Maintainer: Jonathan Knapp <jaknapp8+aur@gmail.com>
# URL: https://github.com/gcla/termshark
# Upsteeam: https://github.com/gcla/termshark

pkgname=('termshark-git')
pkgver=2.3.0.46.g04de996
pkgrel=1
pkgdesc="A terminal UI for tshark, inspired by Wireshark"
arch=('i686' 'x86_64')
url='https://github.com/gcla/termshark'
license=('MIT')
depends=('wireshark-cli')
makedepends=('git' 'go')
provides=('termshark')
#conflicts=('termshark')
source=("$pkgname::git+https://github.com/gcla/termshark.git")
md5sums=('SKIP')

pkgver() {
  cd $pkgname
  git describe --tags | sed 's/^v//;s/-/./g'
}

prepare() {
  export GOPATH="$srcdir"
  rm -fr "$srcdir/src"
  rm -fr "$srcdir/bin"
  git clone "$srcdir/$pkgname" "$GOPATH/src/github.com/gcla/termshark"
}

package() {
  export GOPATH="$srcdir"
  cd "$GOPATH/src/github.com/gcla/termshark"
  #go get -v ./cmd/termshark
  #install -Dm 755 "$srcdir/bin/termshark" -t "$pkgdir/usr/bin";
  GOBIN="$pkgdir/usr/bin" go install ./...
  install -D -m644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
