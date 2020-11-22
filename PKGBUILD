# Maintainer: Dominik Adrian Grzywak <starterx4 at gmail dot com>

pkgname=duolingo-nativefier
pkgver=20201122
pkgrel=1
pkgdesc="Duolingo desktop app built with nativefier (electron)"
arch=("i686" "x86_64")
url="https://duolingo.com"
license=("custom")
depends=("gtk3" "libxss" "nss")
optdepends=("libindicator-gtk3")
makedepends=("imagemagick" "nodejs-nativefier" "unzip")
source=(
  "${pkgname}.png"
  "${pkgname}.desktop"
)
md5sums=('30d2e79f379cf86917c77ad3767fe86b'
         '7604d993ebd90b80ff38e74bc3775396')

build() {
  cd "${srcdir}"
  
  nativefier \
    --name "Duolingo" \
    --icon "${pkgname}.png" \
    --maximize \
    --browserwindow-options '{ "webPreferences": { "spellcheck": true } }' \
    --verbose \
    --single-instance \
    --ignore-gpu-blacklist \
    "${url}"
}

package() {
  install -dm755 "${pkgdir}/"{opt,usr/{bin,share/{applications,licenses/${pkgname}}}}

  _folder=$(ls -l "${srcdir}" | grep "[Dd]uolingo-linux-" | awk '{print $9}')
  _binary=$(ls -l "${srcdir}/${_folder}" | grep "[Dd]uolingo" | awk '{print $9}')

  cp -rL "${srcdir}/${_folder}" "${pkgdir}/opt/${pkgname}"
  ln -s "/opt/${pkgname}/${_binary}" "${pkgdir}/usr/bin/${pkgname}"
  install -Dm644 "${srcdir}/${pkgname}.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"
  install -Dm644 "${pkgdir}/opt/${pkgname}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  for _size in "192x192" "128x128" "96x96" "64x64" "48x48" "32x32" "24x24" "22x22" "20x20" "16x16" "8x8"
  do
    install -dm755 "${pkgdir}/usr/share/icons/hicolor/${_size}/apps"
    convert "${srcdir}/${pkgname}.png" -strip -resize "${_size}" "${pkgdir}/usr/share/icons/hicolor/${_size}/apps/${pkgname}.png"
  done
}

