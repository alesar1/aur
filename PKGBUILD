# Maintainer: Thomas Gläßle <t_glaessle@gmx.de>

pkgname=tty-share
pkgver=2.1.0
pkgrel=1
pkgdesc="Shares terminal session with no setup on remote end (browser)"
arch=('any')
url="https://github.com/elisescu/tty-share"
license=('MIT')
depends=()
source=("${url}/archive/v${pkgver}.zip")
md5sums=('da4adbb20543f381d012f6b6b7c03046')
makedepends=('go-pie')

build() {
  cd "$srcdir/$pkgname-$pkgver"

  go build -mod=vendor -trimpath -ldflags "-X main.version=${pkgver} --extldflags ${LDFLAGS}" -o tty-share .
}

package() {
  cd "$srcdir/$pkgname-$pkgver"

  mkdir -p "$pkgdir/usr/bin" "$pkgdir/usr/share/licenses/$pkgname"
  install -m755 tty-share "$pkgdir/usr/bin"
  install -m644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
