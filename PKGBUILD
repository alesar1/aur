pkgname=ckan-bin
_pkgname=ckan
pkgver=1.27.2
pkgrel=1
pkgdesc='The Comprehensive Kerbal Archive Network'
arch=('any')
url="https://github.com/ksp-ckan/ckan/"
license=('MIT')
depends=('mono>=5.0.1')
provides=('ckan')
conflicts=('ckan')

source=("${_pkgname}_${pkgver}_all.deb::https://github.com/ksp-ckan/ckan/releases/download/v${pkgver}/${_pkgname}_${pkgver}_all.deb")
sha256sums=('b73f030b560e5d6ff70e4beb6a89c13fbc96c4b1dbf40477bb5747f7b9ff3dad')

package() {
  mkdir -p "${pkgdir}"
  ar -x "${_pkgname}_${pkgver}_all.deb"
  tar -xf "data.tar.xz"
  mv "usr" "${pkgdir}"
}
