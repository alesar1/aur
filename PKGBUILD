# Maintainer: John Gerritse <tyrannis dot hawk at gmail dot com>

pkgname=ultra_outliner
pkgver=0.9.13b1493
pkgrel=2
pkgdesc='Card-based outlining software for screenwriters, novelists and all story writers.'
url='http://ultraoutliner.com'
license=('custom')
arch=('x86_64')
depends=('libgl' 'libutil-linux' 'libxi')
source=(
  "${pkgname}-${pkgver}.tar.gz::https://gitlab.com/ultrablox/ultraoutliner//uploads/99814b4327a3ca8bfd19b98a237b76cf/ultraoutliner-ubuntu-x64-v.${pkgver}-SNAPSHOT.tar.gz"
  "${pkgname}.desktop"
  "${pkgname}.png"
  "${pkgname}.sh"
)
md5sums=('4628401ac4e923e8dc78ed1e408a09f0'
         'abd3a8d54712bde87cc044412f9da39e'
         '8bd89e964ec628dfb171f44484ae3c6a'
         'a68d14e71ab99b40fd2be80f6907cce8')
noextract=("${pkgname}-${pkgver}.tar.gz")

package() {
  install -dm755 "${pkgdir}/usr/share/${pkgname}"
  tar -xz -f "${pkgname}-${pkgver}.tar.gz" -C "${pkgdir}/usr/share/${pkgname}"
  # Move packages into the correct place
  mv "${pkgdir}"/usr/share/"${pkgname}"/out/distr/* "${pkgdir}"/usr/share/"${pkgname}"/
  rm -rf "${pkgdir}"/usr/share/"${pkgname}"/out
  # Install startup files
  install -Dm644 "${pkgname}.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"
  install -Dm644 "${pkgname}.png" "${pkgdir}/usr/share/pixmaps/${pkgname}.png"
  install -Dm755 "${pkgname}.sh" "${pkgdir}/usr/bin/${pkgname}"
}
