# Maintainer: David Birks <david@tellus.space>
# Contributor: Jacob Mason <jacob@jacobmason.net>

pkgname=jx
pkgver=2.0.481
pkgrel=1
pkgdesc='Command line tool for working with Jenkins X'
arch=('x86_64')
url='https://github.com/jenkins-x/jx'
license=('Apache')
depends=('go>=1.11.4')
source=("$pkgname-$pkgver.tar.gz::https://github.com/jenkins-x/jx/archive/v$pkgver.tar.gz")
sha256sums=('0c925442156d5baa1807ef4b2d3003abe8c93fc19409e3c198c6a325a4fb724d')

prepare() {
  mkdir -p gopath/src/github.com/jenkins-x
  ln -rTsf $pkgname-$pkgver gopath/src/github.com/jenkins-x/jx
}

build() {
  # Trim $PWD in build
  export GOFLAGS="-gcflags=all=-trimpath=${PWD} -asmflags=all=-trimpath=${PWD} -ldflags=-extldflags=-zrelro -ldflags=-extldflags=-znow"
  export GOPATH="$srcdir/gopath"

  cd gopath/src/github.com/jenkins-x/jx
  VERSION=${pkgver} make build
}

package() {
  install -Dm 755 "${srcdir}/gopath/src/github.com/jenkins-x/jx/build/jx" "${pkgdir}/usr/bin/jx"

  # Populate bash and zsh completions
  install -dm 755 "${pkgdir}/usr/share/bash-completion/completions"
  install -dm 755 "${pkgdir}/usr/share/zsh/site-functions"
  "${pkgdir}/usr/bin/jx" completion bash > "${pkgdir}/usr/share/bash-completion/completions/jx"
  "${pkgdir}/usr/bin/jx" completion zsh >  "${pkgdir}/usr/share/zsh/site-functions/_jx"
}
