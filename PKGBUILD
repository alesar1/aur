# Maintainer: Lev Levitsky <levlev at mail.ru>
_name=ThermoRawFileParser
pkgname=$(echo "${_name}" | tr '[:upper:]' '[:lower:]')-bin
pkgver=1.3.1
pkgrel=3
epoch=
pkgdesc="Thermo RAW file parser that runs on Linux with mono"
arch=('any')
url="https://github.com/compomics/ThermoRawFileParser"
license=('Apache')
depends=('mono')
options=('!strip')
_download_name="${_name}-${pkgver}-${pkgrel}.zip"
source=("${_download_name}::${url}/releases/download/v${pkgver}/${_name}.zip"
        "${_name}")
noextract=("${_download_name}")
md5sums=('9f55704c9afa413d1c2333571abc7349'
         '2d0b284fb357649ccc85e2774f48408e')

prepare() {
    mkdir -pv "${srcdir}/${_name}-${pkgver}"
    unzip -d "${_name}-${pkgver}" "${_download_name}"
}
package() {
    mkdir -pv "${pkgdir}/usr/share/${_name}"
    mkdir -pv "${pkgdir}/usr/bin"
    cp -r "${srcdir}/${_name}-${pkgver}/"* "${pkgdir}/usr/share/${_name}/"
    install -t "${pkgdir}/usr/bin" "${_name}"
}
