# Maintainer: Frederik “Freso” S. Olesen <freso.dk@gmail.com>
# Contributor: Ian Naval <ianonavy@gmail.com>

_pkgname=go-ipfs
pkgname=$_pkgname-git
pkgver=0.3.7.r2.gb30d9d4
pkgrel=1
pkgdesc="global versioned p2p merkledag file system"
arch=('i686' 'x86_64' 'armv7h')
url="https://github.com/ipfs/$_pkgname"
license=('MIT')
makedepends=('git' 'go')
optdepends=('fuse: for mounting/advanced use')
provides=("$_pkgname")
conflicts=("$_pkgname")
source=("git+${url}.git")
md5sums=('SKIP')

pkgver() {
  cd "$srcdir/$_pkgname"
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  # Required for go get
  export GOPATH="$srcdir"

  # Make src directory for $GOPATH
  mkdir -p "$GOPATH/src"

  mv "$srcdir/$_pkgname" "$GOPATH/src"
  cd "$GOPATH/src/$_pkgname/cmd/ipfs"

  msg2 'Installing dependencies...'
  go get -v ./...

  msg2 'Building binary...'
  go install -v
}

package() {
  cd "$srcdir"

  install -dm755 "$pkgdir/usr/bin"
  install -m755 "$srcdir/bin/ipfs" "$pkgdir/usr/bin/ipfs"
}
