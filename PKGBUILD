# Maintainer: KNOSSOS-Team <knossos-team at mpimf-heidelberg.mpg.de>
#
# KNOSSOS saves its user preferences in $HOME/.config/MPIMF/

pkgname=knossos-git
pkgver=4.1.2.216.ge058cb3
pkgrel=1
arch=('x86_64')
pkgdesc="A software tool for the visualization and annotation of 3D image data. It was developed for the rapid reconstruction of neural morphology and connectivity."
url="http://www.knossostool.org/"
license=("GPL2")
depends=("boost"
    "glu"
    "libgl"
    "qt5-base"
    "qt5-python27"
    "quazip-qt5"
    "snappy"
)
makedepends=("cmake")
source=("git+https://github.com/knossos-project/knossos.git"
	"knossos-git.desktop"
)
md5sums=('SKIP'
         '85ae9c1721e627ccbe4eb850dcb7c42d')

pkgver() {
	cd "knossos"
	git describe --always --dirty --tags | sed 's/^v//;s/-/+/;s/-/./g'
}

build() {
	mkdir -p "build-$CHOST-$pkgname"
	cd "build-$CHOST-$pkgname"
	cmake ../knossos
	make
}

package() {
	install -Dm755 "build-$CHOST-$pkgname/knossos" "$pkgdir/usr/bin/knossos-git"
	install -Dm644 "knossos/resources/icons/knossos.png" "$pkgdir/usr/share/pixmaps/knossos-git.png"
	install -Dm644 "knossos-git.desktop" "$pkgdir/usr/share/applications/knossos-git.desktop"
}
