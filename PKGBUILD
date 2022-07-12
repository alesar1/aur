# Maintainer: PinkD <443657547@qq.com>

pkgname=corplink-rs
_pkgbase=corplink-rs
pkgver=2.1
pkgrel=1
pkgdesc='Corplink client written in Rust'
arch=('i686' 'x86_64')
url='https://github.com/PinkD/corplink-rs'
license=('GPL2')
makedepends=('cargo' 'go')
source=(
  "$pkgname.$pkgver.tar.gz"::"https://github.com/PinkD/corplink-rs/archive/$pkgver.tar.gz"
  "wireguard-go"::"git+https://github.com/PinkD/wireguard-go"
)
sha256sums=(
  '1eb62c1bac926088f9a8306b85dfb26d3db02e5ccb64ff137e5fa4e14ba90f5d'
  'SKIP'
)
backup=(etc/corplink/config.json)

build() {
  cd "$srcdir/$_pkgbase-$pkgver"
  cargo build --release
  cd "$srcdir/wireguard-go"
  make
}

package() {
  cd "$srcdir/$_pkgbase-$pkgver"
  install -Dm 755 "target/release/$pkgname" "$pkgdir/usr/bin/$pkgname"
  install -Dm 600 "config/config.json" "$pkgdir/etc/corplink/config.json"
  install -Dm 644 "systemd/$pkgname.service" "$pkgdir/usr/lib/systemd/system/$pkgname.service"
  install -Dm 644 "systemd/$pkgname@.service" "$pkgdir/usr/lib/systemd/system/$pkgname@.service"
  cd "$srcdir/wireguard-go"
  install -Dm 755 "wireguard-go" "$pkgdir/usr/bin/wg-corplink"
}
