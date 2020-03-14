# Maintainer: willemw <willemw12@gmail.com>
# Contributor: Philipp Klein <philipptheklein@gmail.com>

pkgname=gdrive
pkgver=2.1.0
pkgrel=2
pkgdesc="Google Drive CLI Client"
arch=('x86_64' 'i686')
url="https://github.com/gdrive-org/gdrive"
license=('MIT')
makedepends=('dep' 'git' 'go')
options=('!strip' '!emptydirs')
#source=(https://github.com/prasmussen/$pkgname/archive/$pkgver.tar.gz)
source=($pkgname-$pkgver::git+https://github.com/prasmussen/gdrive.git#commit=97981f7fd205353907135eacfc0e0ade24b88269)
sha256sums=('SKIP')

_gourl=github.com/prasmussen/gdrive
_gobuild=build/src/$_gourl

prepare() {
  mkdir -p "$(dirname $_gobuild)"
  cp -a "$srcdir/$pkgname-$pkgver" $_gobuild

  cd $_gobuild
  GOPATH="$srcdir/build" dep init
  GOPATH="$srcdir/build" dep ensure -update
}

build() {
  #GOPATH="$srcdir/build" go install -fix -v -x $_gourl
  GOPATH="$srcdir/build" go install -v -x $_gourl
}

#check() {
#  GOPATH="$srcdir/build" go test -fix -v -x $_gourl
#}

package() {
  cd build
  install -Dm755 bin/gdrive "$pkgdir/usr/bin/gdrive"
}

