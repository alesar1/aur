# Maintainer: Connor Etherington <connor@concise.cc>
# ---
pkgname=shell-headers
pkgver=1.0.r1
pkgrel=1
pkgdesc='Scripts provide colorful terminal headers, meant to be placed in your shells rc file'
arch=(x86_64)
url="https://gitlab.com/qYp/${pkgname}"
license=('MIT')
depends=(lolcat)
makedepends=(git)                 
source=("https://gitlab.com/qYp/concise/-/raw/master/x86_64/${pkgname}-${pkgver}-${pkgrel}-$arch.pkg.tar.zst")
sha256sums=('4247db30c49a5715d376e0c2031699123565398ca44021042d163879939ad25f')

package() {
  install -Dm775 usr/bin/* -g wheel -o ${USER} -t "${pkgdir}/usr/bin/"
  install -Dm644 usr/share/licenses/${pkgname}/LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
