# Maintainer: Yoan Blanc <yoan@dosimple.ch>
# Contributor: JR Boyens <jboyens@fooninja.org>
# Contributor: Dmitri Goutnik <dg@syrec.org>

pkgname=pgcenter
pkgver=0.9.0
pkgrel=1
pkgdesc='Command-line admin tool for observing and troubleshooting Postgres'
arch=('x86_64')
url='https://github.com/lesovsky/pgcenter'
license=('custom:BSD3')
makedepends=('go' 'git')
source=("${pkgname}-${pkgver}.tar.gz::${url}/archive/v${pkgver}.tar.gz")
sha256sums=('99f25e8242f0bd888526735052d2aa5ae4f21b33f7eb9d0ee865b73895d9a0a6')

prepare() {
  cd ${pkgname}-${pkgver}
  go mod download
}

build() {
  export CGO_CPPFLAGS="${CPPFLAGS}"
  export CGO_CFLAGS="${CFLAGS}"
  export CGO_CXXFLAGS="${CXXFLAGS}"
  export CGO_LDFLAGS="${LDFLAGS}"
  export GOFLAGS="-buildmode=pie -trimpath -ldflags=-linkmode=external -mod=readonly -modcacherw"

  _commit=$(zcat "${pkgname}-${pkgver}.tar.gz" | git get-tar-commit-id)
  _flags=(
    -installsuffix cgo
    -X=main.gitTag=v${pkgver}
    -X=main.gitCommit=${_commit::7}
    -X=main.gitBranch=master
  )

  cd ${pkgname}-${pkgver}
  go build \
    -o ${pkgname} \
    -trimpath \
    -buildmode=pie \
    -mod=readonly \
    -modcacherw \
    -ldflags "${_flags[*]} -extldflags=\"${LDFLAGS}\"" \
    ./cmd
}

package() {
  cd ${pkgname}-${pkgver}
  install -Dm755 ${pkgname} "${pkgdir}/usr/bin/${pkgname}"
  install -Dm644 COPYRIGHT "${pkgdir}/usr/share/licenses/${pkgname}/COPYRIGHT"
}

# vim:set ts=2 sw=2 et:
