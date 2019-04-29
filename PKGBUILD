# Maintainer: Chocobo1 <chocobo1 AT archlinux DOT net>

pkgname=chihaya
pkgver=1.0.2
pkgrel=1
pkgdesc="A customizable, multi-protocol BitTorrent tracker"
arch=('i686' 'x86_64')
url="https://github.com/chihaya/chihaya"
license=('BSD')
depends=('glibc')
makedepends=('go-pie')
backup=('etc/chihaya.json')
source=("https://github.com/chihaya/chihaya/archive/v$pkgver.tar.gz"
        "chihaya.service::https://aur.archlinux.org/cgit/aur.git/plain/chihaya.service?h=chihaya-git"
        "chihaya.sysusers::https://aur.archlinux.org/cgit/aur.git/plain/chihaya.sysusers?h=chihaya-git")
sha256sums=('17207aeaf1887befba4a100df4e860000fe2e4747ab0c518aad98005606b05fd'
            'SKIP'
            'SKIP')


build() {
  cd "$pkgname-$pkgver"

  GO111MODULE=on \
    go build \
      -ldflags "-extldflags $LDFLAGS" \
      ./cmd/chihaya
}

check() {
  cd "$pkgname-$pkgver"

  go test -bench $(go list ./...)
}

package() {
  cd "$pkgname-$pkgver"

  install -Dm755 "chihaya" "$pkgdir/usr/bin/chihaya"

  install -Dm644 "$srcdir/chihaya.service" "$pkgdir/usr/lib/systemd/system/chihaya.service"
  install -Dm644 "$srcdir/chihaya.sysusers" "$pkgdir/usr/lib/sysusers.d/chihaya.conf"

  install -Dm644 "example_config.json" "$pkgdir/etc/chihaya.json"

  install -Dm644 "LICENSE" "$pkgdir/usr/share/licenses/chihaya/LICENSE"
}
