# Maintainer : bartus <arch-user-repoᘓbartus.33mail.com>
# Contributor: Filipe Laíns (FFY00) <filipe.lains@gmail.com>
# Contributor: Alexander Hunziker <alex.hunziker@gmail.com>
# Contributor: Alessio Biancalana <dottorblaster@gmail.com>
# Contributor: Massimiliano Torromeo <massimiliano.torromeo@gmail.com>
# Contributor: Salamandar <felix@piedallu.me>

_pkgname=babl
pkgname="${_pkgname}-git"
pkgver=0.1.73.r1597.cff46ae
pkgrel=1
pkgdesc="Dynamic, any to any, pixel format translation library."
arch=('x86_64')
url="https://www.gegl.org/babl"
license=('LGPL3')
depends=('glibc' 'lcms2')
makedepends=('git' 'gobject-introspection' 'meson')
provides=("babl=${pkgver}")
conflicts=('babl')
options=(!libtool)
source=(git+https://gitlab.gnome.org/GNOME/babl)
md5sums=('SKIP')

prepare() {
    mkdir "${srcdir}/build" -p

    meson "${srcdir}/${_pkgname}"\
          "${srcdir}/build" \
        --prefix=/usr \
        -Dbuildtype=release \
        -Db_lto=true \
        -Dwith-docs=false
}

pkgver() {
  cd ${srcdir}/${_pkgname}
  printf "%d.%d.%d.r%s.%s" \
    $(grep -Po '^#define BABL_MAJOR_VERSION \K[0-9]*$' ${srcdir}/build/config.h) \
    $(grep -Po '^#define BABL_MINOR_VERSION \K[0-9]*$' ${srcdir}/build/config.h) \
    $(grep -Po '^#define BABL_MICRO_VERSION \K[0-9]*$' ${srcdir}/build/config.h) \
    $(git rev-list --count HEAD) \
    $(git rev-parse --short HEAD)
}

build() {
    ninja -C "${srcdir}/build"
}

package() {
    DESTDIR="${pkgdir}" ninja -C "${srcdir}/build" install
}

check() {
    meson test -C "${srcdir}/build"
}
