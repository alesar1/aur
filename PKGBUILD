# Maintainer: ml <>
pkgname=sonobuoy
pkgver=0.56.0
pkgrel=1
pkgdesc='Diagnostic tool for Kubernetes clusters'
arch=('x86_64')
url='https://github.com/vmware-tanzu/sonobuoy'
license=('Apache')
depends=('glibc')
optdepends=(
  'docker: sonobuoy images subcommand'
  'kubectl: advances workflows')
makedepends=('go' 'git')
source=("$url/archive/v$pkgver/$pkgname-$pkgver.tar.gz")
sha256sums=('bfaa1d09df8b2f0590b57d50a9a2b556b712231519ae22a7bb71cd6cf5be8b16')

build() {
  local _commit _defines
  _commit=$(bsdcat "$pkgname-$pkgver.tar.gz" | git get-tar-commit-id)
  cd "$pkgname-$pkgver"
  export CGO_ENABLED=1
  export CGO_LDFLAGS="$LDFLAGS"
  export CGO_CFLAGS="$CFLAGS"
  export CGO_CPPFLAGS="$CPPFLAGS"
  export CGO_CXXFLAGS="$CXXFLAGS"
  export GOFLAGS='-buildmode=pie -modcacherw -trimpath'
  _defines=(
    "github.com/vmware-tanzu/sonobuoy/pkg/buildinfo.Version=v$pkgver"
    "github.com/vmware-tanzu/sonobuoy/pkg/buildinfo.GitSHA=$_commit"
  )
  go build -o "$pkgname" -ldflags "-linkmode=external ${_defines[*]/#/-X=}" main.go
}

check() {
  cd "$pkgname-$pkgver"
  GODEBUG=x509ignoreCN=0 go test -ldflags=-linkmode=external ./cmd/... ./pkg/...
}

package() {
  cd "$pkgname-$pkgver"
  install -Dm755 "$pkgname" -t "$pkgdir/usr/bin"
}
