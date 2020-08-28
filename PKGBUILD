# Maintainer: w0rty <mawo97 at gmail.com>

pkgname=wgcf
pkgver=2.1.3
pkgrel=1
pkgdesc='Generate WireGuard profile from Cloudflare Warp account'
arch=('x86_64')
url="https://github.com/ViRb3/wgcf"
license=('MIT')
makedepends=('go')
depends=('glibc')
source=("${pkgname}-${pkgver}.tar.gz::${url}/archive/v${pkgver}.tar.gz")
sha256sums=('cfc042ff45d627e0d80e2ea3d0e80551dc72955ada126ad0c1385e2620939d82')

prepare(){
  cd "$pkgname-$pkgver"
  mkdir -p build/
}

build() {
  export GOPATH="$srcdir"/gopath
  cd "$pkgname-$pkgver"
  # Buildflags according to https://wiki.archlinux.org/index.php/Go_package_guidelines#Flags_and_build_options
  export CGO_CPPFLAGS="${CPPFLAGS}"
  export CGO_CFLAGS="${CFLAGS}"
  export CGO_CXXFLAGS="${CXXFLAGS}"
  export CGO_LDFLAGS="${LDFLAGS}"
  go build -o build -trimpath -buildmode=pie -ldflags "-extldflags \"${LDFLAGS}\" -s -w" -modcacherw
}

package() {
  cd "$pkgname-$pkgver"
  install -Dm755 build/$pkgname "$pkgdir"/usr/bin/$pkgname
  install -Dm644 $srcdir/$pkgname-$pkgver/LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
