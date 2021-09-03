# Maintainer : Victor Savcenco <victor dot sav at linux dot com>

pkgname=uqm-megamod-addon-3do
_pkgname=uqm-megamod
pkgver=0.8.0.85
_pkgver=0.7.0
pkgrel=1
pkgdesc="3do voice, video and music package for the Ur-Quan Masters MegaMod by Serosis."
arch=("any")
url="https://github.com/yokai-shogun/UQM-MegaMod-Content"
license=("custom:CC BY-NC-SA 2.5")

source=(
  "https://github.com/yokai-shogun/UQM-MegaMod-Content/releases/download/${pkgver}/mm-${pkgver}-3dovoice.uqm"
  "https://github.com/yokai-shogun/UQM-MegaMod-Content/releases/download/${_pkgver}/uqm-${_pkgver}-3dovideo.uqm"
  "https://github.com/yokai-shogun/UQM-MegaMod-Content/releases/download/${_pkgver}/uqm-${_pkgver}-3DOMusicRemastered.uqm"
  "https://raw.githubusercontent.com/yokai-shogun/UQM-MegaMod-Content/master/LICENSE"
)

md5sums=(
  "899f81deec665ea182286338043f33d1"
  "8412ced77245d2f6cac31feee6df05c6"
  "293a8b036746bcee3823f0b33c2a16a7"
  "4f30efe3d129bd9a8bddd0d455c849f7"
)

noextract=("mm-${pkgver}-hd.uqm")

package() {
  install -Dm644 "${srcdir}/mm-${pkgver}-3dovoice.uqm" "${pkgdir}/usr/share/uqm-megamod/content/addons/mm-${pkgver}-3dovoice.uqm"
  install -Dm644 "${srcdir}/uqm-${_pkgver}-3dovideo.uqm" "${pkgdir}/usr/share/uqm-megamod/content/addons/uqm-${_pkgver}-3dovideo.uqm"
  install -Dm644 "${srcdir}/uqm-${_pkgver}-3DOMusicRemastered.uqm" "${pkgdir}/usr/share/uqm-megamod/content/addons/uqm-${_pkgver}-3DOMusicRemastered.uqm"
  install -Dm644 "${srcdir}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
