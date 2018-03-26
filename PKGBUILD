# Maintainer: Markus Kalb <mk@filmkreis.tu-darmstadt.de>
# Contributor: Stefan Karner <stefan.karner@student.tuwien.ac.at>
pkgname=dcpomatic
pkgver=2.12.2
pkgrel=2
pkgdesc="A free, open-source program to generate Digital Cinema Packages (DCPs) from videos or images"
arch=('i686' 'x86_64')
url="http://dcpomatic.com/"
#  CXXFLAGS="$CXXFLAGS  -I/usr/include/openjpeg-1.5/  -std=c++11"
depends=('pangomm>=1.4' 'libsub>=1.3.0' 'libcxml>=0.15.5' 'libdcp>=1.5.2' 'ffmpeg' 'glib2' 'imagemagick' 'libssh' 'wxgtk2>=3.0.1' 'libquickmail>=0.1.22' 'libzip' 'xz' 'libsndfile' 'libsamplerate' 'pangomm' 'rtaudio')
makedepends=('python2' 'boost>=1.66.0' )
source=("${pkgname}-${pkgver}.tar.bz2::http://dcpomatic.com/dl.php?id=source&version=${pkgver}" )
sha256sums=('ea471e7337019713f2b9c969d1705d2be170888514f4c35fd0f9a3a56d075790')






build() {
#  CXXFLAGS="$CXXFLAGS  -I/usr/include/openjpeg-1.5/  -std=c++11"
  CXXFLAGS="$CXXFLAGS    -std=c++11 -O2 "

  cd "${srcdir}/${pkgname}-${pkgver}"
  python2 waf configure   --prefix=/usr
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
