# Maintainer: David Birks <david@birks.dev>
# Contributor: David Stark <david@starkers.org>

pkgname=dive
pkgver=0.9.2
pkgrel=1
pkgdesc='A tool for exploring each layer in a docker image'
url='https://github.com/wagoodman/dive'
arch=('x86_64')
license=('MIT')
depends=('docker')
makedepends=('go')
conflicts=('dive-git')
source=("$pkgname-$pkgver.tar.gz::https://github.com/wagoodman/dive/archive/v$pkgver.tar.gz")
sha256sums=('1f84bf3d2ba04986827ff5b1a66920f030f7b4788c927c5e152ff5bcf49f9770')

build() {
  cd $pkgname-$pkgver
  go build \
    -trimpath \
    -ldflags "-X main.version=$pkgver" \
    -o bin/dive \
    .
}

package() {
  install -Dm 755 "$srcdir/$pkgname-$pkgver/bin/dive" "$pkgdir/usr/bin/dive"
}
