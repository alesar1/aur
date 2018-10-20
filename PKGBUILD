# Maintainer: Pier Luigi Fiorini <pierluigi.fiorini@gmail.com>

pkgname=liri-pulseaudio-git
pkgver=20180603.71.ee850e7
pkgrel=1
pkgdesc="PulseAudio support for Liri Shell"
arch=('i686' 'x86_64' 'armv6h' 'armv7h')
url="https://liri.io"
license=('LGPL3')
depends=('fluid-git' 'pulseaudio')
makedepends=('git' 'liri-qbs-shared-git')
options=(debug !strip)
conflicts=('liri-pulseaudio')
replaces=('liri-pulseaudio')
provides=('liri-pulseaudio')
groups=('liri-git')

_gitroot="git://github.com/lirios/vibe.git"
_gitbranch=develop
_gitname=vibe
source=(${_gitname}::${_gitroot}#branch=${_gitbranch})
md5sums=('SKIP')

pkgver() {
	cd ${srcdir}/${_gitname}
	echo "$(git log -1 --format="%cd" --date=short | tr -d '-').$(git rev-list --count HEAD).$(git log -1 --format="%h")"
}

build() {
	cd ${srcdir}/${_gitname}
	qbs setup-toolchains --type gcc /usr/bin/g++ gcc
	qbs setup-qt /usr/bin/qmake-qt5 qt5
	qbs config profiles.qt5.baseProfile gcc
	qbs build --no-install -d build profile:qt5 \
		modules.lirideployment.prefix:/usr \
		modules.lirideployment.qmlDir:/usr/lib/qt/qml
}

package() {
	cd ${srcdir}/${_gitname}
	qbs install -d build --no-build -v --install-root $pkgdir profile:qt5
}
