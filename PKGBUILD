# Maintainer: everyx <lunt.luo#gmail.com>

pkgname=sing-geosite-git
_pkgname=sing-geosite
pkgver=20220916160215
pkgrel=2

pkgdesc='sing-geosite database'
arch=('any')
_repo="SagerNet/${_pkgname}"
url="https://github.com/${_repo}"
license=('GPL3')

makedepends=('go')
optdepends=('sing-box: The universal proxy platform')
conflicts=('sing-geosite')
provides=('sing-geosite')

_branch=main
source=("src.${pkgver}.tar.gz::https://codeload.github.com/${_repo}/tar.gz/refs/heads/${_branch}")
sha256sums=(SKIP)

pkgver() {
  curl -s https://api.github.com/repos/v2fly/domain-list-community/releases/latest \
    | grep "tag_name" | cut -d '"' -f 4
}

_builddir="${_pkgname}-${_branch}"
build () {
  cd "$_builddir"
  NO_SKIP=true go run -v .
}

package() {
    install -Dm644 "${_builddir}/geosite.db" -t "${pkgdir}/usr/share/${_pkgname}"
    install -Dm644 "${_builddir}/LICENSE"    -t "${pkgdir}/usr/share/licenses/${_pkgname}"
}
