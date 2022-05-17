# Maintainer: Liin L <Liin@Xemmon.Space>

pkgname='otf-urbanist'
pkgver=1.310
pkgrel=1
pkgdesc="Urbanist is a low-contrast, geometric sans-serif inspired by Modernist design and typography."
url="https://github.com/coreyhu/Urbanist"
arch=(any)
license=(custom)
source=("https://github.com/coreyhu/Urbanist/releases/download/v${pkgver}/Urbanist_Font_Family_${pkgver}.zip"
  "OFL.txt")

sha256sums=('7b51d9d081931875e03fdeaf51033d01c1cc250a40b02ad67f20e1c4bae782e4'
            'ee1221b1c2d08920e5f9ca764eb228dafa5c8090df9cf665373c2287b9cb8f49')

package() {
  install -d "${pkgdir}/usr/share/fonts/${pkgname}"
  install -m644 "${srcdir}/fonts/otf/"*.otf "${pkgdir}/usr/share/fonts/${pkgname}"
  install -Dm644 "${srcdir}/OFL.txt" "${pkgdir}/usr/share/licenses/$pkgname/LICENSE"
}

