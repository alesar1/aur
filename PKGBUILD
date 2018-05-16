# Maintainer:  Johan Helsing <johanhelsing@gmail.com>
# Contirbutor: Swift Geek
# Contributor: Jerome Leclanche <jerome@leclan.ch>
# Contributor: Andrea Scarpino <andrea@archlinux.org>
# Contributor: Pier Luigi Fiorini <pierluigi.fiorini@gmail.com>
# Contributor: Mateusz Paluszkiewicz <aifam96 at gmail dot com> # Other hacks for repo's target, qt5-wayland-dev-git package

_pkgname=qt5-wayland
pkgname=$_pkgname-dev-backport-git
pkgver=5.10.1.281e3d58
pkgrel=1
pkgdesc="A cross-platform application and UI framework (QtWayland)"
arch=("i686" "x86_64")
url="http://code.qt.io/cgit/qt/qtwayland.git/"
license=("GPL3" "LGPL")
depends=("qt5-declarative" "libxcomposite" "wayland")
makedepends=("git")
provides=("$_pkgname")
conflicts=("$_pkgname")
sha256sums=('SKIP')

# Definition with userside version of Qt5
_qt5_userversion=`pkg-config --modversion Qt5Core`
_branch=dev-for-$(echo ${_qt5_userversion} | cut -d. -f1,2)

source=("$_pkgname::git://github.com/johanhelsing/qtwayland-backports.git#branch=${_branch}")

pkgver() {
  cd "$srcdir/$_pkgname"
  echo "${_qt5_userversion}.$(git rev-parse --short HEAD)"
}

prepare() {
  cd "$srcdir/$_pkgname"
  # Replace Qt version to user version (Qt)
  sed -i "3s/.*/MODULE_VERSION = ${_qt5_userversion}/" ./.qmake.conf
  if [ -d ./build ]; then
    rm -rf --one-file-system ./build
  fi
}

build() {
  cd "$srcdir/$_pkgname"
  mkdir build
  cd build
  export QT_SELECT=5
  qmake CONFIG+=wayland-compositor ..
  make
}

package() {
  cd "${srcdir}/${_pkgname}"
  cd build
  make INSTALL_ROOT="${pkgdir}" install
}
