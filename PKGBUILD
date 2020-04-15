# Maintainer: ml <ml@visu.li>
pkgname=helmsman
pkgver=3.3.0
pkgrel=1
pkgdesc='Helm Charts as Code'
arch=('x86_64' 'i686')
url='https://github.com/Praqma/helmsman'
license=('MIT')
depends=('helm' 'kubectl')
optdepends=('ruby-hiera-eyaml: backend for secret encryption')
makedepends=('go')
source=("${pkgname}-${pkgver}.tar.gz::${url}/archive/v${pkgver}.tar.gz")
sha256sums=('e9116122751a6448129d2e14f01b2777f66f02d534c5985bb5dc16eedca0387e')

build() {
  cd "${pkgname}-${pkgver}"
  export CGO_LDFLAGS="$LDFLAGS"
  export GOFLAGS='-buildmode=pie -modcacherw -trimpath'
  # https://github.com/Praqma/helmsman/blob/master/Makefile
  # man makepkg(8)
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
