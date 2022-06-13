# Maintainer: <reg-archlinux AT klein DOT tuxli DOT ch> 
# Contributor: Samuel Walladge <samuel@swalladge.net>
pkgname=pc-git
_pkgname=pc
pkgver=v0.1.1.r1.gc1e90f8
pkgrel=1
pkgdesc="Command line client for pastebins"
arch=('i686' 'x86_64')
url="https://git.sr.ht/~swalladge/pc"
license=('GPL3')
provides=("pc")
conflicts=("pc")
makedepends=('cargo' 'git')
source=("${pkgname}::git+https://git.sr.ht/~swalladge/pc")
sha256sums=('SKIP')

build() {
  cd "${pkgname}"
  cargo build --release
}

pkgver() {
  cd "${pkgname}"
  git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

package() {
  cd "${pkgname}"
  install -Dm755 "target/release/${_pkgname}" "${pkgdir}/usr/bin/${_pkgname}"
  install -Dm644 "README.md" "${pkgdir}/usr/share/doc/${_pkgname}/README.md"
}

