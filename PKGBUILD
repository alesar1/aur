# Maintainer: tdewolff <tacodewolff@gmail.com>
# Maintainer: 4679kun <4679kun@outlook.com>
# Maintainer: meepzh <meep.aur@meepzh.com>

pkgname=minify
pkgver=2.9.29
pkgrel=2
pkgdesc="Minifier CLI for HTML, CSS, JS, JSON, SVG and XML"
arch=('x86_64')
url="https://github.com/tdewolff/minify"
license=('MIT')
makedepends=('go')
optdepends=('bash-completion: command-line autocomplete with bash')
source=("$url/archive/v$pkgver.tar.gz")
sha256sums=('17b072c5f95e027550f181bddbd6729de9945b1b086954845d9f42343d6bb703')

prepare() {
  cd "$pkgname-$pkgver"
  mkdir -p build/
}

build() {
  cd "$pkgname-$pkgver"
  export CGO_CPPFLAGS="${CPPFLAGS}"
  export CGO_CFLAGS="${CFLAGS}"
  export CGO_CXXFLAGS="${CXXFLAGS}"
  export CGO_LDFLAGS="${LDFLAGS}"
  export GOFLAGS="-buildmode=pie -trimpath -mod=readonly -modcacherw"
  go build -ldflags "-X 'main.Version=v$pkgver'" -o build ./cmd/minify
}

check() {
  cd "$pkgname-$pkgver"
  go test ./...
}

package() {
  cd "$pkgname-$pkgver"
  install -Dm755 "build/$pkgname" "$pkgdir/usr/bin/$pkgname"
  install -Dm644 "LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  install -Dm644 "cmd/minify/bash_completion" "$pkgdir/usr/share/bash-completion/completions/$pkgname"
  source cmd/minify/bash_completion
}

