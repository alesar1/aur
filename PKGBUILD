# Maintainer: Kyle Sferrazza <kyle.sferrazza@gmail.com>

pkgname='jam-git'
pkgver=0.6.0.a.4.g217f5db
pkgrel=5
pkgdesc="A Google Play Music console player written in Go."
arch=('x86_64')
url="https://github.com/budkin/jam"
license=('MIT')
makedepends=('go')
depends=('pulseaudio')
provides=('jam')

prepare() {
  export GOPATH=$srcdir
  go get github.com/budkin/jam
  go get github.com/boltdb/bolt
  go get github.com/budkin/gmusic
  go get github.com/budkin/jam/auth
  go get github.com/budkin/jam/lastfm
  go get github.com/budkin/jam/storage
  go get github.com/budkin/jam/ui
  go get github.com/budkin/jam/version
}

pkgver() {
  cd $srcdir/src/github.com/budkin/jam
  git describe --tags --long | sed 's/^v//;s/-/./;s/-/./g'
}

build() {
  cd $srcdir/src/github.com/budkin/jam
  go build -buildmode=pie
}

package() {
  cd $pkgdir
  mkdir -p usr/bin
  cp $srcdir/bin/jam usr/bin/jam
  chmod 755 usr/bin/jam
}
