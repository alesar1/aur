# Maintainer: George Rawlinson <grawlinson@archlinux.org>

pkgname=passphrase2pgp
pkgver=1.2.0
pkgrel=1
pkgdesc="Predictable, passphrase-based PGP key generator"
arch=('x86_64')
url="https://github.com/skeeto/passphrase2pgp"
license=('Unlicense')
depends=('glibc')
makedepends=('git' 'go')
checkdepends=('bash' 'gnupg' 'openssh')
options=('!lto')
_commit='89270b52ec9eb7d922b8c5e20912c9b9f1bd3d8a'
source=("$pkgname::git+$url.git#commit=$_commit")
b2sums=('SKIP')

pkgver() {
  cd "$pkgname"

  git describe --tags | sed 's/^v//'
}

prepare() {
  cd "$pkgname"

  # download dependencies
  go mod download

  # prevent recompilation during tests
  sed \
    -i 'test.bash' \
    -e '/go build/d'
}

build() {
  cd "$pkgname"

  # set Go flags
  export CGO_CPPFLAGS="${CPPFLAGS}"
  export CGO_CFLAGS="${CFLAGS}"
  export CGO_CXXFLAGS="${CXXFLAGS}"

  go build -v \
    -trimpath \
    -buildmode=pie \
    -mod=readonly \
    -modcacherw \
    -ldflags "-linkmode external -extldflags ${LDFLAGS}" \
    .
}

check() {
  cd "$pkgname"

  bash test.bash
}

package() {
  cd "$pkgname"

  # binary
  install -vDm755 -t "$pkgdir/usr/bin" "$pkgname"

  # documentation
  install -vDm644 -t "$pkgdir/usr/share/doc/$pkgname" README.md
}
