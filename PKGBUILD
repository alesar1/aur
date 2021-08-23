# Maintainer: prg <prg _at_ xannode _dot_ com>
# Contributor: Caltlgin Stsodaat <contact@fossdaily.xyz>
pkgname=haruna
pkgver=0.7.0
pkgrel=1
pkgdesc='Video player built with Qt/QML on top of libmpv.'
arch=('x86_64')
url='https://invent.kde.org/multimedia/haruna/'
license=('GPL3')
depends=('kfilemetadata' 'kio' 'mpv' 'qt5-quickcontrols2' 'kirigami2' 'breeze-icons')
makedepends=('extra-cmake-modules' 'kdoctools')
source=("${pkgname}-${pkgver}.tar.gz::${url}/-/archive/v${pkgver}/${pkgver}.tar.gz")
sha256sums=('42f81ae732bef54d3c4c38b3e02d88bb586411d615b3c3bb8701305b72096e7f')

prepare() {
  # upstream source tarball now includes a hash; lets get rid of that
  mv ${pkgname}-v${pkgver}-* ${pkgname}-v${pkgver}
}

build() {
  export CFLAGS+=" ${CPPFLAGS}"
  export CXXFLAGS+=" ${CPPFLAGS}"
  cmake -B 'build' -S "${pkgname}-v${pkgver}" \
    -DCMAKE_BUILD_TYPE='None' \
    -DCMAKE_INSTALL_PREFIX='/usr' \
    -Wno-dev
  make -C 'build'
}

package() {
  make DESTDIR="${pkgdir}" PREFIX='/usr' -C 'build' install
  install -Dvm644 "${pkgname}-v${pkgver}/README.md" -t "${pkgdir}/usr/share/doc/${pkgname}"
}

# vim: ts=2 sw=2 et:
