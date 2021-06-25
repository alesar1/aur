# Maintainer: Justin Kromlinger <hashworks@archlinux.org>
# Contributor: heinrich5991 <heinrich5991@gmail.com>
pkgname=srs-state-threads
pkgver=1.9.2
pkgrel=1
pkgdesc="Fork of state-threads, patched for SRS"
_pkgcommit=1d48ef5317f306adb232b440bab11327f9ae3883
arch=('x86_64')
url="https://github.com/ossrs/state-threads/"
license=('GPL2' 'MPL')
makedepends=('git')
source=("git+https://github.com/ossrs/state-threads/#commit=${_pkgcommit}")
sha256sums=('SKIP')

build() {
  cd "${srcdir}"/state-threads
  make STATIC_ONLY=no linux-optimized
}

package() {
  cd "${srcdir}"/state-threads/obj
  install -Dm644 st.h "${pkgdir}"/usr/include/st.h
  install -Dm644 libst.a "${pkgdir}"/usr/lib/libst.a
  install -Dm755 libst.so.1.9 "${pkgdir}"/usr/lib/libst.so.1.9
  ln -s libst.so.1.9 "${pkgdir}"/usr/lib/libst.so.1
  ln -s libst.so.1.9 "${pkgdir}"/usr/lib/libst.so
}
