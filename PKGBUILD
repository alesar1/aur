# Maintainer: Simon Legner <Simon.Legner@gmail.com>
# Based on the python-pillow package (Maintainer: Kyle Keen <keenerd@gmail.com>, Contributor: minder)

pkgname=python-pillow-simd
pkgver=6.0.0
pkgrel=1
_appname=pillow-simd
_py3basever=3.7m
pkgdesc="Python Imaging Library (PIL) fork. Pillow fork for better image processing performance."
arch=('x86_64')
url="https://github.com/uploadcare/pillow-simd"
license=('custom')
depends=('python' 'lcms2' 'libtiff' 'openjpeg2')
optdepends=('freetype2: for the ImageFont module'
            'libraqm: for complex text scripts'
            'libwebp: for webp images'
            'tk: for the ImageTK module')
makedepends=('python-setuptools' 'freetype2' 'libraqm' 'libwebp' 'tk')
checkdepends=('python-pytest')
source=("https://github.com/uploadcare/$_appname/archive/$pkgver.tar.gz")
conflicts=('python-pillow')
provides=('python-pillow')

build() {
  cd "$srcdir/$_appname-$pkgver"
  python3 setup.py build
}

package() {
  cd "$srcdir/$_appname-$pkgver"
  python3 setup.py install --root="$pkgdir/" --optimize=1
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  install -dm755 "$pkgdir/usr/include/python$_py3basever/"
  install -m644 -t "$pkgdir/usr/include/python$_py3basever/" src/libImaging/*.h
}

sha256sums=('d9483c523fd86b48fdadacde219d3ecbddfbde0543d4a36a3a0600cd2e319f18')
