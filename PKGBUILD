# Maintainer: Martin Andersson <m.t.andersson at gmail dot com>

pkgname="gphotos-uploader-cli"
pkgver="1.2.0"
pkgrel=2
pkgdesc='Command line tool to mass upload media folders to your Google Photos account(s).'

url="https://github.com/gphotosuploader/gphotos-uploader-cli"
arch=('x86_64')
license=('MIT')

makedepends=(
  'go'
)

depends=()

source=(
 "https://github.com/gphotosuploader/gphotos-uploader-cli/archive/v${pkgver}.tar.gz"
)

sha256sums=(
  'f9220c79945eb5a1ecb1ea5101aefa98febd9e4ad554e3fb9a2eda174c0c0d67'
)

build() {
  export GOPATH="$srcdir"/gopath
  export CGO_CPPFLAGS="${CPPFLAGS}"
  export CGO_CFLAGS="${CFLAGS}"
  export CGO_CXXFLAGS="${CXXFLAGS}"
  export CGO_LDFLAGS="${LDFLAGS}"
  export CGO_ENABLED=1
  
  cd "$srcdir/$pkgname-$pkgver"
  LDFLAGS="-extldflags \"${LDFLAGS}\"" \
    make VERSION=$pkgver DESTDIR="$pkgdir" PREFIX="/usr" build
}

package() {
  install -Dm644 "${pkgname}-${pkgver}/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  install -Dm755 "${pkgname}-${pkgver}/${pkgname}" -t "${pkgdir}/usr/bin"
}
