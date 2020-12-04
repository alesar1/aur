# Contributor: foutrelis 
# Contributor: Sergej Pupykin <pupykin.s+arch@gmail.com>
# Contributor: Philipp Sandhaus <philipp.sandhaus@gmx.de>
# Contributor: Robert Emil Berge <filoktetes@linuxophic.org>
# Contributor: Gnud <ach.gnud@gmail.com>
# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>

pkgname=denemo-git
pkgver=2.4.0.r114.g4dcc8e6b1
pkgrel=1
epoch=1
pkgdesc="A music score editor"
arch=('x86_64')
url="http://www.denemo.org"
license=('GPL')
depends=('aubio' 'lilypond' 'gtk3' 'libxml2' 'fftw' 'librsvg' 'fluidsynth'
	 'libsmf' 'evince' 'gtksourceview3' 'portmidi' 'guile' 'rubberband')
makedepends=('intltool' 'git')
source=("git://git.savannah.gnu.org/denemo.git")
md5sums=('SKIP')
conflicts=("${pkgname%-git}")
provides=("${pkgname%-git}")

pkgver() {
  cd ${pkgname%-git}	
  git describe --tags | cut -c2- | sed 's+-+.r+' |tr - .
}

build() {
  cd ${pkgname%-git} 
  [ -x configure ] || ./autogen.sh
  ./configure --prefix=/usr --sysconfdir=/etc --disable-rpath --disable-portaudio --disable-portmidi 
  make
}

package() {
  cd ${pkgname%-git}
  make DESTDIR="$pkgdir" install
}

