# Maintainer: Fernandez Ludovic <lfernandez dot dev at gmail dot com>

pkgname='lego-git'
_pkgname="${pkgname%-git}"
pkgver=r831.7f6155e8
pkgrel=1
pkgdesc='Lets Encrypt client and ACME library written in Go (master branch / unstable)'
url='https://go-acme.github.io/lego/'
arch=('x86_64' 'i686')
license=('MIT')
provides=("${_pkgname}")
conflicts=("${_pkgname}")

_url='https://github.com/go-acme/lego'
_goacmepath=github.com/go-acme
_legopath="${_goacmepath}/lego"

depends=()
# makedepends=('git' 'make')
makedepends=('git' 'make' 'go')

source=("git+${_url}.git")
sha512sums=('SKIP')

prepare() {
  # setup go env vars
  export GOPATH="${srcdir%/src}"

  mkdir -p "${srcdir}/${_goacmepath}/" && cd $_
  mv ${srcdir}/${_pkgname} .
}

pkgver() {
  cd "${srcdir}/${_legopath}"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "${srcdir}/${_legopath}"
  make build
}

package() {
  # Bin
  install -Dm755  "${srcdir}/${_legopath}/dist/${_pkgname}" "${pkgdir}/usr/bin/${_pkgname}"

  # License
  install -Dm644 "${srcdir}/${_legopath}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
