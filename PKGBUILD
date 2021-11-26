# Maintainer: das_kube
# Co-Maintainer: Andrew Sun <adsun701 at gmail dot com>

pkgname=aeron
pkgver=1.37.0
pkgrel=1
pkgdesc="Efficient reliable UDP unicast, UDP multicast, and IPC message transport"
arch=('i686' 'x86_64')
url="https://github.com/real-logic/aeron"
license=('Apache')
depends=('gcc-libs' 'libbsd' 'util-linux-libs' 'zlib' 'java-environment')
makedepends=('cmake')
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/real-logic/aeron/archive/${pkgver}.tar.gz"
        "aeronmd.service")
sha256sums=('c021cca374770942f2b762e83282765c73783739bb1e8c6c05a3a1f927c81b76'
            '3e6f3d61880ef39743c77103a169f53074337adbe382c78a768bd001d8a646be')

build() {
  mkdir -p "${srcdir}/build" && cd "${srcdir}/build"
  cmake \
    -DBUILD_SHARED_LIBS=on \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DAERON_BUILD_DOCUMENTATION=off \
    -DAERON_TESTS=off \
    ../${pkgname}-${pkgver}

  make
}

package() {
  cd "${srcdir}/build"
  make DESTDIR="${pkgdir}" install
  install -Dm644 "${srcdir}/aeronmd.service" "${pkgdir}/usr/lib/systemd/user/aeronmd.service"
}
