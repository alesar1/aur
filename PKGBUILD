# Maintainer: Luis Pérez <luis.perez@protonmail.com>

pkgname=mmark
pkgver=2.2.19
pkgrel=1
pkgdesc='A powerful markdown processor in Go geared towards the IETF'
arch=('x86_64')
url="https://github.com/mmarkdown/mmark"
license=('BSD')
makedepends=(
             'go'
             'git'
)
source=("$url/archive/v$pkgver.tar.gz")
sha256sums=('1f24ef62fcdf3bbe36880aef4f8b5f4cc623884f399200987aa1b1be9a5a5326')

prepare(){
  cd "$pkgname-$pkgver"
  mkdir -p build/
}

build() {
  cd "$pkgname-$pkgver"
  export CGO_CPPFLAGS="${CPPFLAGS}"
  export CGO_CFLAGS="${CFLAGS}"
  export CGO_CXXFLAGS="${CXXFLAGS}"
  export CGO_LDFLAGS="${LDFLAGS}"
  export GOFLAGS="-buildmode=pie -trimpath -ldflags=-linkmode=external -mod=readonly -modcacherw"
  go build -o build
}

package() {
  cd "$pkgname-$pkgver"
  install -Dm755 build/$pkgname "$pkgdir"/usr/bin/$pkgname
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
