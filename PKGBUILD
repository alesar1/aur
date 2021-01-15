# Maintainer: Aurel Canciu <aurelcanciu@gmail.com>
# Maintainer: Hidde Beydals <hello@hidde.co>

pkgname=flux-go
pkgver=0.6.1
pkgrel=1
pkgdesc="Open and extensible continuous delivery solution for Kubernetes"
url="https://fluxcd.io/"
arch=("x86_64" "armv6h" "armv7h" "aarch64")
license=("APACHE")
provides=("flux-bin")
conflicts=("flux-bin")
replaces=("flux-cli")
depends=("glibc")
makedepends=("go")
optdepends=("kubectl")
source=(
  "$pkgname-$pkgver.tar.gz::https://github.com/fluxcd/flux2/archive/v$pkgver.tar.gz"
)
sha256sums=(
  2227e18d8374e26acd54c7e5eaac5d89bafe9da8b0e08761f71b7df0c9421f5b
)

build() {
  cd "flux2-$pkgver"
  export CGO_LDFLAGS="$LDFLAGS"
  export CGO_CFLAGS="$CFLAGS"
  export CGO_CXXFLAGS="$CXXFLAGS"
  export CGO_CPPFLAGS="$CPPFLAGS"
  export GOFLAGS="-buildmode=pie -trimpath -ldflags=-linkmode=external -mod=readonly -modcacherw"
  go build -ldflags "-X main.VERSION=$pkgver" -o flux-bin ./cmd/flux
}

check() {
  cd "flux2-$pkgver"
  make test
}

package() {
  cd "flux2-$pkgver"
  install -Dm755 flux-bin "$pkgdir/usr/bin/flux"
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
