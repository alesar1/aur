# Maintainer: Kaizhao Zhang <zhangkaizhao@gmail.com>

_srcname=I.Ming
_version=6.12
_version_pkg_updates=2
_gitcommit=e948fb4c46c83571199b9e779dc186b5a6c72799

pkgname=ttf-i.ming
pkgver="${_version}+${_version_pkg_updates}+${_gitcommit::7}"
pkgrel=1
pkgdesc="I.Ming ( I.明體 / 一點明體 / 一点明朝 / 一点明体 )"
url="https://github.com/ichitenfont/I.Ming"
arch=('any')
depends=('fontconfig' 'xorg-font-utils')
license=('custom')
source=("git+${url}.git#commit=${_gitcommit}")
sha256sums=('SKIP')

package() {
  cd "${srcdir}/${_srcname}"

  install -D -m644 "${_version}/I.Ming-${_version}.ttf" "${pkgdir}/usr/share/fonts/TTF/I.Ming-${_version}.ttf"
  install -D -m644 "${_version}/I.MingCP-${_version}.ttf" "${pkgdir}/usr/share/fonts/TTF/I.MingCP-${_version}.ttf"
  install -D -m644 "${_version}/I.MingVar-${_version}.ttf" "${pkgdir}/usr/share/fonts/TTF/I.MingVar-${_version}.ttf"
  install -D -m644 "${_version}/I.MingVarCP-${_version}.ttf" "${pkgdir}/usr/share/fonts/TTF/I.MingVarCP-${_version}.ttf"

  install -D -m644 "${_version}/readme.md" "${pkgdir}/usr/share/doc/${pkgname}/readme.md"
  install -D -m644 "${_version}/I.Ming_history.md" "${pkgdir}/usr/share/doc/${pkgname}/I.Ming_history.md"
  install -D -m644 "${_version}/I.MingVar_history.md" "${pkgdir}/usr/share/doc/${pkgname}/I.MingVar_history.md"

  install -D -m644 "${_version}/IPA_Font_License_Agreement_v1.0.md" \
      "${pkgdir}/usr/share/licenses/${pkgname}/IPA_Font_License_Agreement_v1.0.md"
}
