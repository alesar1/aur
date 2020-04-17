# Maintainer: Mikael Blomstrand <gmail: kmbloms>

pkgname=fahviewer-git
pkgver=7.6.8
pkgrel=1
pkgdesc="Folding@home 3D Simulation Viewer"
url="http://folding.stanford.edu/English/HomePage"
arch=('x86_64')
license=('GPL2')
conflicts=('fahviewer')
provides=('fahviewer')
makedepends=('git' 'scons')
depends=('freetype2' 'freeglut' 'glu')
source=("git+https://github.com/FoldingAtHome/fah-viewer.git"
		"git+https://github.com/FoldingAtHome/fah-client-version.git"
		"git+https://github.com/CauldronDevelopmentLLC/cbang.git")

sha1sums=('SKIP'
          'SKIP'
          'SKIP')

pkgver() {
	cat "${srcdir}/fah-client-version/version.txt"
}

build() {
	export CBANG_HOME=${srcdir}/cbang
	export FAH_CLIENT_VERSION_HOME=${srcdir}/fah-client-version
	export FAH_VIEWER_HOME=${srcdir}/fah-viewer

	cd "$CBANG_HOME"
	msg2 "Building C!..."
	scons with_openssl=no disable_local=libevent

	cd "${srcdir}"
	msg2 "Building FAHViewer..."
	scons -C "$FAH_VIEWER_HOME"
}

package() {
	cd fah-viewer
	install -Dm755 FAHViewer "${pkgdir}/usr/bin/FAHViewer"
	install -Dm644 FAHViewer.desktop "${pkgdir}/usr/share/applications/FAHViewer.desktop"
	install -Dm644 images/FAHViewer-64.png "${pkgdir}/usr/share/pixmaps/FAHViewer-64.png"
	install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}


