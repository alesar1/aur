# Maintainer: John Fawkes
pkgname=dnscrypt-proxy-git
pkgver=2.0.27.r9.bd23ddaa
pkgrel=1
pkgdesc="A flexible DNS proxy, with support for modern encrypted DNS protocols such as DNSCrypt v2 and DNS-over-HTTP/2."
arch=('i686' 'x86_64' 'arm' 'armv6h' 'armv7h' 'aarch64')
url="https://github.com/jedisct1/dnscrypt-proxy"
license=('custom:ISC')
makedepends=('git' 'go')
provides=('dnscrypt-proxy')
conflicts=('dnscrypt-proxy')
backup=('etc/dnscrypt-proxy/dnscrypt-proxy.toml')
source=('git+https://github.com/jedisct1/dnscrypt-proxy.git')
sha512sums=('SKIP')

pkgver() {
  cd "$srcdir/dnscrypt-proxy"
  git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  cd ../
  cp dnscrypt-proxy.service "$srcdir/dnscrypt-proxy/dnscrypt-proxy"
  cp dnscrypt-proxy.socket "$srcdir/dnscrypt-proxy/dnscrypt-proxy"
  cd "$srcdir/dnscrypt-proxy/dnscrypt-proxy"
  sed -i 's|\['\''127\.0\.0\.1:53'\'', '\''\[::1\]:53'\''\]|\[\]|g' example-dnscrypt-proxy.toml
  sed -i 's|'\''dnscrypt-proxy\.log'\''|'\''/var/log/dnscrypt-proxy/dnscrypt-proxy\.log'\''|g' example-dnscrypt-proxy.toml
  sed -i 's|'\''forwarding-rules\.txt'\''|'\''/etc/dnscrypt-proxy/forwarding-rules\.txt'\''|g' example-dnscrypt-proxy.toml
  sed -i 's|'\''cloaking-rules\.txt'\''|'\''/etc/dnscrypt-proxy/cloaking-rules\.txt'\''|g' example-dnscrypt-proxy.toml
  sed -i 's|'\''query\.log'\''|'\''/var/log/dnscrypt-proxy/query\.log'\''|g' example-dnscrypt-proxy.toml
  sed -i 's|'\''nx\.log'\''|'\''/var/log/dnscrypt-proxy/nx\.log'\''|g' example-dnscrypt-proxy.toml
  sed -i 's|'\''blacklist\.txt'\''|'\''/etc/dnscrypt-proxy/blacklist\.txt'\''|g' example-dnscrypt-proxy.toml
  sed -i 's|'\''blocked\.log'\''|'\''/var/log/dnscrypt-proxy/blocked\.log'\''|g' example-dnscrypt-proxy.toml
  sed -i 's|'\''ip-blacklist\.txt'\''|'\''/etc/dnscrypt-proxy/ip-blacklist\.txt'\''|g' example-dnscrypt-proxy.toml
  sed -i 's|'\''ip-blocked\.log'\''|'\''/var/log/dnscrypt-proxy/ip-blocked\.log'\''|g' example-dnscrypt-proxy.toml
  sed -i 's|'\''whitelist\.txt'\''|'\''/etc/dnscrypt-proxy/whitelist\.txt'\''|g' example-dnscrypt-proxy.toml
  sed -i 's|'\''whitelisted\.log'\''|'\''/var/log/dnscrypt-proxy/whitelisted\.log'\''|g' example-dnscrypt-proxy.toml
  sed -i 's|'\''public-resolvers\.md'\''|'\''/var/cache/dnscrypt-proxy/public-resolvers\.md'\''|g' example-dnscrypt-proxy.toml
  sed -i 's|'\''parental-control\.md'\''|'\''/var/cache/dnscrypt-proxy/parental-control\.md'\''|g' example-dnscrypt-proxy.toml
}

build() {
  msg2 'Setting gopath...'
  mkdir -p "$srcdir/gopath"
  export GOPATH="$srcdir/gopath"
  
  msg2 'Setting build environment...'
  mkdir -p "${GOPATH}/src/github.com/jedisct1"
  ln -sfn "$srcdir/dnscrypt-proxy" "${GOPATH}/src/github.com/jedisct1/dnscrypt-proxy"
  
  msg2 'Compiling...'
  cd "${GOPATH}/src/github.com/jedisct1/dnscrypt-proxy/dnscrypt-proxy"
  go build -ldflags="-s -w"
}

package() {
  cd "$srcdir/dnscrypt-proxy/dnscrypt-proxy"
  install -Dm755 "dnscrypt-proxy" "$pkgdir/usr/bin/dnscrypt-proxy"
  install -Dm644 "example-dnscrypt-proxy.toml" "$pkgdir/etc/dnscrypt-proxy/dnscrypt-proxy.toml"
  install -Dm644 "example-forwarding-rules.txt" "$pkgdir/usr/share/doc/dnscrypt-proxy/example-forwarding-rules.txt"
  install -Dm644 "example-blacklist.txt" "$pkgdir/usr/share/doc/dnscrypt-proxy/example-blacklist.txt"
  install -Dm644 "example-cloaking-rules.txt" "$pkgdir/usr/share/doc/dnscrypt-proxy/example-cloaking-rules.txt"
  install -Dm644 "example-whitelist.txt" "$pkgdir/usr/share/doc/dnscrypt-proxy/example-whitelist.txt"
  
  install -Dm644 "dnscrypt-proxy.service" "$pkgdir/usr/lib/systemd/system/dnscrypt-proxy.service"
  install -Dm644 "dnscrypt-proxy.socket" "$pkgdir/usr/lib/systemd/system/dnscrypt-proxy.socket"
    
  install -Dm644 "../LICENSE" "$pkgdir/usr/share/licenses/${pkgname}/LICENSE"
}

# vim:set ts=2 sw=2 et:
