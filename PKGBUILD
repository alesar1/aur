# Maintainer: orhun <orhunparmaksiz@gmail.com>
# https://github.com/orhun/pkgbuilds

pkgname=god-git
pkgdesc="Utility for simplifying the Git usage"
pkgver=1.9.r0.g1faa5de
pkgrel=1
arch=('any')
url="https://github.com/orhun/god"
license=('GPL3')
depends=('git')
makedepends=('go')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=('git://github.com/orhun/god.git#branch=master')
sha256sums=('SKIP')

pkgver() {
  cd "$srcdir/${pkgname%-git}"
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "$srcdir/${pkgname%-git}"
  go get -d ./...
  go build \
    -gcflags "all=-trimpath=$PWD" \
    -asmflags "all=-trimpath=$PWD" \
    -ldflags "-extldflags $LDFLAGS" \
    -o "${pkgname%-git}" .
}

package() {
  cd "$srcdir/${pkgname%-git}"
  install -Dm755 "${pkgname%-git}" "$pkgdir/usr/local/bin/${pkgname%-git}"
}