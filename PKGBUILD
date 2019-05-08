pkgname=fluidkeys
pkgver=1.1.0
pkgrel=1
pkgdesc='Simple PGP for engineering teams'
arch=('any')
url="https://www.fluidkeys.com"
license=('AGPL3')
makedepends=('go-pie' 'rsync' 'dep')
provides=("fluidkeys=$pkgver")
source=("https://github.com/fluidkeys/fluidkeys/archive/v${pkgver}.tar.gz")
sha256sums=('7e5fb37ce735686cc1b91b23581528dfb47ed1dac1da4a91bf0244d191c3491e')

_gopath="gopath/src/github.com/fluidkeys/fluidkeys"

prepare(){
  mkdir -p "$srcdir/gopath/src/github.com/fluidkeys"
  ln -rTsf $pkgname-$pkgver "$srcdir/$_gopath"
  export GOPATH="$srcdir/gopath"
  cd $srcdir/$_gopath
  dep ensure
}

build() {
  cd "$srcdir/$_gopath"
  export GOPATH="$srcdir/gopath"
  make
}

package() {
  cd $srcdir/$_gopath
  export GOPATH="$srcdir/gopath"

  make install PREFIX="$pkgdir/usr"
}
