# Maintainer: Arturo Penen <apenen@gmail.com>

pkgname=kyma
pkgver=1.17.1
pkgrel=0
pkgdesc='Provides a set of commands you can use to install, manage, and test Kyma.'
arch=('x86_64')
url='https://github.com/kyma-project/cli'
license=('Apache')
makedepends=('go')
source=("$pkgname-$pkgver.tar.gz::https://github.com/kyma-project/cli/archive/$pkgver.tar.gz")
sha256sums=('9f00b68d8448c17b37679f6c4c54755df37a40c58c3acc8b6dbcea2c1117597c')

build() {
  cd cli-$pkgver
  export VERSION=$pkgver
  make build
}

package() {
  install -Dm 755 "${srcdir}/cli-$pkgver/bin/kyma-linux" "${pkgdir}/usr/bin/kyma"

  # Populate bash and zsh completions
  install -dm 755 "${pkgdir}/usr/share/bash-completion/completions"
  install -dm 755 "${pkgdir}/usr/share/zsh/site-functions"
  "${pkgdir}/usr/bin/kyma" completion bash > "${pkgdir}/usr/share/bash-completion/completions/kyma"
  "${pkgdir}/usr/bin/kyma" completion zsh >  "${pkgdir}/usr/share/zsh/site-functions/_kyma"
}
