# Maintainer: Fredy García <frealgagu at gmail dot com>
# Maintainer: Maxim Baz <$pkgname at maximbaz dot com>

_pkgauthor=GoogleContainerTools
_commit=9eb0dfc1bf634b97462c66b4dfb80e4cea378ade
pkgname=skaffold
pkgver=0.19.0
pkgrel=2
pkgdesc="A command line tool that facilitates continuous development for Kubernetes applications"
arch=("x86_64")
url="https://github.com/${_pkgauthor}/${pkgname}"
license=("Apache")
depends=("docker" "kubectl-bin")
makedepends=("go-pie")
optdepends=("google-cloud-sdk: To use GKE"
            "minikube: To use Minikube")
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/${_pkgauthor}/${pkgname}/archive/v${pkgver}.tar.gz"
        "build_info.patch")
sha256sums=("48fee7f29e6dac4a301d3facf607796b04b7d1ee0b433fd083e3100bf38f7a38"
            "af5bd6a9a1e9e2f7d941ffdbd4aebd37e32bb390be03c52a578f3931997f220d")

prepare() {
  mkdir -p "${srcdir}/gopath/src/github.com/${_pkgauthor}"
  ln -rTsf "${srcdir}/${pkgname}-${pkgver}" "${srcdir}/gopath/src/github.com/${_pkgauthor}/${pkgname}"

  cd "${srcdir}/${pkgname}-${pkgver}"
  patch -Np1 -i "${srcdir}/build_info.patch"
}

build() {
  export GOPATH="${srcdir}/gopath"
  cd "${srcdir}/gopath/src/github.com/${_pkgauthor}/${pkgname}"
  VERSION="v${pkgver}" COMMIT="${_commit}" TREE_STATE="clean" make install
}

package() {
  install -Dm755 "${srcdir}/gopath/bin/${pkgname}" "${pkgdir}/usr/bin/${pkgname}"
}
