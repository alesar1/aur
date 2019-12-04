# Maintainer: Guillaume Lefranc <guillaume@signal18.io>
pkgname=nextdns
pkgver=1.2.5
pkgrel=1
pkgdesc='NextDNS DNS-over-HTTPS client'
arch=('x86_64')
url="https://github.com/nextdns/nextdns"
license=('MIT')
makedepends=('go-pie')
source=("$url/archive/v$pkgver.tar.gz")
sha256sums=('f6104683ea63fd5f8ff89f2a6564ebd77082ebbfd2920963c842a54079c947e0')
install=$pkgname.install

build() {
  cd $pkgname-$pkgver
  go build \
    -trimpath \
    -ldflags "-X main.version=$pkgver -extldflags $LDFLAGS" \
    -o $pkgname .
}

package() {
  cd $pkgname-$pkgver
  install -Dm755 $pkgname "$pkgdir"/usr/bin/$pkgname
}
