# Maintainer: Eugene Dvoretsky <radioxoma at gmail.com>

pkgname=('python2-bioformats')
pkgver=1.0.5
pkgrel=1
pkgdesc="Python wrapper for Bio-Formats, a standalone Java library for reading and writing life sciences image file formats."
arch=('i686' 'x86_64')
url="https://github.com/CellProfiler/python-bioformats"
license=('BSD')
depends=('python2-javabridge')

source=("https://github.com/CellProfiler/python-bioformats/archive/${pkgver}.tar.gz")
sha256sums=('49ee4d7edef0ef76aa0419559a06ce38b7f7341a9fdefb0accbd92ad2a8861ff')

build() {
  cd "$srcdir/python-bioformats-$pkgver"
  python2 setup.py build
}

# check() {
#   cd "$srcdir/python-bioformats-$pkgver"
#   python2 setup.py test
# }

package() {
  cd "$srcdir/python-bioformats-$pkgver"
  python2 setup.py install --root="$pkgdir"/ --optimize=1
  install -D LICENSE "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}
