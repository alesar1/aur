# Maintainer: Butui Hu <hot123tea123@gmail.com>

pkgname=vlfeat
pkgver=0.9.21
pkgrel=1
pkgdesc='An open library of computer vision algorithms'
arch=('x86_64')
url='https://www.vlfeat.org/'
license=('BSD')
depends=(
  openmp
)
makedepends=(
  clang
  patchelf
)
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/vlfeat/vlfeat/archive/v${pkgver}.tar.gz")
sha512sums=('ba7f83392d778a4a8c121aed10ae98693d8d61ae127e627322324c245cd1984ab8c0c3e3afe743075e7c022b3efb78e7dfc653bc488c8f19c93b3aa0f87e803e')

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  make CC=clang CXX=clang++ DISABLE_OPENMP=no
}

package() {
  # delete unneeded files and install binary & libs to correct location
  find "${srcdir}/${pkgname}-${pkgver}/bin" -type f -perm 0755 -name "test_*" -delete
  find "${srcdir}/${pkgname}-${pkgver}/bin" -type f -perm 0755 -exec patchelf --remove-rpath {} \;
  find "${srcdir}/${pkgname}-${pkgver}/bin" -type f -perm 0755 -name "*.so" -exec install -Dm755 {} -t "${pkgdir}/usr/lib" \;
  find "${srcdir}/${pkgname}-${pkgver}/bin" -type f -perm 0755 -name "*.so" -delete
  find "${srcdir}/${pkgname}-${pkgver}/bin" -type f -perm 0755 -exec install -Dm755 {} -t "${pkgdir}/usr/bin" \;
  # install headers
  find "${srcdir}/${pkgname}-${pkgver}/vl" -type f -name "*.h" -exec install -Dm644 {} -t "${pkgdir}/usr/include/vl" \;
  # install manpages
  for manfile in mser.1 sift.1 vlfeat.7; do
    gzip "${srcdir}/${pkgname}-${pkgver}/src/${manfile}"
  done
  install -Dm644 "${srcdir}/${pkgname}-${pkgver}/src/mser.1.gz" -t "${pkgdir}/usr/share/man/man1"
  install -Dm644 "${srcdir}/${pkgname}-${pkgver}/src/sift.1.gz" -t "${pkgdir}/usr/share/man/man1"
  install -Dm644 "${srcdir}/${pkgname}-${pkgver}/src/vlfeat.7.gz" -t "${pkgdir}/usr/share/man/man7"
  install -Dm644 "${srcdir}/${pkgname}-${pkgver}/COPYING" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:
