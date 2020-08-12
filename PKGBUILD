# Maintainer: Joshua Rubin <me at jawa dot dev>

pkgname=jtdx
pkgver=rc151
pkgrel=1
pkgdesc='For amateur radio communication using very weak signals. Forked from WSJT-X.'
arch=('x86_64')
url='https://github.com/jtdx-project/jtdx'
license=('GPL3')
depends=('fftw' 'portaudio' 'hamlib' 'qt5-serialport' 'qt5-multimedia')
makedepends=('cmake' 'asciidoctor' "jtdxhamlib=${pkgver}" 'gcc9' 'gcc9-fortran')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/jtdx-project/${pkgname}/archive/${pkgver}.tar.gz")
md5sums=('ab62c3ce38fc8426cadfb75a4d2b8ac7')
sha1sums=('1e052c377ee20c2377d1f0f809be5cdb3097f631')
sha224sums=('4d007f722b39cae37546e5ba6b529f8b0358efddc6a8269a2f99ed4c')
sha256sums=('42beaed0544f9f180feaf936ce8a2adcbbe0b920e8d56382bf396de37cecb0d8')
sha384sums=('665041b057bc8a4945338c3232b1c27de41d0be91785d573019916399f9206ffadfb1fd2ca357cb87e6531c15d2bc8e7')
sha512sums=('9fc0615d2b7b76750af78c3fededdf4fcb2d2cc9202d6340d45d680dd37fa54e60c028da4c5dd724b24ef91f68600a87c3082ac1d47158123f529aed0fb1fabc')
b2sums=('f6c6196f50bf8b2bc670229dc4afa4c5d7a7bf1ed8ee60c76581bb384ee1a5cc6cb732e2bd3cb2c987658e7973c25b0b1f030db0edf42d3d50e9d4cd111bcbc5')

build() {
  cd "${pkgname}-${pkgver}"
  rm -rf build
  mkdir build
  cd build

  export CC=/usr/bin/gcc-9
  export CXX=/usr/bin/g++-9
  export FC=/usr/bin/gfortran-9
  cmake \
    -D CMAKE_PREFIX_PATH=/opt/jtdxhamlib \
    -D CMAKE_INSTALL_PREFIX=/usr \
    ..
  make
}

package() {
  cd "${pkgname}-${pkgver}/build"
  make DESTDIR="${pkgdir}/" install
}
