# Maintainer: Alan Jenkins <alan.james.jenkins@gmail.com>

pkgname=tflint
pkgver=0.30.0
pkgrel=1
pkgdesc="A linter for Terraform code"
arch=('any')
_vendor="github.com/terraform-linters/${pkgname}"
url="https://${_vendor}"
license=('MIT')
depends=('glibc')
makedepends=('go')
source=("$pkgname-$pkgver-source.tar.gz::https://${_vendor}/archive/v${pkgver}.tar.gz")
sha256sums=('b9f49c96f2457427140507dec17d24821d73acf1d76dd9656e17827e87b479f2')
_vendorpath="gopath/src/$_vendor"

build() {
  cd $srcdir/tflint-${pkgver}
  go build -o tflint-bin
}

package() {
  install -Dm755 $srcdir/tflint-${pkgver}/tflint-bin $pkgdir/usr/bin/$pkgname
}
