# Maintainer: David Birks <david@birks.dev>

pkgname=pluto
pkgver=1.1.0
pkgrel=1
pkgdesc='A cli tool to help discover deprecated apiVersions in Kubernetes'
arch=(x86_64)
url='https://github.com/FairwindsOps/pluto'
license=(Apache)
makedepends=('go')
source=("$pkgname-$pkgver.tar.gz::https://github.com/FairwindsOps/pluto/archive/v$pkgver.tar.gz")
sha256sums=('2c1585b4e10868bfe1065b688f91123ea2774ef22def775aaaefc4b6cfe66856')

build() {
  cd $pkgname-$pkgver

  export VERSION=$pkgver
  make build
}

package() {
  install -Dm 755 "$srcdir/$pkgname-$pkgver/$pkgname" "$pkgdir/usr/bin/$pkgname"
}
