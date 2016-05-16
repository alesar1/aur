# Maintainer: Joel Goguen <contact+aur@jgoguen.ca>
# Contributor: Vlad M. <vlad@archlinex.net>
# Contributor: Gordin <9ordin @t gmail>
# Contributor: Andy Weidenbaum <archbaum@gmail.com>

pkgname=flow
pkgver=0.25.0
pkgrel=1
pkgdesc="A static typechecker for JavaScript"
arch=('i686' 'x86_64')
depends=('libelf')
makedepends=('ocaml')
url="http://flowtype.org"
license=('BSD')
source=(
    "https://github.com/facebook/${pkgname}/archive/v${pkgver}.tar.gz"
    'Makefile-fPIC.patch'
)
sha256sums=(
    '7144ecef267fb629051f6a941652cd6cb26793b9d91213eca0f9ef31a466cffa'
    '85c7dc96e0ad270edc8f5dc631069282fb5be4a044a80878cd357642316066b8'
)

prepare() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  patch -p0 <"${srcdir}/../Makefile-fPIC.patch"
}

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  msg 'Building...'
  make
}

check() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  # This ugly hack comes after conversations on #flowtype suggest that the 
  # incremental tests are not necessarily reliable - they fail when they
  # shouldn't, and not reliably, and with different frequencies on different
  # platforms. So let's be done with them for now...
  rm -r tests/incremental*

  msg 'Checking...'
  if [ -z "${FLOW_RUNTESTS_PARALLELISM}" ]; then
    /usr/bin/env FLOW_RUNTESTS_PARALLELISM=2 make test
  else
    make test
  fi
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  msg 'Installing license...'
  install -Dm 644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

  msg 'Installing documentation...'
  install -dm 755 "${pkgdir}/usr/share/doc/${pkgname}"
  cp -dpr --no-preserve=ownership examples "${pkgdir}/usr/share/doc/${pkgname}"

  msg 'Installing...'
  install -Dm 755 bin/flow "${pkgdir}/usr/bin/flow"
}
