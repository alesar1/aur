# Maintainer: tercean <cg@zknt.org>

pkgname=tekton-cli-bin
pkgver=0.19.0
pkgrel=1
pkgdesc='A CLI for interacting with Tekton.'
arch=('x86_64')
url='https://github.com/tektoncd/cli'
license=('Apache')
provides=('tekton-cli')
source=("https://github.com/tektoncd/cli/releases/download/v${pkgver}/tkn_${pkgver}_Linux_x86_64.tar.gz")
sha256sums=('9c0471789fb4c23ee20f1e125a939ac80b6db5d38f1f761dbbc45900981d0107')

package() {
    install -Dm 755 "$srcdir/tkn" "${pkgdir}/usr/bin/tkn"
}
