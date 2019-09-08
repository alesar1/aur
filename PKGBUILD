
# Contributor: Fabio Rämi <fabio[at]dynamix-tontechnik[dot]ch>
# Contributor: speps <speps at aur dot archlinux dot org>

pkgname=friture
pkgver=0.37
pkgrel=1
pkgdesc="An application to visualize and analyze live audio data in real-time."
arch=(i686 x86_64)
url="http://tlecomte.github.com/friture/"
license=('GPL3')
depends=('python-appdirs' 'python-docutils' 'python-numpy' 'python-opengl' 'python-pyqt5' 'python-pyrr' 'python-sounddevice')
optdepends=('jack: for JACK I/O support')
makedepends=('cython')
source=("https://github.com/tlecomte/$pkgname/archive/v$pkgver.tar.gz")

build() {
	cd "$srcdir/$pkgname-$pkgver"
	python setup.py build
}

package() {
	cd "$srcdir/$pkgname-$pkgver"
	python setup.py install --root="$pkgdir/"
	install -Dm644 resources/images/friture.iconset/icon_512x512.png $pkgdir/usr/share/pixmaps/${pkgname}.png
	install -Dm644 appimage/$pkgname.desktop "$pkgdir"/usr/share/applications/$pkgname.desktop
	sed -i "s|usr|/usr|g" "$pkgdir"/usr/share/applications/$pkgname.desktop
}
	

sha256sums=('ae5a03d6b173b857ebba546ecd1e6e311d0b14ef8f4b68336ff5ce5b3e43091d')
