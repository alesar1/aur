# Maintainer: Yoan Blanc <yoan@dosimple.ch>
# GPG: https://keybase.io/greut/pgp_keys.asc

pkgname='eclint'
pkgver=0.3.5
pkgrel=1
pkgdesc='EditorConfig linter'
url='https://gitlab.com/greut/eclint'
arch=('x86_64' 'i686')
license=('MIT')

depends=('glibc')
makedepends=('git' 'go' 'gzip')
checkdepends=('git' 'go')
optdepends=('git: Git repository support')
source=(
  "${url}/-/releases/v${pkgver}/downloads/eclint-${pkgver}.tar.gz"
  "${url}/-/releases/v${pkgver}/downloads/eclint-${pkgver}.tar.gz.sig"
)


sha256sums=('8fb7634ebc072ff169cc7e67564febcef824caab473a44a180a01b4a16ab3fb1'
            'SKIP')
validpgpkeys=('9E2D407EAFEE50863F42B9D16058CF4574298812')

build() {
  export CGO_LDFLAGS="$LDFLAGS"
  export GOFLAGS='-buildmode=pie -trimpath -modcacherw'
  _commit=$(zcat "${pkgname}-${pkgver}.tar.gz" | git get-tar-commit-id)
  _flags=(
    -X=main.version=v$pkgver
    -X=main.commit=${_commit::7}
    -X=main.date=$(date -u -d "@${SOURCE_DATE_EPOCH}" +'%FT%TZ')
  )
  go build -o "$pkgname" -ldflags="${_flags[*]}" ./cmd/"$pkgname"
}

check() {
  go test -v ./...
}

package() {
  install -Dm755 "$pkgname" "$pkgdir"/usr/bin/"$pkgname"
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
