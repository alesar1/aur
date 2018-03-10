# Contributor: Lars Boettcher <lars@newyew.de>
# Maintainer: Aaron Ali <t0nedef@causal.ca>

pkgname=klayout
pkgver=0.25.1
pkgrel=1
pkgdesc="High Performance Layout Viewer And Editor. Support of GDS and OASIS files."
arch=('i686' 'x86_64')
url="http://www.klayout.org/"
license=('GPL')
depends=('qt4' 'ruby2.4' 'python')
source=(
	http://www.klayout.org/downloads/source/klayout-${pkgver}.tar.gz
	klayoutEditor.desktop
	klayoutViewer.desktop
)
noextract=("klayout-${pkgver}.tar.gz")
prepare() {
	mkdir klayout-${pkgver}
	bsdtar -C klayout-${pkgver} -xf klayout-${pkgver}.tar.gz
}
build() {
	cd "$srcdir/klayout-${pkgver}"
	build_opt="-qmake /usr/lib/qt4/bin/qmake
		-ruby /opt/ruby2.4/bin/ruby
		-python /usr/bin/python"
	./build.sh $build_opt
}
package() {
	cd "$srcdir"
	install -D -m 644 klayoutEditor.desktop ${pkgdir}/usr/share/applications/klayoutEditor.desktop
	install -D -m 644 klayoutViewer.desktop ${pkgdir}/usr/share/applications/klayoutViewer.desktop
	cd klayout-${pkgver}
	install -D -m 644 etc/logo.png ${pkgdir}/usr/share/icons/hicolor/32x32/apps/klayout.png
	install -D -m 755 build-release/klayout ${pkgdir}/usr/bin/klayout
	cd bin-release
	for lib in `find . -type f | grep so`; do
		install -D -m 755 $lib ${pkgdir}/usr/lib/$lib
	done
	for lib in `find . -type l | grep so`; do
		cp -a $lib ${pkgdir}/usr/lib/$lib
	done
}
#
md5sums=('0ff582af1c308a5595cdbdee20b95a61'
         'e790f7fca3c1138e21068d7927fb8ff4'
         'e6b98e9146c476a5cb76162999964aa8')
