# Maintainer: ml <ml@visu.li>
pkgname=golang-mockery
_pkgname=${pkgname##golang-}
pkgver=2.1.0
pkgrel=1
pkgdesc='A mock code autogenerator for golang'
arch=('x86_64')
url='https://github.com/vektra/mockery'
license=('BSD')
depends=('glibc')
makedepends=('go')
source=("${url}/archive/v${pkgver}/${pkgname}-${pkgver}.tar.gz")
sha256sums=('44245c5914b49c22c215343f8c7fc2bae1465fd8d866c29120241997b1a9dd6b')

prepare() {
  cd "${_pkgname}-${pkgver}"
  go mod download
}

build() {
  cd "${_pkgname}-${pkgver}"
  export CGO_LDFLAGS="$LDFLAGS"
  export CGO_CFLAGS="$CFLAGS"
  export CGO_CPPFLAGS="$CPPFLAGS"
  export CGO_CXXFLAGS="$CXXFLAGS"
  export GOFLAGS='-buildmode=pie -trimpath -modcacherw -mod=readonly'
  go build -o bin/${_pkgname} -ldflags "-X github.com/vektra/mockery/mockery.SemVer=${pkgver}"
}

check() {
  cd "${_pkgname}-${pkgver}"
  go test ./...
}

package() {
  cd "${_pkgname}-${pkgver}"
  install -Dm755 bin/${_pkgname} -t "${pkgdir}/usr/bin"
  install -Dm755 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
