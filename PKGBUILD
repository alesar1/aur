# Maintainer: Kaizhao Zhang <zhangkaizhao@gmail.com>

_fontname=spleen

pkgname=bdf-spleen
pkgver=1.2.0
pkgrel=1
pkgdesc="Monospaced bitmap fonts"
arch=('any')
license=('BSD')
url="https://www.cambus.net/spleen-monospaced-bitmap-fonts/"
depends=('fontconfig' 'xorg-fonts-encodings' 'xorg-font-utils')
source=(
  "https://github.com/fcambus/spleen/releases/download/${pkgver}/spleen-${pkgver}.tar.gz"
)
sha256sums=(
  '209bd3c2e2e7891520b099163b9a430f7ece766361b86c69799dc3aa235db49a'
)

package() {
  cd "${srcdir}/${_fontname}-${pkgver}"

  install -dm755 "${pkgdir}/usr/share/fonts/${_fontname}"
  for bdf_file in spleen-*.bdf; do install -Dm644 "${bdf_file}" \
    "${pkgdir}/usr/share/fonts/${_fontname}/${bdf_file}"; done
  install -Dm644 fonts.alias-spleen "${pkgdir}/usr/share/fonts/${_fontname}/fonts.alias"

  install -Dm644 AUTHORS "${pkgdir}/usr/share/doc/${pkgname}/AUTHORS"
  install -Dm644 README.md "${pkgdir}/usr/share/doc/${pkgname}/README.md"
  install -Dm644 ChangeLog "${pkgdir}/usr/share/doc/${pkgname}/ChangeLog"
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
