# Maintainer: Alexander Hunziker <alex.hunziker@gmail.com>
# Contributor: Alessio Biancalana <dottorblaster@gmail.com>
# Contributor: Massimiliano Torromeo <massimiliano.torromeo@gmail.com>

pkgname=gegl-git
pkgver=0.3.4.23.g9e1b613
pkgrel=1
pkgdesc="Graph based image processing framework"
arch=('i686' 'x86_64')
url="http://www.gegl.org"
license=('GPL3' 'LGPL3')
groups=()
depends=('babl-git>=0.1.14' 'libspiro' 'json-glib')
makedepends=('git' 'intltool' 'python2' 'ruby' 'lua'
             'libraw' 'openexr' 'ffmpeg' 'librsvg' 'jasper'
             'libtiff' 'suitesparse')
optdepends=('openexr: for using the openexr plugin'
            'ffmpeg: for using the ffmpeg plugin'
            'librsvg: for using the svg plugin'
            'libtiff: tiff plugin'
            'jasper: for using the jasper plugin'
            'libraw: raw plugin'
            'suitesparse: matting-levin plugin'
            'lua: lua plugin')
provides=("gegl=${pkgver}")
conflicts=('gegl>=0.3.0')
replaces=()
backup=()
options=(!libtool)
install=
source=(git://git.gnome.org/gegl)
md5sums=('SKIP')
noextract=()

_gitroot=GITURL
_gitname=gegl

build() {
  cd "$srcdir/$_gitname"

  ./autogen.sh
  ./configure --prefix=/usr --with-sdl --with-openexr --with-librsvg \
    --with-libavformat --with-jasper --disable-docs \
    --enable-workshop
  make
}

package() {
  cd "$srcdir/$_gitname"
  make DESTDIR="$pkgdir/" install
  mv $pkgdir/usr/bin/gegl $pkgdir/usr/bin/gegl-0.3
}

pkgver() {
  cd $_gitname
  git describe --always | sed -e 's/GEGL_//g' -e 's/[_-]/./g'
}
