# Maintainer: Aurel Canciu <aurelcanciu@gmail.com>
# Maintainer: Hidde Beydals <hello@hidde.co>

pkgname=flux-go
pkgver=0.5.1
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
  e7574e897d4edb43eed5fcc588b9f11d0cf38c19ad4de22e0b07ba364fd5e2b2
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
