# Maintainer: Markus Kalb <mk@filmkreis.tu-darmstadt.de>
# Contributor: Stefan Karner <stefan.karner@student.tuwien.ac.at>
pkgname=dcpomatic
pkgver=2.13.137
pkgrel=1
pkgdesc="A free, open-source program to generate Digital Cinema Packages (DCPs) from videos or images"
arch=('i686' 'x86_64')
url="http://dcpomatic.com/"
#  CXXFLAGS="$CXXFLAGS  -I/usr/include/openjpeg-1.5/  -std=c++11"
depends=('pangomm>=1.4' 'libsub>=1.4.4' 'libcxml>=0.16.1' 'libdcp>=1.6.5' 'ffmpeg>=4.0.2' 'glib2' 'imagemagick' 'libssh' 'wxgtk2>=3.0.1' 'libquickmail>=0.1.22' 'libzip' 'xz' 'libsndfile' 'libsamplerate' 'pangomm' 'rtaudio' 'x264')
makedepends=('python2' 'boost>=1.66.0' )
source=("${pkgname}-${pkgver}.tar.bz2::http://dcpomatic.com/dl.php?id=source&version=${pkgver}" )
sha256sums=('702da262b284d73077cfeda02f0df9176237769b58b394508d358610084de0f0')






build() {
  PKG_CONFIG_LIBDIR="/usr/lib64/pkgconfig/:/usr/lib/pkgconfig/:$PKG_CONFIG_LIBDIR"
  CXXFLAGS="$CXXFLAGS    -std=c++11 -O2 "

  cd "${srcdir}/${pkgname}-${pkgver}"
  python2 waf configure   --prefix=/usr --disable-tests
  python2 waf build
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  python2 waf install --destdir=$pkgdir
  cd "${pkgdir}"
  if [ -d usr/lib64  ]
  then
      mv usr/lib64 usr/lib
  fi
}
