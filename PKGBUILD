# Maintainer: brent s. <bts (AT) square-r00t [dot] net>
validpgpkeys=('7482 31EB CBD8 08A1 4F5E  85D2 8C00 4C2F 9348 1F6B')
pkgname=libyuv-git
_pkgname=libyuv
pkgver=r1445.0735245
pkgrel=3
pkgdesc="A library for YUV scaling (git)"
arch=('i686' 'x86_64')
url="https://github.com/lemenkov/libyuv"
license=('custom')
#depends=('')
makedepends=('depot-tools-git' 'cmake')
#optdepends=('')
provides=('libyuv')
source=('git+https://github.com/lemenkov/libyuv.git')
sha512sums=('SKIP')

pkgver() {
  cd "${srcdir}/${_pkgname}"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {

  cd "${srcdir}/${_pkgname}/"
  mkdir out
  cd out
  mkdir -p ${pkgdir}/usr/lib
  cmake -DCMAKE_INSTALL_PREFIX="${pkgdir}/usr" -DCMAKE_BUILD_TYPE="Release" ..
  cmake --build . --config Release
  cmake --build . --target install --config Release

}
