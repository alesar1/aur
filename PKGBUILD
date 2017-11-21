# Original author: Josiah Schwab <jschwab at gmail dot com>
# Maintainer: Josiah Schwab <jschwab at gmail dot com>

pkgname=mesasdk
pkgdesc="Software development kit for use with the MESA stellar evolution code"
pkgver=20171120
pkgrel=1
arch=('x86_64')
url="http://www.astro.wisc.edu/~townsend/static.php?ref=mesasdk"
provides=('mesasdk')
depends=('binutils' 'make' 'perl' 'libx11' 'zlib' 'tcsh' 'glibc')
install=mesasdk.install
source=("http://www.astro.wisc.edu/~townsend/resource/download/${pkgname}/${pkgname}-x86_64-linux-${pkgver}.tar.gz")
sha1sums=('34faaf1cc20dbbd7b98e4c2084642f6a4cd3e2a0')
options=('!strip')

package() {
  mkdir -p ${pkgdir}/opt
  tar --extract --file ${pkgname}-x86_64-linux-${pkgver}.tar.gz --directory ${pkgdir}/opt
}
