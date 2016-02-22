# Maintainer: Marcin Kulik <m@ku1ik.com>

_pkgname=asciinema
pkgname=asciinema
pkgver=1.2.0
pkgrel=2
pkgdesc="Record and share your terminal sessions, the right way"
url="https://asciinema.org/"
license=('GPLv3')
arch=('x86_64' 'i686' 'arm')
source=("https://github.com/asciinema/asciinema/archive/v${pkgver}.tar.gz")
sha1sums=('82cd2c173935a2e8b111a65095a4c78ace45ea89')
makedepends=('make' 'go')

build() {
  mkdir -p "${srcdir}/go/src/github.com/asciinema"
  ln -nfs "${srcdir}/${_pkgname}-${pkgver}" "${srcdir}/go/src/github.com/asciinema/asciinema"
  cd "${srcdir}/${_pkgname}-${pkgver}"
  GOPATH="${srcdir}/go" go build -o bin/asciinema
}

package() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  PREFIX=${pkgdir}/usr make install
}
