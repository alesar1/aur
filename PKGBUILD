# Maintainer: Chmouel Boudjnah <chmouel@chmouel.com>

pkgname=tkn-pac
pkgver=0.5.3
pkgrel=1
pkgdesc="CLI for interacting with Openshift Pipelines as Code"
arch=('x86_64')
url="https://github.com/openshift-pipelines/pipelines-as-code"
license=('Apache')
makedepends=('go')
depends=('glibc' 'kubectl' 'tekton-cli')
source=( ${pkgname}_${pkgver}-${pkgrel}.tar.gz::https://github.com/openshift-pipelines/pipelines-as-code/archive/refs/tags/${pkgver}.tar.gz )
sha512sums=('d18289b385182a6a8c612fdeb1012753e3748458913f29103b02eab2b12cbd030cbe02bce03ec46686b71fe52dc709fbead9beaeccbdcc4339ab50bff40cf553')

build() {
  cd "pipelines-as-code-${pkgver}/cmd/tkn-pac"
  export CGO_CPPFLAGS="${CPPFLAGS}"
  export CGO_CFLAGS="${CFLAGS}"
  export CGO_CXXFLAGS="${CXXFLAGS}"
  export CGO_LDFLAGS="${LDFLAGS}"
  export GOFLAGS="-buildmode=pie -trimpath -mod=readonly -modcacherw"
  go build -ldflags="-linkmode=external -X github.com/openshift-pipelines/pipelines-as-code/pkg/params/version.Version=${pkgver}" .
  chmod +x ./tkn-pac
  ./tkn-pac completion bash > "${pkgname}-completion.bash"
  ./tkn-pac completion zsh > "${pkgname}-completion.zsh"
}

package() {
  cd "pipelines-as-code-${pkgver}/cmd/tkn-pac"
  install -Dsm755 ./tkn-pac "${pkgdir}/usr/bin/tkn-pac"
  install -Dm644 "${pkgname}-completion.bash" "${pkgdir}/usr/share/bash-completion/completions/${pkgname}"
  install -Dm644 "${pkgname}-completion.zsh" "${pkgdir}/usr/share/zsh/site-functions/_${pkgname}"
}
