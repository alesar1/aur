# Contributor: Testuser_01 <arch@nico-siebler.de>
# Maintainer: Pablo Vilas <pablovilas89 at gmail dot com>
pkgname=webstorm
_pkgname=WebStorm
pkgver=10.0.4
_pkgver=141.1550
pkgrel=1
pkgdesc="JavaScript IDE and HTML editor."
arch=('i686' 'x86_64')
options=('!strip')
url="http://www.jetbrains.com/${pkgname}"
license=('custom')
depends=('java-runtime')
source=(http://download.jetbrains.com/webstorm/${_pkgname}-${pkgver}.tar.gz
        .AURINFO
        jetbrains-webstorm
        jetbrains-webstorm.desktop)
sha256sums=('f2c6b6fde74513858f204a6fc5d4f39a6b3424edcc1abc435e566ead0929319c'
            SKIP
            '152a0b551a7955837d0e249b24c69d37282633751fc0f5fc68145edcb7c74711'
            'b1db75ccf467b58741cb48e6ac0d8abb3b46c6b54361a153bc3e955db31c6b47')

package() {
  cd "${srcdir}"
  mkdir -p "${pkgdir}/opt/${pkgname}"
  cp -r ${srcdir}/${_pkgname}-${_pkgver}/* "${pkgdir}/opt/${pkgname}"
  if [[ $CARCH = 'i686' ]]; then
    rm -f "${pkgdir}/opt/${pkgname}/bin/libyjpagent-linux64.so"
    rm -f "${pkgdir}/opt/${pkgname}/bin/fsnotifier64"
  fi
  if [[ $CARCH = 'x86_64' ]]; then
    rm -f "${pkgdir}/opt/${pkgname}/bin/libyjpagent-linux.so"
    rm -f "${pkgdir}/opt/${pkgname}/bin/fsnotifier"
  fi

  mkdir -p "${pkgdir}/usr/bin"
  mkdir -p "${pkgdir}/usr/share/applications"
  mkdir -p "${pkgdir}/usr/share/pixmaps"
  mkdir -p "${pkgdir}/usr/share/licenses/${pkgname}"
  install -m 644 "${startdir}/jetbrains-${pkgname}.desktop" "${pkgdir}/usr/share/applications"
  install -m 644 "${pkgdir}/opt/${pkgname}/bin/webide.png" "${pkgdir}/usr/share/pixmaps/${pkgname}.png"
  install -m 644 "${srcdir}/${_pkgname}-${_pkgver}/license/${_pkgname}_license.txt" "${pkgdir}/usr/share/licenses/${pkgname}/${_pkgname}_license.txt"
  install -m 755 "${startdir}/jetbrains-${pkgname}" "${pkgdir}/usr/bin"
}
