# Maintainer: Jonathon Fernyhough <jonathon+m2x.dev>
# Contributor: krevedko <helllamer-gmail.com>

pkgname=seaweedfs
pkgver=2.12
pkgrel=1
pkgdesc="SeaweedFS is a simple and highly scalable distributed file system"
arch=('i686' 'x86_64' 'aarch64' 'armv7h' 'armv6h' 'arm')
url="https://github.com/chrislusf/seaweedfs"
license=('APACHE')
makedepends=('git' 'go')
source=("$pkgname-$pkgver.tar.gz::$url/archive/$pkgver.tar.gz"
        ldflags.patch)
sha256sums=('6438e8cf9db244b425465622105c427ab0ff58a18a4cbde6409ae37f61d46a14'
            '64db3c34767099aab8ec385c0b6796a2745ed66fa35159df0e8108da31e710db')

prepare() {
  cd $pkgname-$pkgver

  patch -Np1 -i ../ldflags.patch

  export GOPATH="${SRCDEST:-$srcdir}"
  go mod vendor
}

build() {
  export CGO_CPPFLAGS="$CPPFLAGS"
  export CGO_CFLAGS="$CFLAGS"
  export CGO_CXXFLAGS="$CXXFLAGS"
  export CGO_LDFLAGS="$LDFLAGS"
  export GOFLAGS="-buildmode=pie -trimpath -mod=vendor -modcacherw"

  cd $pkgname-$pkgver
  make GOPATH="${SRCDEST:-$srcdir}"
}

package() {
  cd $pkgname-$pkgver
  install -D     weed/weed "$pkgdir"/usr/bin/weed
  install -Dm644 README.md "$pkgdir"/usr/share/doc/$pkgname/README.md
  install -Dm644 LICENSE   "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}
