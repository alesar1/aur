# Maintainer: Rachel Mant <aur@dragonmux.network>
# Maintainer: Rafael Silva <perigoso@riseup.net>

pkgbase=kicad-library-nightly
pkgname=('kicad-library-nightly' 'kicad-library-3d-nightly')
pkgver=6.99.0_1588_g702623ef87
pkgrel=1
pkgdesc='KiCAD component and footprint libraries'
arch=('any')
url='http://kicad.org/'
license=('GPL')
makedepends=('git' 'cmake' 'make')
options=('!strip')
source=(
	'git+https://gitlab.com/kicad/libraries/kicad-symbols.git'#commit=f73f013a
	'git+https://gitlab.com/kicad/libraries/kicad-footprints.git'#commit=32b336b94
	'git+https://gitlab.com/kicad/libraries/kicad-packages3D.git'#commit=d0b6359e
)
sha256sums=('SKIP' 'SKIP' 'SKIP')

build_package()
{
	cd "$1"
	cmake . \
		-DCMAKE_INSTALL_PREFIX=/usr/lib/kicad-nightly \
		-DKICAD_DATA=/usr/share/kicad-nightly
	make
}

build()
{
	build_package "$srcdir/kicad-symbols"
	build_package "$srcdir/kicad-footprints"
	build_package "$srcdir/kicad-packages3D"
}

package_kicad-library-nightly()
{
	pkgdesc="Kicad component and footprint libraries"
	cd "$srcdir/kicad-symbols"
	make DESTDIR="$pkgdir" install
	cd "$srcdir/kicad-footprints"
	make DESTDIR="$pkgdir" install
}

package_kicad-library-3d-nightly()
{
	pkgdesc="Kicad 3D render model libraries"
	cd "$srcdir/kicad-packages3D"
	make DESTDIR="$pkgdir" install
}
