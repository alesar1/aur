# Maintainer: Florian Freund <florian 88 freund aatt gmail ddoott ccoomm>
# Contributor: Mark Coolen <mark ddoott coolen aatt gmail ddoott ccoomm nniiccee!>
# Contributor: Keshav Amburay <(the ddoott ridikulus ddoott rat) (aatt) (gemmaeiil) (ddoott) (ccoomm)>

_pkgname="xournalpp"
pkgname="${_pkgname}-git"

pkgver=1.0.13.nightly.20190722.r0.gd1f0ea09
pkgrel=1
pkgdesc='Xournal++ is a handwriting Notetaking software with PDF annotation support. Supports Pen input like Wacom Tablets.'
arch=('i686' 'x86_64')
url="https://github.com/xournalpp/xournalpp"
license=('GPL2')
makedepends=('git' 'cmake' 'cppunit')
depends=('texlive-bin' 'gtk3' 'glib2' 'poppler-glib' 'libxml2' 'portaudio' 'libsndfile' 'libzip')
optdepends=('lua>=5.3: Enable Xournal++ Plugins')
conflicts=('xournalpp')
install="xournalpp.install"
source=("${_pkgname}::git+https://github.com/xournalpp/xournalpp.git")
sha256sums=('SKIP')

pkgver() {
	cd "${srcdir}/${_pkgname}/"
	git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
	mkdir -p "${srcdir}/${_pkgname}/build"
}

build() {
	if [ -z "$XDG_CONFIG_HOME" ]; then
		configdir=".config"
	else
		configdir="$(realpath --relative-to="$HOME" "$XDG_CONFIG_HOME")"
	fi
	cd "${srcdir}/${_pkgname}/build"

	cmake -DCMAKE_INSTALL_PREFIX="/usr/" -DDEV_CONFIG_DIR="$configdir/xournalpp" -DENABLE_CPPUNIT=ON ..
	cmake --build .
}

check() {
	cd "${srcdir}/${_pkgname}/build"

	cmake --build . --target test
}

package() {
	cd "${srcdir}/${_pkgname}/build"

	make DESTDIR="${pkgdir}/" install
}
