# Maintainer: Maxim Andersson <thesilentboatman@gmail.com>

pkgname=fromscratch-bin
_binname=FromScratch
pkgver=1.0.0
pkgrel=1
pkgdesc="A simple but smart note-taking app"
arch=('i686' 'x86_64')
url="https://fromscratch.rocks"
license=('MIT')
provides=('fromscratch')
conflicts=('fromscratch')
source=("https://raw.githubusercontent.com/Kilian/${_binname}/v${pkgver}/LICENSE")
source_i686=("https://github.com/Kilian/${_binname}/releases/download/v${pkgver}/${_binname}-linux-ia32-${pkgver}.zip")
source_x86_64=("https://github.com/Kilian/${_binname}/releases/download/v${pkgver}/${_binname}-linux-x64-${pkgver}.zip")
sha256sums=('8393225b48095d8ba6e01e1e78f37494843c6db929dacf87457b4ca1616deab8')
sha256sums_i686=('5952ce291c0dddaccc9439edf083305b7447d880262c817dc339742106e0d4a2')
sha256sums_x86_64=('f1157417350368302792b850d593e6cb87296dd90424a52317daf4808e763e67')

package() {
  cd "${srcdir}/${_binname}-linux-"*

  install -d "${pkgdir}/opt/${_binname,,}"
  cp -ra * "${pkgdir}/opt/${_binname,,}"

  install -d "${pkgdir}/usr/bin"
  ln -s "/opt/${_binname,,}/${_binname}" "${pkgdir}/usr/bin/${_binname,,}"

  install -Dm644 ../LICENSE -t "${pkgdir}/usr/share/licenses/${_binname,,}"
}

# vim:set ts=2 sw=2 et:
