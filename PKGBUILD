# Maintainer: Christopher Arndt <aur -at- chrisarndt -dot- de>

_pkgname=qstlink2
pkgname="${_pkgname}-git"
pkgver=1.2.3.r227.562460b
pkgrel=2
pkgdesc="A ST-Link V2 (Debugger/Programmer) client graphical user interface"
arch=('i686' 'x86_64' 'arm')
url="https://github.com/fpoussin/QStlink2"
license=('GPL3')
depends=('qt5-base' 'libusb')
makedepends=('git')
optdepends=('stlink: udev rules')
provides=("${_pkgname}")
conflicts=("${_pkgname}" 'qstlink' 'qstlink2-svn')
source=("${_pkgname}::git+https://github.com/fpoussin/QStlink2.git")
sha256sums=('SKIP')


pkgver() {
  cd "${srcdir}/${_pkgname}"

  local ver=$(git describe --tags)
  echo "${ver#v*}.r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
}

prepare(){
  cd "${srcdir}/${_pkgname}"

  git submodule init
  git submodule update
}

build() {
  cd "${srcdir}/${_pkgname}"

  qmake-qt5
  make
}

package() {
  cd "${srcdir}/${_pkgname}"

  make INSTALL_ROOT="$pkgdir" install
  rm -rf "$pkgdir/etc/udev"
}

# vim:set ts=2 sw=2 et:
