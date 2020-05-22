# Maintainer: ml <ml@visu.li>
# TODO package as plugin
pkgname=krew
pkgver=0.3.4
pkgrel=4
pkgdesc='Plugin manager for kubectl command-line tool'
arch=('x86_64' 'aarch64' 'arm' 'armv6h' 'armv7h')
url='https://krew.sigs.k8s.io/'
license=('Apache')
# grep -rF exec.Command
depends=('kubectl' 'git')
makedepends=('go' 'gzip')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/kubernetes-sigs/krew/archive/v${pkgver}.tar.gz")
sha256sums=('dc96db650fb7f973a6a3fcf6ce35bb6ba1218bca9c3858459d5cacc2c321113c')

prepare() {
  cd "${pkgname}-${pkgver}"
  go mod download
}

build() {
  local _commit=
  _commit=$(zcat "${pkgname}-${pkgver}.tar.gz" | git get-tar-commit-id)
  local -a x=(
    sigs.k8s.io/krew/internal/version.gitCommit="${_commit:?}"
    sigs.k8s.io/krew/internal/version.gitTag="v${pkgver}"
  )
  cd "${pkgname}-${pkgver}"
  export CGO_LDFLAGS="$LDFLAGS"
  export CGO_CFLAGS="$CFLAGS"
  export CGO_CPPFLAGS="$CPPFLAGS"
  export CGO_CXXFLAGS="$CXXFLAGS"
  export GOFLAGS='-buildmode=pie -trimpath -modcacherw -mod=readonly'
  go build -o . -ldflags "${x[*]/#/-X=}" ./cmd/{krew,validate-krew-manifest}
}

check() {
  cd "${pkgname}-${pkgver}"
  # unit- and integrationtests
  KREW_BINARY="${PWD}/${pkgname}" go test ./...
  # check that binary includes commit id and pkgver
  if ! [[ $(grep -Fcm 2 -e "$_commit" -e "v${pkgver}" -- krew) -eq 2 ]]; then
    echo "commit id ($_commit) or version ($pkgver) not found in the binary" >&2
    return 1
  fi
}

package() {
  cd "${pkgname}-${pkgver}"
  install -Dm755 krew validate-krew-manifest -t "${pkgdir}/usr/bin"
}
