# This PKGBUILD is not a full PKGBUILD
# pkgver, source, and sha1sums are to be generated
pkgname=freecad-linkstage3-bin
pkgdesc='A general purpose 3D CAD modeler - Daily build of LinkDaily branch'
pkgrel=1
arch=(x86_64)
url='http://www.freecadweb.org/'
license=('LGPL')
conflicts=('freecad')
depends=(
	# Copied from Freecad package
	'boost-libs' 'curl' 'opencascade>=7.2' 'openmpi' 'xerces-c' 'libspnav' 'glew' 'netcdf' 'utf8cpp'
	'shared-mime-info' 'hicolor-icon-theme' 'jsoncpp' 'qt5-base' 'qt5-declarative'
	'qt5-svg' 'qt5-tools' 'qt5-x11extras' 'qt5-xmlpatterns' 'qt5-webkit' 'med'
	'python-pivy' 'pyside2' 'python-matplotlib' 'pyside2-tools' 'shiboken2'
)

## BEGIN generated variables
pkgver=2022.07.21.edge.r0.g5eb4402ab6
sha1sums=('32481642391387e695356e819c64cdd88cdb8968')

## END generated variables

source=("$pkgname-$pkgver.tar.zst::https://github.com/Bonnee/freecad-build-arch/releases/download/${pkgver}/${pkgname%-bin}-git-${pkgver}-${pkgrel}-${arch}.pkg.tar.zst")

package() {
	cp -r $srcdir/usr $pkgdir/
}

