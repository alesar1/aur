# Maintainer: architekton <architekton350@gmail.com>

pkgname=amass
pkgver=2.9.0
pkgrel=1
pkgdesc="In-depth subdomain enumeration written in Go"
arch=('any')
url="https://github.com/OWASP/Amass"
license=('Apache')
makedepends=('go' 'git')
source=(Amass-$pkgver.tar.gz::https://github.com/OWASP/Amass/archive/${pkgver}.tar.gz)
sha512sums=('31b30da1d6a0c4fbd8b63765e307acdc4996bd4c4518c60f1d4bbb233799976e0047402eb3a299507c6db4e4fd3f7298b6de605226f19b896343dd9ab3c42325')


prepare() {
  mkdir -p "gopath/src/github.com/OWASP"
  ln -rTsf "Amass-${pkgver}" "gopath/src/github.com/OWASP/Amass"

  export GOPATH="${srcdir}/gopath"
  cd "${GOPATH}/src/github.com/OWASP/Amass"
  go get -d ./...
}

check() {
  export GOPATH="${srcdir}/gopath"
  cd "${GOPATH}/src/github.com/OWASP/Amass"

  go test ./...

}

build() {
  export GOPATH="${srcdir}/gopath"
  cd "${GOPATH}/src/github.com/OWASP/Amass"

  go install -v ./...
}

package() {
  export GOPATH="${srcdir}/gopath"
  cd "${GOPATH}/bin"

  install -dm 755 "${pkgdir}/usr/share/${pkgname}"

  install -Dm755 "${pkgname}" "${pkgdir}/usr/bin/${pkgname}"
  install -Dm755 "${pkgname}.netdomains" "${pkgdir}/usr/bin/${pkgname}.netdomains"
  install -Dm755 "${pkgname}.viz" "${pkgdir}/usr/bin/${pkgname}.viz"
  install -Dm755 "${pkgname}.db" "${pkgdir}/usr/bin/${pkgname}.db"

  cp -a --no-preserve=ownership "$GOPATH/src/github.com/OWASP/Amass/"{wordlists/,examples/,snapcraft.yaml} "${pkgdir}/usr/share/${pkgname}"

  chmod 644 "${pkgdir}/usr/share/${pkgname}/"{wordlists/*,examples/*}
}
