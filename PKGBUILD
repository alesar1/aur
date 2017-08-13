# Maintainer: Josip Ponjavic <josipponjavic at gmail dot com>
# Contributor:

pkgname=mpc-qt-git
pkgver=17.08.r0.ge265526
pkgrel=1
pkgdesc='A clone of Media Player Classic reimplimented in Qt.'
url='https://github.com/cmdrkotori/mpc-qt'
arch=('i686' 'x86_64')
license=('GPL2')
depends=('mpv' 'qt5-x11extras')
makedepends=('git' 'qt5-tools')
optdepends=('libva-vdpau-driver: backend for Nvidia and AMD cards'
            'libva-intel-driver: backend for Intel cards')
provides=('mpc-qt')
conflicts=('mpc-qt')
source=("git+${url}.git"
        'mpc-qt.desktop')
sha256sums=('SKIP'
            '7694745aac0e52c050a6bc069a0686b025e509136919d985d3c4495eec0f1c9d')

pkgver() {
  cd mpc-qt
  git describe --long --tags | sed -r 's/([^-]*-g)/r\1/;s/-/./g;s/v//g'
}

build() {
  cd mpc-qt
  qmake-qt5 mpc-qt.pro
  make
}

package() {
  install -Dm755 mpc-qt/mpc-qt "$pkgdir/usr/bin/mpc-qt"
  install -Dm644 mpc-qt/images/icon/logo.svg "$pkgdir/usr/share/icons/hicolor/scalable/apps/mpc-qt.svg"
  install -Dm644 mpc-qt.desktop "$pkgdir/usr/share/applications/mpc-qt.desktop"
}
