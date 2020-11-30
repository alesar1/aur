# Maintainer: Sasasu <su@sasasu.me>
pkgname=fly-cli
pkgver=v6.7.1
pkgrel=1
pkgdesc="A command line interface for Concourse CI"
arch=("x86_64")
url="https://github.com/concourse/concourse/tree/master/fly"
license=('Apache-2.0')
makedepends=("go")
conflicts=("concourse-fly" "concourse-fly-bin" "concourse-fly-git")
source=("https://github.com/concourse/concourse/archive/$pkgver.tar.gz")
sha256sums=('b7e779b161dcf8508d87702478504fbdd2a17cdfaa898eb10261e5067ed3c7e5')

build() {
  cd concourse-*/fly
  go build -o ../../fly
}

package() {
  install -Dm755 fly "${pkgdir}/usr/bin/fly"
}
