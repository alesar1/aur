# Maintainer: Nikolay Korotkiy <sikmir@gmail.com>
_orgname=ericfischer
_pkgname=datamaps
_branch=master
pkgname=${_pkgname}-git
pkgver=r290.76e620a
pkgrel=1
pkgdesc='Indexes points and lines and generates map tiles to display them'
arch=('i686' 'x86_64')
url='https://github.com/ericfischer/datamaps'
license=('BSD')
depends=('libpng')
makedepends=('git')
provides=("${pkgname//-git}=${pkgver}")
conflicts=(${pkgname//-git})
source=("${_pkgname}-${_branch}::git://github.com/${_orgname}/${_pkgname}.git#branch=${_branch}")
sha256sums=('SKIP')

pkgver() {
  cd ${_pkgname}-${_branch}

  count="$(git rev-list --count HEAD)"
  head="$(git rev-parse --short HEAD)"

  printf "r%s.%s" "${count}" "${head}"
}

build() {
  cd ${_pkgname}-${_branch}

  make
}

package() {
  cd ${_pkgname}-${_branch}

  for tool in encode enumerate merge render; do
    install -Dm755 ${tool} ${pkgdir}/usr/bin/${_pkgname}-${tool}
  done
  install -Dm644 LICENSE.md ${pkgdir}/usr/share/licenses/${_pkgname}/LICENSE
}
