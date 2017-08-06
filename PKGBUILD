# Maintainer: cyrant <cyrant at tuta dot io>

pkgname=ultra_outliner
pkgver=0.9.7b
pkgrel=1
pkgdesc='Card-based outlining software for screenwriters, novelists and all story writers.'
url='http://ultraoutliner.com'
license=('LGPL3')
arch=('x86_64')
depends=('libgl' 'libutil-linux' 'libxi')
source=(
  "${pkgname}-${pkgver}.tar.gz::http://www.ultraoutliner.com/info/download_build?build=73&locale=en/ultra_outliner.ubuntu64.tar.gz"
  "${pkgname}.desktop"
  "${pkgname}.png"
  "${pkgname}.sh"
)
md5sums=(
  '6f88d178b53e1fc9932b12c9ff6b90c1'
  'abd3a8d54712bde87cc044412f9da39e'
  '8bd89e964ec628dfb171f44484ae3c6a'
  '489d71fdc4e80fdf22c516638a61e3c7'
)
noextract=("${pkgname}-${pkgver}.tar.gz")

package() {
  install -dm755 "${pkgdir}/opt/${pkgname}"
  tar -xz -f "${pkgname}-${pkgver}.tar.gz" -C "${pkgdir}/opt/${pkgname}"

  install -Dm644 "${pkgname}.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"
  install -Dm644 "${pkgname}.png" "${pkgdir}/usr/share/pixmaps/${pkgname}.png"
  install -Dm755 "${pkgname}.sh" "${pkgdir}/usr/bin/${pkgname}"
}
