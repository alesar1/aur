# Maintainer: Samuel Walladge <samuel at swalladge dot id dot au>

pkgname=peco
pkgver=0.4.6
pkgrel=1
pkgdesc='Simplistic interactive filtering tool'
arch=('i686' 'x86_64')
url='https://github.com/peco/peco'
license=('MIT')
makedepends=('go' 'wget')
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/${pkgname}/${pkgname}/archive/v${pkgver}.tar.gz")
md5sums=('b7e5575202a20fe9f5e92fa39918b51a')

prepare() {
  install -d "${srcdir}/src/github.com/${pkgname}"
  cp -r "${pkgname}-${pkgver}/" "${srcdir}/src/github.com/${pkgname}/${pkgname}"
}

build() {
  export GOPATH="${srcdir}" GOROOT_FINAL="/usr/bin"
  cd "${srcdir}/src/github.com/${pkgname}/${pkgname}"
  make installdeps
  go build cmd/${pkgname}/${pkgname}.go
}

package() {
  install -Dm755 "${srcdir}/src/github.com/${pkgname}/${pkgname}/${pkgname}" "${pkgdir}/usr/bin/${pkgname}"
}

# vim:set ts=2 sw=2 et:
