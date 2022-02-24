# Maintainer: Lukas1818 aur at lukas1818 dot de

pkgname=superslicer
pkgver=2.3.57.11
_pkgtag=$pkgver
pkgrel=2
epoch=1
pkgdesc="G-code generator for 3D printers (RepRap, Makerbot, Ultimaker etc.)"
arch=("$CARCH")
url="https://github.com/supermerill/SuperSlicer"
license=('AGPL3')
options=(!emptydirs)
depends=('boost-libs>=1.73.0' 'cgal' 'glew' 'imath' 'libspnav' 'nlopt' 'openvdb' 'qhull>=2020.2-4' 'wxgtk3-dev-314-opt')
makedepends=('boost>=1.73.0' 'cereal>=1.3.0' 'cmake' 'eigen' 'libigl' 'openvdb' 'samurai' 'wxgtk2-dev-314-opt') # cmake doesn't detect wx if not both gtk2 and gtk3 are installed
optdepends=('superslicer-profiles: Predefined printer profiles')
replaces=('slic3r++')
source=("https://github.com/supermerill/SuperSlicer/archive/$_pkgtag.tar.gz"
        "0001-wxgtk3-is-broken-on-wayland.patch"
        "0002-fix-cereal.patch"
        "0003-openexr3.patch")
sha512sums=('978eb5004d788e93ea58b788fbf8fe7a7c1c515b0a138e20662c3c1973b5c72373cd14c76d25ee180095c030416b5b4429b61bb73432910fe9288897a5d7cb4d'
            'acf35ebe467e9fb30f1b77d15348f1a7b82dcf45a5b829e375e972b5d6b49968603b3fa090c4d1f56e8b5148e2b820e79afa269da60ace70de1ceadcf6e820c5'
            '5e42f43f7b4d72c6d8d118728a8df22cc6127b3fdc0081871a43763fcaed76143bcad59a6abb56f918b94b227bb58bdd9bc06eb51f2abbc66b5725d7cc3c98d6'
            'c33c2414746bc9d7dceb5af59ecb4aed2189211fc3c8b144d712a39d3677ba4d366eb9b4dd05fbc3811954d69cd1273d714dc4536489fe153ac1aee2919e5c98')

prepare()
{
	cd "$srcdir/SuperSlicer-$_pkgtag"
	[ ! -f build/Makefile ] || rm -rf build
	mkdir -p build

	# disabling tests is not enough, we need to remove them explicitly
	sed -i 's,add_subdirectory(test),,g' src/CMakeLists.txt

	# apply patches
	patch -Np1 -i "$srcdir/0001-wxgtk3-is-broken-on-wayland.patch"
	patch -Np1 -i "$srcdir/0002-fix-cereal.patch"
	patch -Np1 -i "$srcdir/0003-openexr3.patch"

}

build()
{
	cd "$srcdir/SuperSlicer-$_pkgtag"
	cd build

	cmake .. \
		-G Ninja \
		-DCMAKE_BUILD_TYPE=Release \
		-DCMAKE_INSTALL_PREFIX=/usr \
		-DOpenGL_GL_PREFERENCE=GLVND \
		-DSLIC3R_FHS=ON \
		-DSLIC3R_STATIC=OFF \
		-DSLIC3R_WX_STABLE=ON \
		-DSLIC3R_GTK=3 \
		-DSLIC3R_BUILD_TESTS=OFF \
		-DSLIC3R_ALPHA=OFF \
		-DwxWidgets_CONFIG_EXECUTABLE=/opt/wxgtk-dev-314/bin/wx-config \
		-DCMAKE_CXX_FLAGS="-Wno-unused-command-line-argument -Wl,-rpath=/opt/wxgtk-dev-314/lib"

	samu
}

package()
{
	cd "$srcdir/SuperSlicer-$_pkgtag/build"

	DESTDIR="$pkgdir" samu install
	test ! -h "$pkgdir/usr/share/SuperSlicer/resources" || rm "$pkgdir/usr/share/SuperSlicer/resources"

	install -d "$pkgdir/usr/share/applications"
}
