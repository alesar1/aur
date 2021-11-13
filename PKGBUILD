# Maintainer: Kasimir Wansing <kasimir at wansing dot org>
pkgname=litestream
pkgver=0.3.6
pkgrel=3
pkgdesc='Streaming S3 replication for SQLite.'
arch=('x86_64')
url='https://github.com/benbjohnson/litestream'
license=('Apache')
depends=('glibc')
makedepends=('go')
optdepends=('sqlite')
source=(
  "$url/archive/v$pkgver.tar.gz"
  "litestream.sysusers"
  "litestream.tmpfiles"
)
sha256sums=('42323c31af2f70891854709dcd56ce7c970ebdb42d563da1bc81d8abc47f434a'
            'ff01a182a9138602692b9b55e01888bdf7a8c19f0f1c7be60bb165bd343dc7bf'
            '15775e0ad1842ace5683e2eb13b0d829a5d3df09e42c89fbc4daf82eef1897b4')

prepare(){
  cd "$pkgname-$pkgver"
  mkdir -p build/
}

build() {
  cd "$pkgname-$pkgver"
  export CGO_CPPFLAGS="${CPPFLAGS}"
  export CGO_CFLAGS="${CFLAGS}"
  export CGO_CXXFLAGS="${CXXFLAGS}"
  export CGO_LDFLAGS="${LDFLAGS}"
  export GOFLAGS="-buildmode=pie -trimpath -ldflags=-linkmode=external -mod=readonly -modcacherw"
  go build -o build ./cmd/...
}

check() {
  cd "$pkgname-$pkgver"
  go test ./...
}

package() {
  cd "$pkgname-$pkgver"
  install -Dm755 build/$pkgname "$pkgdir"/usr/bin/$pkgname
  install -Dm644 "../litestream.sysusers" "${pkgdir}/usr/lib/sysusers.d/${pkgname}.conf"
  install -Dm644 "../litestream.tmpfiles" "${pkgdir}/usr/lib/tmpfiles.d/${pkgname}.conf"
}
