# Maintainer: nixi <nixi at cock dot li>

pkgname=ulozto-downloader
pkgver=3.2.0
pkgrel=1
pkgdesc='Uloz.to quick multiple sessions downloader'
arch=('any')
url='https://github.com/setnicka/ulozto-downloader'
license=('MIT')
depends=('tor' 'tk' 'python-requests' 'python-pillow' 'python-ansicolors' 'python-numpy' 'python-pysocks' 'python-stem')
optdepends=('python-tflite-runtime: automatic CAPTCHA solving')
makedepends=('python-setuptools')
source=("https://github.com/setnicka/ulozto-downloader/archive/refs/tags/$pkgver.tar.gz")
sha256sums=('d7f6646fad0bc4742cef5ed2678c4d0046972d385bec8d3683411ce7483baea9')

package() {
	cd "$srcdir/ulozto-downloader-$pkgver"
	python setup.py install --root="$pkgdir/" --optimize=1
	install -D -m644 "LICENSE.txt" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
