# Maintainer: Yusuke Miyazaki <miyazaki.dev (at) gmail.com>
pkgname=mackerel-agent
pkgver=0.52.0
pkgrel=1
pkgdesc="A revolutionary new kind of application performance management"
arch=('i686' 'x86_64')
url="https://github.com/mackerelio/mackerel-agent"
license=('Apache')
depends=('glibc')
conflicts=('mackerel-agent-git')
makedepends=('go')
backup=('etc/mackerel-agent/mackerel-agent.conf')
source=("https://github.com/mackerelio/${pkgname}/archive/v${pkgver}.tar.gz")
md5sums=('a0d726a22ea1049d6824d56523df070b')

build() {
  cd "$srcdir/$pkgname-$pkgver"
  export GOPATH="$srcdir/go"
  mkdir -p "$GOPATH"
  make build
}

check() {
  cd "$srcdir/$pkgname-$pkgver"
  build/mackerel-agent version
}

package() {
  install -Dm755 "$srcdir/$pkgname-$pkgver/build/mackerel-agent" "$pkgdir/usr/bin/mackerel-agent"
  install -Dm644 "$srcdir/$pkgname-$pkgver/mackerel-agent.sample.conf" "$pkgdir/etc/mackerel-agent/mackerel-agent.conf"
  install -Dm644 "$srcdir/$pkgname-$pkgver/packaging/deb-systemd/debian/mackerel-agent.service" "$pkgdir/usr/lib/systemd/system/mackerel-agent.service"
}
