# Maintainer: John Jenkins <twodopeshaggy@gmail.com>

pkgname=flif
_pkgname=FLIF
pkgver=0.1-alpha
pkgrel=1
pkgdesc="Free Lossless Image Format"
arch=(i686 x86_64)
url="https://github.com/jonsneyers/FLIF"
license=('GPL3')
conflicts=('flif-git')
makedepends=('git')
source=("https://github.com/jonsneyers/FLIF/archive/v$pkgver.tar.gz")
md5sums=('c7dc4a7fab6efba7add0dd224d1f91d1')

build() {
  cd "$srcdir/${_pkgname}-${pkgver}"
  make
}

package() {
  cd "$srcdir/${_pkgname}-${pkgver}"
  install -dm755 "${pkgdir}/usr/bin"
  install -Dm644 "LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  install -m755 flif "${pkgdir}/usr/bin" 
}
