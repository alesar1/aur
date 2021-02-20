# Maintainer: ml <>
# Contributor: Fredy García <frealgagu at gmail dot com>
pkgname=kaniko
pkgver=1.3.0
pkgrel=2
pkgdesc='Build Container Images In Kubernetes'
arch=('x86_64')
url="https://github.com/GoogleContainerTools/kaniko"
license=('Apache')
depends=('glibc')
optdepends=('bash: run_in_docker.sh script')
makedepends=('go')
source=("$url/archive/v$pkgver/$pkgname-$pkgver.tar.gz")
sha256sums=('cf2d915aeb5e82ab2f4b241d1b8b251938df57f7b89c610bf51a1a4eda40ca3c')

build() {
  cd "$pkgname-$pkgver"
  export CGO_ENABLED=1
  export CGO_CFLAGS="$CFLAGS"
  export CGO_CPPFLAGS="$CPPFLAGS"
  export CGO_CXXFLAGS="$CXXFLAGS"
  export CGO_LDFLAGS="$LDFLAGS"
  export GOFLAGS='-buildmode=pie -mod=vendor -modcacherw'
  go build -trimpath -o . -ldflags="-linkmode=external -X=github.com/GoogleContainerTools/kaniko/pkg/version.version=v$pkgver" ./cmd/...
}

check() {
  cd "$pkgname-$pkgver"
  # custom umask values make tests fail. set to default
  umask 0022
  go test -short ./{cmd,pkg}/...
}

package() {
  cd "$pkgname-$pkgver"
  install -Dm755 executor warmer -t "$pkgdir/usr/lib/$pkgname"
  install -dm755 "$pkgdir/usr/bin"
  ln -sT /usr/lib/"$pkgname"/executor "$pkgdir/usr/bin/$pkgname"
  install -Dm644 README.md -t "$pkgdir/usr/share/doc/$pkgname"
  cp -a docs examples deploy run_in_docker.sh -t "$pkgdir/usr/share/doc/$pkgname"
}
