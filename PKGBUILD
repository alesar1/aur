# Maintainer: KokaKiwi <kokakiwi+aur [at] kokakiwi [dot] net>

pkgname=snowflake-pt-proxy
pkgver=2.4.1
pkgrel=1
pkgdesc="Snowflake is a pluggable transport that proxies traffic through temporary proxies using WebRTC (proxy part)"
url="https://snowflake.torproject.org"
license=('BSD')
arch=('x86_64' 'aarch64' 'armv7h')
depends=('glibc')
makedepends=('go')
source=("$pkgname-$pkgver.tar.gz::https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/snowflake/-/archive/v$pkgver/snowflake-v$pkgver.tar.gz"
        snowflake-proxy.service)
sha256sums=('f6498d44d96fd059174c56077d1564c0883166d373a0d0e0ff21b812822db4fc'
            '81ed80bea97fb9874734d4ec7ccb9a850e6aa5b186a354990066344446bd1412')
b2sums=('a01732452986750969dc8cbeb8d5f1800ba50602da4394fbd4c2fa2290a731edd48f28abddd726ead26db651b25975c1a29bd57b3b8d7bfdb585baa5c392d136'
        '2ba698a76a06b8ebee3cd8c44562783aa3939f66528d1573ac93a59dcc6a8de61f160b5dbc0e8b83c2473bedf037d69fbee9b33befa24027693e556fd5d3d575')

build() {
  cd "snowflake-v$pkgver"

  export CGO_CPPFLAGS="$CPPFLAGS"
  export CGO_CFLAGS="$CFLAGS"
  export CGO_CXXFLAGS="$CXXFLAGS"
  export CGO_LDFLAGS="$LDFLAGS"
  export GOFLAGS="-buildmode=pie -trimpath -ldflags=-linkmode=external -mod=readonly -modcacherw"

  go build -v -o proxy/snowflake-proxy ./proxy
}

package() {
  cd "snowflake-v$pkgver"

  install -Dm0755 proxy/snowflake-proxy "$pkgdir/usr/bin/snowflake-proxy"

  install -Dm0644 "$srcdir/snowflake-proxy.service" "$pkgdir/usr/lib/systemd/system/snowflake-proxy.service"

  install -Dm0644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
