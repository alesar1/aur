# Maintainer: Muflone http://www.muflone.com/contacts/english/

pkgname=4kstogram
pkgver=2.6.11.1557
pkgrel=1
pkgdesc="Download and backup Instagram photos shared by any user."
arch=('x86_64')
url="http://www.4kdownload.com/products/product-stogram"
license=('custom:eula')
depends=('qt5-script' 'qt5-quickcontrols' 'qt5-graphicaleffects' 'libexif' 'libjpeg9')
makedepends=('chrpath')
source=("${pkgname}_${pkgver}_amd64.tar.bz2"::"https://dl.4kdownload.com/app/${pkgname}_${pkgver%.*}_amd64.tar.bz2"
        "${pkgname}.desktop"
        "${pkgname}.png")
sha256sums=('689e8788d85479e6f03a3cf53b9b704dcd6aaf04043dc1da95299fc9b646ce5b'
            '7970c1f1aacd5a546ca8252c2d48a874478a26e23eb57769f54c5feac7316f51'
            'b1add61c84f745911dee0672b25e021a3da0d90127843f3a814864858306ab8b')

prepare() {
  cd "${pkgname}"
  # Remove insecure RPATH
  chrpath --delete "${pkgname}-bin"
}

package() {
  # Install desktop file
  install -m 755 -d "${pkgdir}/usr/share/applications"
  install -m 755 -t "${pkgdir}/usr/share/applications" "${pkgname}.desktop"
  # Install icon file
  install -m 755 -d "${pkgdir}/usr/share/pixmaps"
  install -m 644 -t "${pkgdir}/usr/share/pixmaps" "${pkgname}.png"
  # Install files
  cd "${pkgname}"
  install -m 755 -d "${pkgdir}/usr/lib/${pkgname}"
  install -m 755 -t "${pkgdir}/usr/lib/${pkgname}" "${pkgname}-bin"
  install -m 755 -d "${pkgdir}/usr/lib/${pkgname}/translation"
  install -m 755 -t "${pkgdir}/usr/lib/${pkgname}/translation" translation/*
  # Install launcher file
  install -m 755 -d "${pkgdir}/usr/bin"
  ln -s "/usr/lib/${pkgname}/${pkgname}-bin" "${pkgdir}/usr/bin/${pkgname}"
  # Install license file
  install -m 755 -d "${pkgdir}/usr/share/licenses/${pkgname}"
  install -m 644 -t "${pkgdir}/usr/share/licenses/${pkgname}" "doc/eula"
}
