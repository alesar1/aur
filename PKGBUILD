# Maintainer: Yusuke Miyazaki <miyazaki.dev (at) gmail.com>
pkgname=mackerel-agent
pkgver=0.71.1
pkgrel=1
pkgdesc="A revolutionary new kind of application performance management"
arch=('i686' 'x86_64')
url="https://github.com/mackerelio/mackerel-agent"
license=('Apache')
depends=('glibc')
conflicts=('mackerel-agent-git')
makedepends=('go-pie')
backup=('etc/mackerel-agent/mackerel-agent.conf')
source=("https://github.com/mackerelio/${pkgname}/archive/v${pkgver}.tar.gz")
md5sums=('929a266a2d9130c5a1078eb4e2af2c03')

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
