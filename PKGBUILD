# Maintainer : Victor Savcenco <victor dot sav at linux dot com>

pkgname=uqm-megamod-data
_pkgname=uqm-megamod
pkgver=0.8.0.85
pkgrel=1
pkgdesc="Base content for the Ur-Quan Masters MegaMod by Serosis."
arch=("any")
url="https://github.com/yokai-shogun/UQM-MegaMod-Content"
license=("custom:CC BY-NC-SA 2.5")

source=(
  "https://github.com/yokai-shogun/UQM-MegaMod-Content/releases/download/${pkgver}/mm-${pkgver}-content.uqm"
  "https://raw.githubusercontent.com/yokai-shogun/UQM-MegaMod-Content/master/LICENSE"
  version
)

md5sums=(
  "f41e04ff670e51813f5ddcac615cb25b"
  "4f30efe3d129bd9a8bddd0d455c849f7"
  "b2732e9de2e18b31eeb50030ade062f7"
)

noextract=("mm-${pkgver}-content.uqm")

package() {
  mkdir -p \
    "${pkgdir}/usr/share/uqm-megamod/content" \
    "${pkgdir}/usr/share/uqm-megamod/content/addons" \
    "${pkgdir}/usr/share/uqm-megamod/content/base" \
    "${pkgdir}/usr/share/uqm-megamod/content/packages"
  
  install -Dm644 "${srcdir}/version" "${pkgdir}/usr/share/uqm-megamod/content/version"
  install -Dm644 "${srcdir}/mm-${pkgver}-content.uqm" "${pkgdir}/usr/share/uqm-megamod/content/packages/mm-${pkgver}-content.uqm"
  install -Dm644 "${srcdir}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
