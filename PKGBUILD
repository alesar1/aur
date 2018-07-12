# Maintainer: Filipe Laíns (FFY00) <filipe.lains@gmail.com>
# Contributor: Iru Cai <mytbk920423@gmail.com>
# Contributor: Alexander Hunziker <alex.hunziker@gmail.com>
# Contributor: Alessio Biancalana <dottorblaster@gmail.com>
# Contributor: Massimiliano Torromeo <massimiliano.torromeo@gmail.com>

pkgname=gegl-git
pkgver=0.4.4.177
pkgrel=1
pkgdesc="Graph based image processing framework"
arch=('i686' 'x86_64')
url="http://www.gegl.org"
license=('GPL3' 'LGPL3')
depends=('babl>=0.1.52' 'libspiro' 'json-glib')
makedepends=('git' 'intltool' 'python2' 'ruby' 'lua'
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
provides=("gegl=${pkgver}")
conflicts=('gegl')
options=(!libtool)
source=(git+https://gitlab.gnome.org/GNOME/gegl.git)
md5sums=('SKIP')

_gitroot=GITURL
_gitname=gegl

prepare() {
	cd "$srcdir"/$_gitname

	autoreconf -if
	./configure --prefix=/usr --with-sdl --with-openexr --with-librsvg \
		--with-libavformat --with-jasper --disable-docs \
		--enable-workshop \
		--enable-introspection=yes
}

build() {
	cd "$srcdir"/$_gitname

	make
}

package() {
	cd "$srcdir"/$_gitname
	make DESTDIR="$pkgdir" install
}

pkgver() {
	cd "$srcdir"/$_gitname
	git describe --always | sed -e 's/GEGL_//' -e 's/-g.*$//' -e 's/[_-]/./g'
}
