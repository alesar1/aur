# Maintainer: Pier Luigi Fiorini <pierluigi.fiorini@gmail.com>

pkgname=fluid-git
pkgver=20160706.2f2b7a6
pkgrel=1
pkgdesc="Components for Qt Quick applications"
arch=('i686' 'x86_64' 'armv6h' 'armv7h')
url='http://hawaiios.org'
license=('LGPL')
depends=('qt5-quickcontrols' 'qt5-quickcontrols2' 'qt5-graphicaleffects' 'qt5-svg')
makedepends=('git' 'gdb' 'extra-cmake-modules')
conflicts=('fluid')
replaces=('fluid')
provides=('fluid')
groups=('hawaii-git')
options=('debug')

_gitroot="git://github.com/hawaii-desktop/fluid.git"
_gitbranch=master
_gitname=$pkgname
source=(${_gitname}::${_gitroot}#branch=${_gitbranch})
md5sums=('SKIP')

pkgver() {
	cd ${srcdir}/${_gitname}
	echo "$(git log -1 --format="%cd" --date=short | tr -d '-').$(git log -1 --format="%h")"
}

prepare() {
	mkdir -p build
}

build() {
	cd build
	cmake ../${_gitname} \
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
