# Maintainer: Peter Semiletov peter.semiletov at gmail dot com

pkgname=eko
pkgver=7.0.0
pkgrel=1
pkgdesc="EKO is a simple sound editor with mixer and audio effects."
arch=('x86_64')
url="https://github.com/psemiletov/eko"
license=('GPL')
depends=('qt6-base' 'gcc-libs' 'libsamplerate' 'libsndfile')

source=(https://github.com/psemiletov/eko/archive/$pkgver.tar.gz)


build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  qmake-qt5 PREFIX=/usr
  make
}

package(){
  cd "${srcdir}/${pkgname}-${pkgver}"
  make INSTALL_ROOT="${pkgdir}" install
}

md5sums=(3bd52ffa1045f232353f967c08de53c8)
