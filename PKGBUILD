#!/bin/sh

# Maintainer: Zhuo FENG <fenprace.i@gmail.com>

pkgname=mosdns-cn
pkgver=1.0.1
pkgrel=1
pkgdesc="A DNS forwarder"
license=("GPL3")
arch=("any")
url="https://github.com/IrineSistiana/mosdns-cn"
makedepnds=("go")
optdepends=('v2ray-domain-list-community: geosite.dat'
            'v2ray-geoip: geoip.dat'
            'v2ray-rules-dat-git: geosite.dat & geoip.dat')
provides=("mosdns-cn")
conflicts=("mosdns-cn")
source=("$pkgname-$pkgver.tar.gz::https://github.com/IrineSistiana/mosdns-cn/archive/refs/tags/v1.0.1.tar.gz")

build() {
  export GOPATH="$srcdir/gopath"
  cd "$pkgname-$pkgver"
  go build .
}

package() {
  cd "$pkgname-$pkgver"
  install -Dm755 "$pkgname" "$pkgdir/usr/bin/$pkgname"
}

sha256sums=('75c0ae4af80067377ec287ceb5b2f038e64eb5a0223e3a7cb14e6368a3079492')
