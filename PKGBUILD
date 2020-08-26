# Maintainer: Caltlgin Stsodaat <contact@fossdaily.xyz>

pkgname=urldozer
pkgver=0.1
pkgrel=1
pkgdesc='Perform operations on URLs'
arch=('x86_64')
url='https://github.com/offensivedev/urldozer'
license=('Unknown')
makedepends=('go')
provides=("${pkgname}")
source=("${pkgname}-${pkgver}.tar.gz::${url}/archive/v${pkgver}.tar.gz")
sha256sums=('bdae68f064c54690a91213195f6078a28c4379995831a4fdbc5e9b63861f8aa8')

build() {
  export CGO_CPPFLAGS="${CPPFLAGS}"
  export CGO_CFLAGS="${CFLAGS}"
  export CGO_CXXFLAGS="${CXXFLAGS}"
  export CGO_LDFLAGS="${LDFLAGS}"
  export GOFLAGS="-buildmode=pie -trimpath -ldflags=-linkmode=external -mod=readonly -modcacherw"
  export GOPATH="${srcdir}"

  cd "${pkgname}-${pkgver}"
  go build -v -o "${pkgname}" .
}

package() {
  cd "${pkgname}-${pkgver}"
  install -Dm755 -t "${pkgdir}/usr/bin" "${pkgname}"
  install -Dm644 -t "${pkgdir}/usr/share/doc/${pkgname}" 'README.md'
}

# vim: ts=2 sw=2 et:
