# This is an example PKGBUILD file. Use this as a start to creating your own,
# and remove these comments. For more information, see 'man PKGBUILD'.
# NOTE: Please fill out the license field for your package! If it is unknown,
# then please put 'unknown'.

# Maintainer: Your Name <jkraehemann@gmail.com>
pkgname=gsequencer
pkgver=2.2.28
pkgrel=1
pkgdesc="Advanced Gtk+ Sequencer"
arch=('x86_64' 'i686')
url="https://nongnu.org/gsequencer"
license=('GPL3')
depends=('fftw' 'ladspa' 'dssi' 'lv2' 'libsndfile' 'libsamplerate' 'libinstpatch' 'libpulse' 'gtk2')
checkdepends=('cunit' 'xorg-server-xvfb')
provides=('gsequencer' 'midi2xml')
conflicts=('midi2xml')
source=("https://download.savannah.gnu.org/releases/gsequencer/2.2.x/$pkgname-$pkgver.tar.gz")
noextract=()
md5sums=('d15cb8a8045bb6b7a25b5565bb6b43cb')
validpgpkeys=()

prepare() {
	cd "$pkgname-$pkgver"
}

build() {
	cd "$pkgname-$pkgver"
	./configure --prefix=/usr
	make
}

check() {
	cd "$pkgname-$pkgver"
	xvfb-run --server-args "-screen 0 1920x1080x24" -a make -k check
}

package() {
	cd "$pkgname-$pkgver"
	make DESTDIR="$pkgdir/" install
}
