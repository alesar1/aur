# Maintainer: Tommaso Sardelli <lacapannadelloziotom at gmail dot com>
pkgname=bpftrace
pkgver=0.9.4
pkgrel=1
pkgdesc='High-level tracing language for Linux eBPF'
arch=('i686' 'x86_64')
url='https://github.com/iovisor/bpftrace'
license=('Apache')
depends=('libelf' 'zlib' 'llvm-libs' 'clang' 'bcc')
makedepends=('cmake' 'llvm' 'git')
conflicts=('bpftrace-git')
provides=('bpftrace')
source=("https://github.com/iovisor/${pkgname}/archive/v${pkgver}.tar.gz")
sha512sums=('d2b32235fa81d6f06771df32877388a9105230adfc638b0d0ebf4f11a567246e8514d93c14da9c7008dbacd6b2c4108604fc5a2721ef831efa5c596cbe50b1da')

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  mkdir -p build
  cd build
  cmake -DCMAKE_BUILD_TYPE=DEBUG -DCMAKE_INSTALL_PREFIX=/usr ..
  make
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}/build"

  make DESTDIR="${pkgdir}/" install
}

# vim:set ts=2 sw=2 et:
