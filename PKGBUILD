# Maintainer: Sasasu <su@sasasu.me>
pkgname=fly-cli
pkgver=v7.5.0
pkgrel=7
pkgdesc="A command line interface for Concourse CI"
arch=("x86_64")
url="https://github.com/concourse/concourse/tree/master/fly"
license=('Apache-2.0')
makedepends=("go")
conflicts=("concourse-fly" "concourse-fly-bin" "concourse-fly-git")
source=("https://github.com/concourse/concourse/archive/$pkgver.tar.gz")
sha256sums=('169322fd21b43bbc783dd25228c380bec725a4792e470099bd813fc9c1554f7c')

build() {
  cd concourse-${pkgver:1}/fly
  go build -o ../../fly -ldflags="-X github.com/concourse/concourse.Version=${pkgver}"
}

package() {
  install -Dm755 fly "${pkgdir}/usr/bin/fly"
}
