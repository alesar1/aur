# Maintainer: Daniel Milde <daniel at milde dot cz>
# Co-maintainer: Leonidas Spyropoulos <artafinde at gmail dot com>

pkgname=gdu
pkgver=5.11.0
pkgrel=1
license=('MIT')
pkgdesc="Fast disk usage analyzer"
depends=('glibc')
makedepends=('go')
arch=('x86_64')
url="https://github.com/dundee/gdu"
source=(${pkgname}-${pkgver}.tar.gz::"https://github.com/dundee/gdu/archive/v${pkgver}.tar.gz")
sha256sums=('bf47786642cae3359d918758f4527a10a80e01805566bec607bc8c2d8f35d4c6')

prepare(){
  cd "$pkgname-$pkgver"
  mkdir -p dist/
}

build() {
  cd "$pkgname-$pkgver"
  local _DATE=$(date +'%Y-%m-%d')
  local _BUILDINFO="-X 'github.com/dundee/gdu/v5/build.Version=${pkgver}' \
                    -X 'github.com/dundee/gdu/v5/build.User=${PACKAGER}' \
                    -X 'github.com/dundee/gdu/v5/build.Time=${_DATE}'"
  go build \
    -trimpath \
    -buildmode=pie \
    -mod=readonly \
    -modcacherw \
    -ldflags "-linkmode external -extldflags \"${LDFLAGS}\" ${_BUILDINFO}" \
    -o dist/gdu \
    github.com/dundee/gdu/v5/cmd/gdu
}

check() {
  cd "$pkgname-$pkgver"
  go test ./...
}

package() {
  cd "$pkgname-$pkgver"
  install -Dm755 dist/$pkgname "${pkgdir}/usr/bin/$pkgname"
  install -Dm644 gdu.1    "${pkgdir}/usr/share/man/man1/$pkgname.1"
  install -D -m644 LICENSE.md  "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

# vim:set ts=2 sw=2 et:
