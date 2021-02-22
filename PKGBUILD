# Maintainer: My-Tien Nguyen <my-tien at mailbox dot org>

appname=smartsynchronize
pkgname=${appname}-preview
pkgver=4.2_preview_4
pkgrel=1
pkgdesc="Comparing Directories the Smart Way"
arch=("any")
url="https://www.syntevo.com/smartsynchronize/"
license=('custom')
depends=('java-runtime>=11' 'gtk3' 'gtk-update-icon-cache')

pkgver_tar=${pkgver//_/-}
pkgver_tar=${pkgver_tar//./_}
source=("https://www.syntevo.com/downloads/${appname}/${appname}-linux-${pkgver_tar}.tar.gz"
        "${pkgname}.desktop")

sha1sums=("9a1fb3db99f6f7e59cf2fd1882a8babb32b57e42"
          "e0e0097cd79d194d27973a9b16414b2b5dca32bd")

package() {
  # Install desktop file
  install -m 755 -d "${pkgdir}/usr/share/applications"
  install -m 755 -t "${pkgdir}/usr/share/applications" "${pkgname}.desktop"
  cd "${appname}"
  # Install license files
  install -m 755 -d "${pkgdir}/usr/share/licenses/${pkgname}"
  install -m 644 -t "${pkgdir}/usr/share/licenses/${pkgname}" license.html licenses/*
  # Install documentation files
  install -m 755 -d "${pkgdir}/usr/share/doc/${pkgname}"
  install -m 644 -t "${pkgdir}/usr/share/doc/${pkgname}" readme-linux.txt changelog.txt smartsynchronize.pdf
  # Install launcher files
  install -m 755 -d "${pkgdir}/usr/lib/${pkgname}/bin"
  install -m 755 -t "${pkgdir}/usr/lib/${pkgname}/bin" bin/smartsynchronize.sh
  install -m 755 -d "${pkgdir}/usr/bin"
  ln -s "/usr/lib/${pkgname}/bin/smartsynchronize.sh" "${pkgdir}/usr/bin/${pkgname}"
  # Install library files
  install -m 755 -d "${pkgdir}/usr/lib/${pkgname}/lib"
  install -m 644 -t "${pkgdir}/usr/lib/${pkgname}/lib" lib/*
  # Install icon files
  for _size in 32 48 64 128 256
  do
    install -m 644 -D "bin/${appname}-${_size}.png" "${pkgdir}/usr/share/icons/hicolor/${_size}x${_size}/apps/${pkgname}.png"
  done
}
