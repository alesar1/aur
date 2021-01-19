# Maintainer: Eli Stone <eli.stonium@gmail.com>

pkgname=qencoder
_name="${pkgname#python-}"
pkgver=2.1.1
pkgrel=1
pkgdesc='A graphical frontend to av1an. Encode higher quality vpx/av1 video faster!'
url='https://github.com/natis1/qencoder'
arch=('any')
license=('GPL3')
source=(
	"https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz"
	"qencoder.desktop"
)
makedepends=('python-setuptools')
depends=(
	'python' 'python-pyqt5' 'python-psutil'
	'libvpx' 'aom' 'ffmpeg' 'python-av1an'
)

sha256sums=('dd44b121a696dcfa8522cba8951078c71ebcb81b01f518be69f5f2b7bfc4fa4a'
            '3e9786a3fe1b7d6e3798fcf07cdd1e5db29e125cdc4c559dc095a8b1a143b1a5')

build() {
	cd "$pkgname-$pkgver"
	python setup.py build
}

package() {
	install -Dm644 qencoder.desktop "$pkgdir/usr/share/applications/qencoder.desktop"
	cd "$pkgname-$pkgver"
	python setup.py install --root="$pkgdir" --optimize=1 --skip-build
}
