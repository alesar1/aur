# Maintainer: TheNiceGuy <gabrielpolloguilbert@gmail.com>

pkgname=vpaint-git
pkgver=v1.6.r0.g85d499a
pkgrel=1
pkgdesc='VPaint is an experimental vector graphics editor based on the Vector Animation Complex technology. (git version)'
arch=('i686' 'x86_64')
license=('MIT')
depends=('qt4' 'glu' 'qt5-base' 'libxkbcommon-x11')
makedepends=('gcc' 'git' 'make')
url='http://www.vpaint.org'
conflicts=('vpaint')
provides=()
source=('vpaint-git::git+https://github.com/dalboris/vpaint.git')
md5sums=('SKIP')

prepare() {
	gendesk -f --pkgname "$pkgname" --pkgdesc "$pkgdesc"
}

pkgver() {
	cd $pkgname
	git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
	mkdir -p "$srcdir/$pkgname/build"
	cd       "$srcdir/$pkgname/build"

	export CXXFLAGS="$CXXFLAGS -fPIC"
	export QT_SELECT=5

	qmake ../src/VPaint.pro -r -spec linux-g++
	make
}

package() {
	mkdir -p "$pkgdir/usr/bin"

	install -Dm755 "$srcdir/$pkgname/build/Gui/VPaint" "$pkgdir/usr/bin/vpaint"
	install -Dm644 "vpaint.desktop" "$pkgdir/usr/share/applications/$pkgname.desktop"
}
