# Contributor: Pedram Pourang <tsujan2000@gmail.com>
# Maintainer: Jan Neumann <neum DOT ja AT gmail DOT com
pkgname=kvantum-qt5
pluginname=kvantum
gitname=Kvantum
pkgver=0.10.5+gfbd0d4d217+gfbd0d4d217
pkgrel=1
pkgdesc="SVG-based Qt5 theme engine plus a config tool and extra themes"
arch=('x86_64')
url="https://github.com/tsujan/Kvantum"
license=('GPL')
groups=('qt')
depends=('qt5-base>=5.7.0' 'qt5-svg>=5.7.0' 'qt5-x11extras>=5.7.0' 'libx11>=1.6.4' 'libxext>=1.3.3')
makedepends=('cmake' 'qt5-tools>=5.7.0' 'unzip')
source=("https://github.com/tsujan/Kvantum/archive/master.zip")
md5sums=('SKIP')

pkgver() {
	echo ${pkgver}+g$(unzip -q -z "${srcdir}/master.zip" | cut -c1-10)
}

build() {
	cd "${srcdir}/${gitname}-master/${gitname}"
	cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr
	make
}

package() {
	cd "${srcdir}/${gitname}-master/${gitname}"
	make DESTDIR="$pkgdir/" install
	mkdir -p $pkgdir/usr/share/doc/kvantum
	cp ChangeLog $pkgdir/usr/share/doc/kvantum
	cp COPYING $pkgdir/usr/share/doc/kvantum
	cp -r doc $pkgdir/usr/share/doc/kvantum
}
