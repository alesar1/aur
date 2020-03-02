# Maintainer: bobpaul

_pkgbase=synapse-admin
pkgname=${_pkgbase}-git
pkgver=r14.475aa11
pkgrel=1
pkgdesc="A Matrix administration panel using react-admin"
arch=(any)
conflicts=(synapse-admin)
license=(Apache2.0)
depends=(nodejs yarn)
makedepends=(git)
optdepends=()
source=("${_pkgbase}::git+https://github.com/Awesome-Technologies/${_pkgbase}")
sha256sums=('SKIP')

pkgver() {
  cd "$srcdir/${_pkgbase}"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "$srcdir/${_pkgbase}"
  yarn build
  #Fix https://github.com/Awesome-Technologies/synapse-admin/issues/11
  sed -i 's-src="/-src="-g' build/index.html
  sed -i 's-href="/-href="-g' build/index.html
}

package() {
  cd "$srcdir/${_pkgbase}"

  install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${_pkgbase}/LICENSE"
  mkdir -p "${pkgdir}/usr/share/webapps/${_pkgbase}"
  cp -r build/* "${pkgdir}/usr/share/webapps/${_pkgbase}/"

}
