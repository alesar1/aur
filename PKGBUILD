# Maintainer: Peter Roberts <me@peter-r.co.uk>
pkgname=zoom-parallel
pkgver=0.1.2
pkgrel=1
pkgdesc="Parallel command executor with a focus on simplicity and good cross-platform behaviour "
arch=("x86_64")
url="https://github.com/pwr22/zoom"
license=('MIT')
depends=("glibc")
makedepends=("go")
source=("https://github.com/pwr22/zoom/archive/v$pkgver.tar.gz")
sha256sums=("667ba0fa6afab4b71c0fcc3a1047c8f3c047c39b9d769223df56e3d531e01f83")

_cmdname=zoom # name of the command - there's a clash so the package name is longer

# Go stuff based on https://wiki.archlinux.org/index.php/Go_package_guidelines

prepare(){
  mkdir -p "go/src/github.com/pwr22"
  ln -rTsf "$_cmdname-$pkgver" "go/src/github.com/pwr22/$_cmdname"

  export GOPATH="$srcdir/go"
  export GOFLAGS="-gcflags=all=-trimpath=$PWD -asmflags=all=-trimpath=${PWD} -ldflags=-extldflags=$LDFLAGS"

  cd "go/src/github.com/pwr22/$_cmdname" # going through the symlink is necessary to make go get happy
  go get ./...
}

build() {
	cd "$_cmdname-$pkgver"

	export GOPATH="$srcdir/go"
	export GOFLAGS="-gcflags=all=-trimpath=$PWD -asmflags=all=-trimpath=${PWD} -ldflags=-extldflags=$LDFLAGS"

    go build -o "$_cmdname"
}

package() {
	cd "$_cmdname-$pkgver"
	install -Dm755 "$_cmdname" "$pkgdir/usr/bin/$_cmdname"
	mkdir -p "$pkgdir/usr/share/licenses/$pkgname"
	cp LICENSE "$pkgdir/usr/share/licenses/$pkgname"
}
