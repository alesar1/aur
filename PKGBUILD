# Maintainer: Filipe Laíns (FFY00) <filipe.lains@gmail.com>
# Contributor: Michal Krenek (Mikos) <m.krenek@gmail.com>
pkgname=sdrangel
pkgver=4.0.1
pkgrel=1
pkgdesc="Qt5/OpenGL SDR and signal analyzer frontend for Airspy, BladeRF, HackRF, RTL-SDR, SDRplay and FunCube"
arch=('any')
url="https://github.com/f4exb/sdrangel"
license=('GPL3')
depends=(
  'pkg-config' 'boost' 'log4cpp'
  'qt5-base>=5.9' 'qt5-tools' 'qt5-multimedia' # QT5
  'fftw' 'lz4' 'nanomsg' 'ffmpeg>=3.1'
  'cm256cc' 'dsdcc>=1.8.3'
  'pulseaudio'
)
makedepends=('git' 'cmake')
optdependds=(
  'ffmpeg: DATV demodulator'
  'libmirisdr4: SDRPlay support'
  'rtl-sdr: RTLSDR support'
  'libad9361-iio: PlutoSDR support'
  'limesuite: LiimeSDR support'
  'bladerf: BladeRF support'
  'airspy: AirSPY support'
)
provides=("sdrangel")
conflicts=("sdrangel")
source=("https://github.com/f4exb/sdrangel/archive/v$pkgver.tar.gz")
sha256sums=('f23cb0c4e497adca66c3c060d314db0c1f27284e364b6f2ff44cdc3f164fd7aa')

build() {
  mkdir -p $srcdir/$pkgname-$pkgver/build
  cd $srcdir/$pkgname-$pkgver/build

  cmake .. \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DLIBDSDCC_INCLUDE_DIR=/usr/include/dsdcc \
    -DCM256CC_INCLUDE_DIR=/usr/include/cm256cc

  make
}

package() {
  cd $srcdir/$pkgname-$pkgver/build

  make DESTDIR=$pkgdir install
}
