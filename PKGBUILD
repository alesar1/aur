# Maintainer : bartus <arch-user-repoᘓbartus.33mail.com>
# shellcheck disable=SC2034

# Contributor: Filipe Laíns (FFY00) <lains@archlinux.org>
# Contributor: Iru Cai <mytbk920423@gmail.com>
# Contributor: Alexander Hunziker <alex.hunziker@gmail.com>
# Contributor: Alessio Biancalana <dottorblaster@gmail.com>
# Contributor: Massimiliano Torromeo <massimiliano.torromeo@gmail.com>

_pkgname=gegl
pkgname="${_pkgname}-git"
pkgver=0.4.17.r9794.ae8b3e7ca
pkgrel=1
pkgdesc="Graph based image processing framework"
arch=('i686' 'x86_64')
url="https://www.gegl.org"
license=('GPL3' 'LGPL3')
depends=('babl>=0.1.72' 'libspiro' 'json-glib')
makedepends=('git' 'meson' 'intltool' 'python' 'ruby' 'lua'
             'libraw' 'openexr' 'ffmpeg' 'librsvg' 'jasper'
             'libtiff' 'suitesparse' 'gobject-introspection')
optdepends=('openexr: for using the openexr plugin'
            'ffmpeg: for using the ffmpeg plugin'
            'librsvg: for using the svg plugin'
            'libtiff: tiff plugin'
            'jasper: for using the jasper plugin'
            'libraw: raw plugin'
            'suitesparse: matting-levin plugin'
            'lua: lua plugin')
provides=("gegl=$pkgver")
conflicts=('gegl')
options=(!libtool)
source=('git+https://gitlab.gnome.org/GNOME/gegl.git')
sha512sums=('SKIP')

prepare() {
    mkdir "${srcdir}/build" -p

    meson "${srcdir}/${_pkgname}"\
          "${srcdir}/build" \
        --prefix=/usr \
        -Dworkshop=true
}


pkgver() {
  cd ${srcdir}/${_pkgname}
  printf "%d.%d.%d.r%s.%s" \
    $(grep -Po '^#define GEGL_MAJOR_VERSION \K[0-9]*$' ${srcdir}/build/config.h) \
    $(grep -Po '^#define GEGL_MINOR_VERSION \K[0-9]*$' ${srcdir}/build/config.h) \
    $(grep -Po '^#define GEGL_MICRO_VERSION \K[0-9]*$' ${srcdir}/build/config.h) \
    $(git rev-list --count HEAD) \
    $(git rev-parse --short HEAD)
}

build() {
    ninja -C "${srcdir}/build"
}

package() {
    DESTDIR="${pkgdir}" ninja -C "${srcdir}/build" install
}

