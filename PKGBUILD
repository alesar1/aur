# Maintainer: ml <ml@visu.li>
pkgname=helmsman
pkgver=3.4.1
pkgrel=1
pkgdesc='Helm Charts as Code'
arch=('x86_64' 'i686')
url='https://github.com/Praqma/helmsman'
license=('MIT')
depends=('helm-diff' 'kubectl')
optdepends=('ruby-hiera-eyaml: backend for secret encryption')
makedepends=('go')
source=("${pkgname}-${pkgver}.tar.gz::${url}/archive/v${pkgver}.tar.gz")
sha256sums=('b79508f64bc7b56eadba41a45ff0e4c6f12990210d464173bbba441635edebdb')

prepare() {
  cd "${pkgname}-${pkgver}"
  go mod download
}

build() {
  cd "${pkgname}-${pkgver}"
  export CGO_ENABLED=1
  export CGO_LDFLAGS="$LDFLAGS"
  export CGO_CFLAGS="$CFLAGS"
  export CGO_CPPFLAGS="$CPPFLAGS"
  export CGO_CXXFLAGS="$CXXFLAGS"
  export GOFLAGS='-buildmode=pie -modcacherw -mod=readonly -trimpath'
  # man makepkg(8), https://github.com/Praqma/helmsman/blob/master/Makefile
  _date=$(date --utc --date="@${SOURCE_DATE_EPOCH}" +'%d%m%y')
  go build -o "$pkgname" -ldflags "-X main.version=v${pkgver}-${_date}" ./cmd/helmsman
}

check() {
  cd "${pkgname}-${pkgver}"
  go test ./...
}

package() {
  cd "${pkgname}-${pkgver}"
  install -Dm755 "$pkgname" -t "${pkgdir}/usr/bin"
  install -Dm644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
