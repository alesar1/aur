# Maintainer: Muflone http://www.muflone.com/contacts/english/

pkgname=4kvideodownloader
pkgver=4.9.2.3082
pkgrel=1
pkgdesc="Quickly download videos from YouTube in high-quality."
arch=('x86_64')
url="http://www.4kdownload.com/products/product-videodownloader"
license=('custom:eula')
depends=('qt5-script' 'qt5-declarative' 'portaudio' 'ffmpeg' 'openssl-1.0')
makedepends=('chrpath')
source=("${pkgname}_${pkgver}_amd64.tar.bz2"::"https://dl.4kdownload.com/app/${pkgname}_${pkgver%.*}_amd64.tar.bz2"
        "${pkgname}.desktop"
        "${pkgname}.png"
        "fix_symlink_path.patch")
sha256sums=('398b841127e4f7573cb65b51fc8dfec1dd5bb9d247a0617a3b96c3d5bb4ccdb1'
            '6ab39088bde330267b43f87878f6bd47a215c732e17d417a99fc23ac4c568952'
            '56b851ef96aade0612f236b8763ccaf2def8acdd49f37bbefdd79e1d5f6e68be'
            '9d253c5d9e7497a4f922eca145446e1fa24ea79b433f50405dccdad3783fbbec')

prepare() {
  cd "${pkgname}"
  # Remove insecure RPATH
  chrpath --delete "${pkgname}-bin"
  # Fix symlink path
  patch -p1 -i "${srcdir}/fix_symlink_path.patch"
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
  install -m 755 -d "${pkgdir}/usr/lib/${pkgname}/audio"
  install -m 755 -t "${pkgdir}/usr/lib/${pkgname}/audio" audio/*
  install -m 755 -d "${pkgdir}/usr/lib/${pkgname}/translation"
  install -m 755 -t "${pkgdir}/usr/lib/${pkgname}/translation" translation/*
  # Temporarily ship bundled QT5 libraries as system libraries are unsupported
  install -m 755 -t "${pkgdir}/usr/lib/${pkgname}" "${pkgname}.sh"
  install -m 755 -t "${pkgdir}/usr/lib/${pkgname}" "libQt5Concurrent.so.5"
  install -m 755 -t "${pkgdir}/usr/lib/${pkgname}" "libQt5Core.so.5"
  install -m 755 -t "${pkgdir}/usr/lib/${pkgname}" "libQt5DBus.so.5"
  install -m 755 -t "${pkgdir}/usr/lib/${pkgname}" "libQt5Gui.so.5"
  install -m 755 -t "${pkgdir}/usr/lib/${pkgname}" "libQt5Network.so.5"
  install -m 755 -t "${pkgdir}/usr/lib/${pkgname}" "libQt5Qml.so.5"
  install -m 755 -t "${pkgdir}/usr/lib/${pkgname}" "libQt5Widgets.so.5"
  install -m 755 -t "${pkgdir}/usr/lib/${pkgname}" "libQt5XcbQpa.so.5"
  install -m 755 -t "${pkgdir}/usr/lib/${pkgname}" "libQt5Xml.so.5"
  install -m 755 -t "${pkgdir}/usr/lib/${pkgname}" "libQt5XmlPatterns.so.5"
  install -m 755 -d "${pkgdir}/usr/lib/${pkgname}/platforms"
  install -m 755 -t "${pkgdir}/usr/lib/${pkgname}/platforms" platforms/*
  install -m 755 -d "${pkgdir}/usr/lib/${pkgname}/xcbglintegrations"
  install -m 755 -t "${pkgdir}/usr/lib/${pkgname}/xcbglintegrations" xcbglintegrations/*
  # Install launcher file
  install -m 755 -d "${pkgdir}/usr/bin"
  ln -s "/usr/lib/${pkgname}/${pkgname}.sh" "${pkgdir}/usr/bin/${pkgname}"
  # Install license file
  install -m 755 -d "${pkgdir}/usr/share/licenses/${pkgname}"
  install -m 644 -t "${pkgdir}/usr/share/licenses/${pkgname}" "doc/eula"
}
