# Contributor: foutrelis 
# Contributor: Sergej Pupykin <pupykin.s+arch@gmail.com>
# Contributor: Philipp Sandhaus <philipp.sandhaus@gmx.de>
# Contributor: Robert Emil Berge <filoktetes@linuxophic.org>
# Contributor: Gnud <ach.gnud@gmail.com>
# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>

pkgname=denemo
pkgver=2.3.0
pkgrel=2
pkgdesc="A music score editor"
arch=('x86_64')
url="http://www.denemo.org"
license=('GPL')
depends=('aubio' 'lilypond' 'gtk3' 'libxml2' 'fftw' 'librsvg' 'fluidsynth'
	 'libsmf' 'evince' 'gtksourceview3' 'portmidi' 'guile1.8' 'rubberband')
makedepends=('intltool' 'git')
noextract=(${pkgname}-${pkgver}.tar.gz)
validpgpkeys=('C66734FA5D60E4DDD882EF81AE6F83BB6C574235') # Jeremiah Benham, AE6F83BB6C574235
source=("https://ftp.gnu.org/gnu/${pkgname}/${pkgname}-${pkgver}.tar.gz"{,.sig})
sha256sums=('7e2110737f216311df6e2a41e8a4060a8d9776aac2310ea94c582faa076593ae'
            'SKIP')

prepare() {
  cd "$srcdir"
  LC_ALL=en_US.UTF-8 tar xzf ${pkgname}-${pkgver}.tar.gz
}

build() {
  cd $pkgname-$pkgver
  [ -x configure ] || ./autogen.sh
  ./configure --prefix=/usr --sysconfdir=/etc --disable-rpath
  make
}

package() {
  cd $pkgname-$pkgver
  make DESTDIR="$pkgdir" install
}
