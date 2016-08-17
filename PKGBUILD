# Maintainer: Janek Thomaschewski <janek[at]artos-hosting[dot]de>
# Contributor: Testuser_01 <arch[at]nico-siebler[dot]de>
# Contributor: Pablo Vilas <pablovilas89[at]gmail[dot]com>

pkgname=webstorm-eap
_pkgname=WebStorm
pkgver=162.1628.41
_pkgver=2016.2.2
pkgrel=1
pkgdesc="JavaScript IDE and HTML editor."
arch=('i686' 'x86_64')
options=('!strip')
url="http://www.jetbrains.com/webstorm"
license=('custom')
depends=()

source=(http://download.jetbrains.com/webstorm/${_pkgname}-${_pkgver}.tar.gz
        jetbrains-webstorm-eap
        jetbrains-webstorm-eap.desktop
        ${_pkgname}_license.txt)

sha256sums=('06af83ee181b37ae0a1108b4b88ae9a8d10f153796f3c59c879a4ead24dc4e58'
            '3712fc9477a8b5a54d970103166b05bf872fa2512c5bee7e63f62a5738e40419'
            '931de5f12ab12e62eccaa3648d0cedf5e2c3845cc1e1a37030137fdbc24f54f3'
      	    '8464fc766dbb4f6a0de4acd84007fc2916b50ca48ce7d22654144f549c8c6f4c')

package() {
  cd "${srcdir}"
  mkdir -p "${pkgdir}/opt/${pkgname}"
  cp -r ${srcdir}/${_pkgname}-${pkgver}/* "${pkgdir}/opt/${pkgname}"
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
  install -m 644 "${pkgdir}/opt/${pkgname}/bin/webstorm.svg" "${pkgdir}/usr/share/pixmaps/${pkgname}.svg"
  #install -m 644 "${srcdir}/${_pkgname}-${pkgver}/license/${_pkgname}_license.txt" "${pkgdir}/usr/share/licenses/${pkgname}/${_pkgname}_license.txt"
  install -m 644 "${startdir}/${_pkgname}_license.txt" "${pkgdir}/usr/share/licenses/${pkgname}/${_pkgname}_license.txt"
  install -m 755 "${startdir}/jetbrains-${pkgname}" "${pkgdir}/usr/bin"
}
