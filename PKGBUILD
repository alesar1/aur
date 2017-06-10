# Maintainer: Alan Jenkins <alan.james.jenkins@gmail.com>

pkgname=tflint
pkgver=0.3.6
pkgrel=2
pkgdesc="A linter for Terraform code"
arch=('i686' 'x86_64')
_vendor="github.com/wata727/${pkgname}"
url="https://${_vendor}"
license=('MIT')
depends=('glibc')
makedepends=('go')
source=("https://${_vendor}/releases/download/v${pkgver}/tflint_linux_386.zip")
md5sums=('c12d5132b833350c8a1b91b795da1998')

_vendorpath="gopath/src/$_vendor"

# prepare() {
#   mkdir -p $_vendorpath
#   mv -T $pkgname-$pkgver $_vendorpath
# }

# build() {
#   export GOPATH="$srcdir/gopath"
#   cd $_vendorpath
#   go build -o bin/$pkgname
# }

package() {
  cd $srcdir
  install -Dm755 $pkgname $pkgdir/usr/bin/$pkgname
}
