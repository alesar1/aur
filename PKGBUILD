# Maintainer: Dasith Gunawardhana <dasith.gunawardhana@gmail.com>

_pkgname=packer
pkgname=${_pkgname}-git
pkgver=v1.3.3_1006_g07dbf8195
pkgrel=1
pkgdesc="Packer is a tool for creating identical machine images for multiple platforms from a single source configuration."
arch=('x86_64')
url="https://www.packer.io/"
license=('MPL2')
depends=('glibc')
makedepends=('go' 'git')
conflicts=("${_pkgname}")
provides=("${_pkgname}")
source=("git+https://github.com/hashicorp/packer.git")
sha256sums=('SKIP')

pkgver() {
  cd ${_pkgname}
  git describe | sed 's/[- ]/_/g'
}

prepare() {
  mkdir -p gopath
  export GOPATH="${srcdir}/gopath"
  export PATH="$PATH:$GOPATH/bin"
}

build() {
  export GOFLAGS="-gcflags=all=-trimpath=${PWD} -asmflags=all=-trimpath=${PWD} -ldflags=-extldflags=-zrelro -ldflags=-extldflags=-znow"

  cd ${_pkgname}
  make dev

  unset GOFLAGS
}

check() {
  cd ${_pkgname}
  make test
}

package() {
  cd ${_pkgname}
  install -Dm755 bin/packer "$pkgdir"/usr/bin/packer
  install -m644 -D LICENSE "$pkgdir/usr/share/licenses/${_pkgname}/LICENSE"
}
