# Maintainer: Norbert Pfeiler <norbert.pfeiler+aur ät gmail.com>

pkgname=cmake-doc-qch
pkgver=3.5
pkgrel=1
pkgdesc="CMake documentation in Qt Help format"
arch=('any')
license=('CCPL:cc-by')
url='http://www.cmake.org/documentation/'
source=("https://www.cmake.org/cmake/help/v${pkgver}/CMake.qch")
md5sums=('d81ed4f19322f14452c323642982dbca')

package() {
  mkdir -p "$pkgdir/usr/share/doc/qt"
  cp "$srcdir"/CMake.qch "$pkgdir/usr/share/doc/qt"
}
