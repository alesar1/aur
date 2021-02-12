# Maintainer: yjun <jerrysteve1101 at gmail dot com>
# Maintainer: sukanka <su975853527 at gmail dot com>

pkgname=eshelper
pkgver=12.5.0
_date=2021-02-06
_lang=es
_flang=Spanish
pkgrel=1
pkgdesc="Proprietary  ${_flang} dictionary software for linux"
arch=('x86_64')
url="https://www.eudic.net/v4/${_lang}/app/${pkgname}"
license=('unknown')
depends=(
         'hicolor-icon-theme'
         'qt5-speech'
         'qt5-webkit'
         )
provides=("eudic-${_lang}")
source=("${pkgname}-${pkgver}.deb::https://static.frdic.com/pkg/${pkgname}.deb?v=${_date}")
sha256sums=('8c69998d0e82355650a50e586965b9149c3b60ca5a7b5cbdbf43d17c3a67ddfa')

prepare() {
  mkdir -p build

  tar -xf data.tar.xz -C build
}

package() {
  mkdir -p ${pkgdir}/usr/share/eusoft/${pkgname}
  mv build/usr/share/eusoft/* ${pkgdir}/usr/share/eusoft/${pkgname}
  
  
  cp -pr build/usr/share/* ${pkgdir}/usr/share/ 
  

  # link executable
  mkdir ${pkgdir}/usr/bin/
  ln -s /usr/share/eusoft/${pkgname}/${pkgname} ${pkgdir}/usr/bin/${pkgname}

  # desktop enrty
  sed -i "s|/usr/share/eusoft/AppRun|${pkgname}|g" ${pkgdir}/usr/share/applications/${pkgname}.desktop
  
  # qt plugin path
  sed -i '4c Prefix = /usr/lib/qt/' ${pkgdir}/usr/share/eusoft/${pkgname}/qt.conf
  
  # remove unused files.
  rm -rf ${pkgdir}/usr/share/eusoft/${pkgname}/gstreamer-1.0/
  rm -rf ${pkgdir}/usr/share/eusoft/${pkgname}/lib/
  rm -rf ${pkgdir}/usr/share/eusoft/${pkgname}/plugins/
  rm -rf ${pkgdir}/usr/share/eusoft/${pkgname}/*.so.*
  rm -rf ${pkgdir}/usr/share/eusoft/${pkgname}/AppRun
  
}
# vim: ts=2 sw=2 et:
