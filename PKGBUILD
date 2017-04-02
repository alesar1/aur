# Maintainer: Tesx <tesfabpel@gmail.com>
pkgname=goxel
pkgver=0.5.0
pkgrel=1
pkgdesc="Open Source 3D voxel editor for Mac, Windows and Linux."
arch=('i686' 'x86_64')
url="https://guillaumechereau.github.io/goxel/"
license=('GPL3')
groups=()
makedepends=(scons pkg-config)
depends=(glfw gtk3)
source=("https://github.com/guillaumechereau/$pkgname/archive/v$pkgver.tar.gz"
	"wno-error.patch"
	"goxel.desktop"
	"goxel.png")
sha256sums=('2a17da02d79f116be1550f3c5e32121cd90b122c2ad02f27837c58915cada3f2'
	'481125eb004e777d1a474a75f04335126f4137c960f60525235735550c2889cf'
	'9b29df7405a9593396bc7ea810dc2871cce7c4ee474c1fa56d32f56c2ca2d921'
	'f857497012b8518817e321ff8e1e9f108c8e18b638285702f2041f82769d2652')

prepare() {
	cd "$pkgname-$pkgver"
	patch SConstruct "${srcdir}/wno-error.patch"
}

build() {
	cd "$pkgname-$pkgver"
	make release
}

package() {
	install -Dm644 goxel.desktop "$pkgdir/usr/share/applications/goxel.desktop"
	install -Dm644 goxel.png "$pkgdir/usr/share/icons/goxel.png"
	
	cd "$pkgname-$pkgver"
	install -Dm755 goxel "$pkgdir/usr/bin/goxel"
}
