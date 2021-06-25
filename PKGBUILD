# Maintainer: Justin Kromlinger <hashworks@archlinux.org>
# Contributor: Dragutin Cirkovic <dragonmen@gmail.com>
# Contributor: heinrich5991 <heinrich5991@gmail.com>
pkgname=srs
pkgver=3.0_r1
pkgrel=2
pkgdesc="High performance RTMP Server"
arch=('x86_64')
url="https://github.com/ossrs/srs"
license=('MIT')
depends=('gcc-libs'
         'openssl'
         'srs-state-threads')
makedepends=('zlib' 'unzip' 'net-tools' 'python' 'git')
backup=(etc/srs/srs.conf)
options=('docs')
source=("git+https://github.com/ossrs/srs/#commit=3809d43ee5a721f25d4d3ca985dfffd306d22166"
        "archlinux.patch")
sha256sums=('SKIP'
            'SKIP')

prepare() {
  cd "${srcdir}"/srs/trunk
  patch -p2 -i "${srcdir}"/archlinux.patch
}

build() {
  cd "${srcdir}"/srs/trunk
  ./configure --prefix=/install --use-sys-ssl --use-shared-st
  make
  make DESTDIR="${srcdir}" install
}

package() {
  cd "${srcdir}"/install
  install -d "${pkgdir}"/usr/bin "${pkgdir}"/etc/srs
  cp -r conf/. "${pkgdir}"/etc/srs
  install -m755 objs/srs "${pkgdir}"/usr/bin/srs
}
