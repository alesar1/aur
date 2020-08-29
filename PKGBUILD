# Maintainer: Fredy García <frealgagu at gmail dot com>
# Maintainer: Maxim Baz <${pkgname} at maximbaz dot com>
# Contributor: Stefan Cocora <stefan dot cocora at gmail dot com>

pkgname=skaffold
pkgver=1.13.2
pkgrel=1
pkgdesc="A command line tool that facilitates continuous development for Kubernetes applications"
arch=("x86_64")
url="https://github.com/GoogleContainerTools/${pkgname}"
license=("Apache")
depends=("docker" "kubectl")
makedepends=("go")
optdepends=(
  "google-cloud-sdk: To use GKE"
  "minikube: To use Minikube"
)
source=(
  "${pkgname}-${pkgver}.tar.gz::https://github.com/GoogleContainerTools/${pkgname}/archive/v${pkgver}.tar.gz"
  "build_info.patch"
)
sha256sums=(
  "423c7c2ded124be77b54e7c9df0ad380bcbee373b8488d0fdbc1c9a8e8f2e6cc"
  "e90797011d2f79c79a6b184a5e9c35c4e5c582622d075b0022675b96fccefc46"
)
_commit="da6e4719a192c60fe7c141561eb2f58fde79faa8"

prepare() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  patch -Np1 -i "${srcdir}/build_info.patch"

  rm -rf "${srcdir}/gopath"
  mkdir -p "${srcdir}/gopath/bin"
  mkdir -p "${srcdir}/gopath/src/github.com/GoogleContainerTools"
  ln -rTsf "${srcdir}/${pkgname}-${pkgver}" "${srcdir}/gopath/src/github.com/GoogleContainerTools/${pkgname}"
}

build() {
  cd "${srcdir}/gopath/src/github.com/GoogleContainerTools/${pkgname}"
  export GOPATH="${srcdir}/gopath"
  export PATH="${PATH}:${GOPATH}/bin"
  export VERSION="v${pkgver}"
  export COMMIT="${_commit}"
  export TREE_STATE="clean"
  export CGO_CPPFLAGS="${CPPFLAGS}"
  export CGO_CFLAGS="${CFLAGS}"
  export CGO_CXXFLAGS="${CXXFLAGS}"
  export CGO_LDFLAGS="${LDFLAGS}"
  export GOFLAGS="-buildmode=pie -mod=readonly -modcacherw -x -v"
  make install

  # To avoid issues deleting directories next time
  go clean --modcache
}

package() {
  install -Dm755 "${srcdir}/gopath/bin/${pkgname}" "${pkgdir}/usr/bin/${pkgname}"
}
