# Maintainer: Jan Neumann <neum dot ja at gmail dot com>


pkgname=ksmoothdock
pkgver=6.2
pkgrel=2
pkgdesc='A cool desktop panel for KDE Plasma 5'
arch=('x86_64')
url='https://github.com/dangvd/ksmoothdock'
license=('GPL3')
depends=('kactivities' 'kxmlgui')
makedepends=('cmake' 'extra-cmake-modules' 'python')
source=("${pkgname}-${pkgver}::${url}/archive/v${pkgver}.tar.gz"
        "CMakeLists.patch")
sha256sums=('01ce638682b0e8c9842b1e558a17b04e4ae944ee6fae85d04f3aa3ca6d8d036a'
            'f411900b784f982a74190a4ffb2121fb35e7492181d6320c92287e7dec7cbdcf')

prepare() {
cd ${srcdir}/${pkgname}-${pkgver}/src
patch --strip=1 CMakeLists.txt < ../../CMakeLists.patch
}


build() {
  cd ${srcdir}/${pkgname}-${pkgver}

  cmake src \
    -DCMAKE_INSTALL_PREFIX=/usr \
  
  make
    
  }

package() {
  make -C ${srcdir}/${pkgname}-${pkgver} DESTDIR="$pkgdir" install
}
