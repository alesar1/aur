# Maintainer: Sergio Conde <skgsergio@gmail.com>

pkgname=gr-air-modes-git
pkgver=20150710
pkgrel=2
pkgdesc="A software-defined radio receiver for Mode S transponder signals, including ADS-B reports from equipped aircraft."
arch=('i686' 'x86_64')
url='https://github.com/bistromath/gr-air-modes'
license=('BSD')
depends=('python2' 'python2-pyzmq' 'gnuradio' 'gnuradio-osmosdr' 'libuhd' 'sqlite' 'boost')
makedepends=('git' 'cmake' 'swig')
optdepends=('python2-pyqt4: GUI application (needs rebuild, install before).'
            'python2-pyqwt: GUI application (needs rebuild, install before).'
            'python2-numpy: FlightGear interface support.'
            'python2-scipy: FlightGear interface support.')
provides=('gr-air-modes')
install="${pkgname}.install"
source=("$pkgname::git+https://github.com/bistromath/gr-air-modes.git"
       'fix-pyqtconfig-missing-for-new-pyqt4.patch')
sha256sums=('SKIP'
           '346532b617e5557188a3493a5be2bd08ff29823eb11cc207336a0e32f9ac7344')

pkgver() {
  cd "$srcdir/$pkgname"
  git show -s --format="%cd" --date=short HEAD | tr -d '-'
}

prepare() {
  cd "$srcdir/$pkgname"
  # Fix pyqt4 detection, this patch should be deleted when this pull request
  # is accepted https://github.com/bistromath/gr-air-modes/pull/67
  patch -Np1 -i "../fix-pyqtconfig-missing-for-new-pyqt4.patch"
}

build() {
  cd "$srcdir/$pkgname"
  mkdir -p build
  cd build

  # Run cmake with python vars adjusted for using python2
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr \
        -DPYTHON_EXECUTABLE:FILEPATH=$(which python2) \
        -DPYTHON_INCLUDE_DIR:PATH=$(echo /usr/include/python2*) \
        -DPYTHON_LIBRARY:FILEPATH=$(echo /usr/lib/libpython2.*.so) \
        -DPYUIC4_EXECUTABLE:FILEPATH=/usr/bin/python2-pyuic4 \
        ../

  # If make is run with more than one job it fails
  make -j 1
}

package() {
  cd "$srcdir/$pkgname/build/"
  make DESTDIR="$pkgdir" install

  # Fix shebangs
  _pyFiles=$(find "$pkgdir" -iname '*.py' -or -iname 'modes_rx' -or -iname 'modes_gui')
  sed -i 's|#!/usr/bin/env python.*|#!/usr/bin/env python2|' $_pyFiles
  sed -i 's|#!/usr/bin/python.*|#!/usr/bin/env python2|' $_pyFiles
}
