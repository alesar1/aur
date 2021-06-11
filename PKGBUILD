# Maintainer: Lukas1818 aur at lukas1818 dot de

pkgname=superslicer-git
pkgver=2.3.56.4.r0.gea2aea4c3
pkgrel=2
epoch=1
pkgdesc="G-code generator for 3D printers (RepRap, Makerbot, Ultimaker etc.)"
arch=("$CARCH")
url="https://github.com/supermerill/SuperSlicer"
license=('AGPL3')
depends=('cgal' 'glew' 'nlopt' 'openvdb' 'wxgtk3-dev-opt' 'boost>=1.73.0' 'qhull>=2020.2-4')
replaces=('slic3r++')
makedepends=('git' 'cereal' 'cmake' 'eigen' 'libigl' 'wxgtk2-dev-opt') # cmake doesn't detect wx if not both gtk2 and gtk3 are installed
provides=("superslicer=$epoch:$pkgver")
conflicts=('superslicer' 'superslicer-prerelease')
source=("SuperSlicer::git+https://github.com/supermerill/SuperSlicer.git"
        "start-superslicer.sh"
        "0001-wxgtk3-is-broken-on-wayland.patch"
        "https://raw.githubusercontent.com/archlinux/svntogit-community/1dea61c0b581ff5001d073689f68b0323740be93/trunk/prusa-slicer-openexr3.patch")
sha512sums=('SKIP'
            '6a117a0ae2e82b2c0ad9e8f746fddeceb1b0efe04962468e266d7ee9d38218311fff5a82c9880b82a23b2499461ba6f8f3cabef064fc8f9b906b0e2e35bcd846'
            'acf35ebe467e9fb30f1b77d15348f1a7b82dcf45a5b829e375e972b5d6b49968603b3fa090c4d1f56e8b5148e2b820e79afa269da60ace70de1ceadcf6e820c5'
            'c33c2414746bc9d7dceb5af59ecb4aed2189211fc3c8b144d712a39d3677ba4d366eb9b4dd05fbc3811954d69cd1273d714dc4536489fe153ac1aee2919e5c98')

pkgver()
{
	cd "$srcdir/SuperSlicer"
	git describe --long --tags | sed -E 's,^([0-9\.]+)([^0-9\.].*)?-([0-9]+)-(g[0-9a-f]+)$,\1.r\3.\4,'
}

prepare()
{
	cd "$srcdir/SuperSlicer"

	# disabling tests is not enough, we need to remove them explicitly
	sed -i 's,add_subdirectory(test),,g' src/CMakeLists.txt

	# apply patches
	patch --forward --strip=1 --input="$srcdir/0001-wxgtk3-is-broken-on-wayland.patch"
	patch -p1 < "$srcdir/prusa-slicer-openexr3.patch" # Fix build with openEXR 3
}

build()
{
	cd "$srcdir/SuperSlicer"
	mkdir -p build
	cd build

	cmake .. \
		-DCMAKE_BUILD_TYPE=Release \
		-DCMAKE_INSTALL_PREFIX=/usr \
		-DOpenGL_GL_PREFERENCE=GLVND \
		-DSLIC3R_FHS=ON \
		-DSLIC3R_STATIC=OFF \
		-DSLIC3R_WX_STABLE=ON \
		-DSLIC3R_GTK=3 \
		-DSLIC3R_BUILD_TESTS=OFF \
		-DSLIC3R_ALPHA=ON \
		-DwxWidgets_CONFIG_EXECUTABLE=/opt/wxgtk-dev/bin/wx-config

	make
}

package()
{
	cd "$srcdir/SuperSlicer/build"

	make DESTDIR="$pkgdir" install
	test ! -h "$pkgdir/usr/share/SuperSlicer/resources" || rm "$pkgdir/usr/share/SuperSlicer/resources"
	test ! -h "$pkgdir/usr/bin/prusa-gcodeviewer" || rm "$pkgdir/usr/bin/prusa-gcodeviewer"

	mv "$pkgdir/usr/bin/superslicer" "$pkgdir/usr/share/SuperSlicer"
	install -Dm 755 "${srcdir}/start-superslicer.sh" "${pkgdir}/usr/bin/superslicer"
}
