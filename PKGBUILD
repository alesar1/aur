# Maintainer: Jaime Martínez Rincón <jaime@jamezrin.name>
# Maintainer: Patrick Schratz <patrick.schratz@gmail.com>
# Maintainer: Jared Allard <jaredallard@outlook.com>
# code adapted from https://github.com/jaredallard/notion-app

pkgname=notion-app
pkgver=2.0.8
pkgrel=4
epoch=1
pkgdesc="The all-in-one workspace for your notes and tasks"
arch=('i686' 'x86_64')
url="https://www.notion.so/desktop"
license=('MIT')
depends=('electron6-bin' 're2' 'gtk3' 'xdg-utils')
makedepends=('dmg2img' 'p7zip' 'libicns')
optdepends=('notion-enhancer: enhancements and fixes')
source=(
        "https://desktop-release.notion-static.com/Notion-"${pkgver}".dmg" 
        'notion-app'
        'notion-app.desktop')
md5sums=('045d90d0322a82ff349a83725bb5c3b6'
         '38431798c3ad8835d0211f7668d5eee4'
         'dc75abd9b8f3f455a0b8fc0d8d8932b5')
build() {
  msg "Converting dmg image..."
  mkdir -p "${srcdir}/tmp/build"
  dmg2img "${srcdir}/Notion-"${pkgver}".dmg" "${srcdir}/Notion-"${pkgver}".img" >/dev/null
  7z x -y "${srcdir}/Notion-"${pkgver}".img" >/dev/null
  cp -r "${srcdir}"/Notion**/Notion.app/Contents/Resources/* "${srcdir}/tmp/build"
  cp notion-app "${srcdir}/tmp/build"
  icns2png -x "${srcdir}/tmp/build/Notion.icns"
}

package() {
  _icon="Notion_512x512x32.png"

  install -d "${pkgdir}/usr/bin"
  install -d "${pkgdir}/opt/${pkgname}"
  install -d "${pkgdir}/usr/share/applications"
  install -d "${pkgdir}/usr/share/pixmaps"

  cp -r "${srcdir}/tmp/build/"* "${pkgdir}/opt/${pkgname}"
  cp "${srcdir}/${_icon}" "${pkgdir}/opt/${pkgname}/icon.png"
  install -Dm644 "${srcdir}/${_icon}" "${pkgdir}/usr/share/pixmaps/${pkgname}.png"
  install -Dm755 "${srcdir}/${pkgname}" "${pkgdir}/usr/bin/${pkgname}"
  install -Dm644 "${srcdir}/${pkgname}.desktop" "${pkgdir}/usr/share/applications"
}
