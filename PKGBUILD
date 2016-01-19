# Maintainer: Pier Luigi Fiorini <pierluigi.fiorini@gmail.com>

pkgname=hawaii-shell
pkgver=0.6.0
pkgrel=1
pkgdesc="Hawaii Shell"
arch=('i686' 'x86_64' 'armv6h' 'armv7h')
url='http://hawaiios.org'
license=('GPL', 'LGPL')
depends=('qt5-tools' 'qt5-quickcontrols' 'qt5-graphicaleffects' 'qt5-svg'
         'greenisland' 'pam' 'libpulse' 'libqtxdg' 'glib2' 'networkmanager-qt'
         'hawaii-icon-theme' 'hawaii-wallpapers' 'libhawaii' 'solid'
         'ttf-dejavu' 'ttf-droid')
optdepends=('weston: nested mode support'
            'pulseaudio: audio support'
            'networkmanager: networking support')
makedepends=('gdb' 'extra-cmake-modules')
conflicts=('hawaii-shell-git')
groups=('hawaii')
options=('debug')
source=("https://github.com/hawaii-desktop/${pkgname}/releases/download/v${pkgver}/${pkgname}-${pkgver}.tar.xz")
sha1sums=('766a8bedbf00c3a25dac8d5a88483f757295d17e')

prepare() {
	mkdir -p build
}

build() {
	cd build
	cmake ../${pkgname}-${pkgver} \
		-DCMAKE_INSTALL_PREFIX=/usr \
		-DLIB_INSTALL_DIR=lib \
		-DLIBEXEC_INSTALL_DIR=lib \
		-DQML_INSTALL_DIR=lib/qt/qml \
		-DKDE_INSTALL_USE_QT_SYS_PATHS=ON \
		-DCMAKE_BUILD_TYPE=RelWithDebInfo
	make
}

package() {
	cd build
	make DESTDIR="${pkgdir}" install
}
