# Maintainer: Donald Carr<sirspudd at gmail dot com>

# set -x

_qmake="qmake"
_piver=""

if [[ -z $_piver ]] && [[ -n $LOCAL_PI_VER ]]; then
  _piver=$LOCAL_PI_VER
fi

_pi_qmake="/opt/qt-sdk-raspberry-pi${_piver}/bin/qmake"
_pi_qmake_static="/opt/qt-sdk-raspberry-pi${_piver}-static/bin/qmake"
_qmake_static="/opt/qt-sdk-static/bin/qmake"
_static=false

if [[ -x "${_pi_qmake_static}" ]]; then
  _qmake=${_pi_qmake_static}
  _static=true
elif [[ -x "${_pi_qmake}" ]]; then
  _qmake=${_pi_qmake}
elif [[ -x "${_qmake_static}" ]]; then
  _qmake=${_qmake_static}
  _static=true
fi

if [[ -n "$_piver" ]]; then
  if ! $_static; then
    depends=('qt-sdk-raspberry-pi-target-libs')
  fi
  #makedepends=("qt-sdk-raspberry-pi${_piver}")
fi

# Uncomment for a debug build
#_qmake_args="CONFIG+=debug"
_pkgname=artriculate
pkgname=${_pkgname}-git
pkgver=0.4.r9.g0d98bbc
pkgrel=1
pkgdesc='QML box2d application for displaying artwork'
arch=('any')
url='https://github.com/sirspudd/artriculate'
license=('GPL3')
source=("git://github.com/sirspudd/${_pkgname}")
sha256sums=('SKIP')
options=('!strip')

prepare() {
  cd "$srcdir/$_pkgname"

  git submodule init
  git submodule update
}

pkgver () {
  cd "$srcdir/$_pkgname"

  git describe --tags --long | sed -r 's/^v//;s/-RC/RC/;s/([^-]*-g)/r\1/;s/-/./g'
}

build() {
  cd "$srcdir"/"$_pkgname"
  $_qmake
  make
}

package() {
  cd ${srcdir}/${_pkgname}

  INSTALL_ROOT="$pkgdir" make install
}
