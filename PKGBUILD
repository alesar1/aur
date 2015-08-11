# Maintainer: Anton Löfgren <anton.lofgren@gmail.com>
pkgname=spotifile
pkgver=0.1.1
pkgrel=1
epoch=
pkgdesc="FUSE file system for Spotify"
arch=(x86_64)
url="https://github.com/catharsis/spotifile"
license=('BSD')
groups=()
depends=(glib2 fuse libspotify)
makedepends=(glib2 fuse libspotify)
checkdepends=(glib2 fuse check)
backup=()
options=()
install=
changelog=
source=("https://github.com/catharsis/$pkgname/archive/v$pkgver.tar.gz")
noextract=()
md5sums=(1a55380678960415d4f35a109b2203f3)
validpgpkeys=()

build() {
	cd "$pkgname-$pkgver"
	autoreconf -si
	./configure --prefix=/usr
	make
}

check() {
	cd "$pkgname-$pkgver"
	make -k check
}

package() {
	cd "$pkgname-$pkgver"
	make DESTDIR="$pkgdir/" install

	#Install license
	install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
