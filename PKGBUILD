# Maintainer: zimbatm <zimbatm@zimbatm.com>
# Maintainer: ShadowKyogre <shadowkyogre.public+aur@gmail.com>
# Maintainer: rmorgans <rick.morgans@gmail.com>
pkgname=direnv
pkgver=2.25.0
pkgrel=1
pkgdesc='a shell extension that manages your environment'
arch=('x86_64' 'i686' 'armv7h' 'aarch64')
url='https://direnv.net'
license=('MIT')
makedepends=('go')
source=("$pkgname-$pkgver.tar.gz::https://github.com/direnv/direnv/archive/v$pkgver.tar.gz")
sha256sums=('f1100333be9045e83285a175a0937b96fd9d211519333234815eb4aa7c719f5b')

_gopackagepath=github.com/direnv/direnv

build() {
  cd "$pkgname-$pkgver"
  export CGO_CPPFLAGS="${CPPFLAGS}"
  export CGO_CFLAGS="${CFLAGS}"
  export CGO_CXXFLAGS="${CXXFLAGS}"
  export CGO_LDFLAGS="${LDFLAGS}"
  export GOFLAGS="-buildmode=pie -trimpath -mod=vendor -modcacherw"
  go build -o $pkgname
}

check() {
  cd "$pkgname-$pkgver"
  go test -v
  bash ./test/direnv-test.bash
  ./test/stdlib.bash
}

package() {
  cd "$pkgname-$pkgver"
  make install DESTDIR="$pkgdir/usr"
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

# vim:set ts=2 sw=2 et:
