# Maintainer: Denis Kasak <dkasak|AT|termina.org.uk>

pkgname=ekho
pkgver=7.7.1
pkgrel=1
pkgdesc="Chinese text-to-speech (TTS) software for Cantonese, Mandarin, Zhaoan Hakka, Tibetan, Ngangien and Korean"
arch=('i686' 'x86_64')
url="http://www.eguidedog.net/ekho.php"
license=('GPL')
depends=('libpulse' 'lame' 'festival' 'ncurses' 'espeak')
source=("http://downloads.sourceforge.net/e-guidedog/ekho-${pkgver}.tar.xz")
md5sums=('dadf0739fe6a67e5a1de03750b23a4a7')

prepare() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  CXXFLAGS="${CXXFLAGS} -fopenmp"
  if [ "${CARCH}" == "x86_64" ]; then
    CXXFLAGS="${CXXFLAGS} -D_x86_64"
  fi

  # fix undefined references to tget* functions
  sed -ie \
    's/^\(\s*LIB_FESTIVAL=.*\)-lncurses\(.*\)/\1-Wl,--push-state,--no-as-needed,-lncurses,--pop-state\2/' \
    $srcdir/$pkgname-$pkgver/configure

  ./configure --prefix=/usr --with-mp3lame --enable-festival
}

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  make
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  make DESTDIR="${pkgdir}/" install
}
