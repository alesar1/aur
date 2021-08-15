# Maintainer: René Wagner < rwagner at rw-net dot de >
# Contributor: Diab Neiroukh <lazerl0rd@thezest.dev>

pkgname=mimalloc
pkgver=2.0.2
pkgrel=1
pkgdesc='General-purpose allocator with excellent performance characteristics'
arch=('x86_64')
license=('MIT')
url='https://github.com/microsoft/mimalloc'
conflicts=('mimalloc-git')
depends=('glibc')
makedepends=('cmake' 'git')
provides=('mimalloc')
options=('staticlibs')
source=("${pkgname}_${pkgver}::git+https://github.com/microsoft/${pkgname}.git#tag=v${pkgver}")
sha256sums=('SKIP')

build() {
  cp -r "${pkgname}_${pkgver}" "${pkgname}-secure_${pkgver}"

  cd "${pkgname}_${pkgver}"
  cmake -DCMAKE_INSTALL_PREFIX=/usr .
  make

  cd "../${pkgname}-secure_${pkgver}"
  cmake -DCMAKE_INSTALL_PREFIX=/usr -DMI_SECURE=ON .
  make
}

package() {
  cd "${pkgname}_${pkgver}"
  make DESTDIR="$pkgdir" install

  cd "../${pkgname}-secure_${pkgver}"
  make DESTDIR="$pkgdir" install

  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

  ln -s "mimalloc-2.0/libmimalloc.so.2.0" "${pkgdir}/usr/lib/"
  ln -s "mimalloc-2.0/libmimalloc.so.2.0" "${pkgdir}/usr/lib/libmimalloc.so"
  ln -s "mimalloc-2.0/libmimalloc-secure.so.2.0" "${pkgdir}/usr/lib/"
  ln -s "mimalloc-2.0/libmimalloc-secure.so.2.0" "${pkgdir}/usr/lib/libmimalloc-secure.so"
}
