# Maintainer:  nissen22


pkgname=cudatext-gtk2-bin
pkgver=1.155.0.0
pkgrel=1
pkgdesc="Cross-platform text editor, written in Lazarus"
arch=('x86_64')
url="http://uvviewsoft.com/cudatext"
license=('MPL2')
depends=('gtk2'
         'python')
provides=('cudatext')
conflicts=('cudatext-qt5-bin')
options=('!strip')
source=("http://www.uvviewsoft.com/cudatext/files_linux/cudatext_${pkgver}-${pkgrel}_gtk2_amd64.deb")
sha256sums=('faf83e616bd92c76df8c784d706abbd59db1c2f739923df7365bbb3d20819d01')

package() {
    tar xvf "${srcdir}/data.tar.xz" -C "${pkgdir}/"
}
