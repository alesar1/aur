# Maintainer: Caleb Maclennan <caleb@alerque.com>

pkgname=nanoemoji
pkgver=0.8.0
pkgrel=1
pkgdesc='A wee tool to build color fonts'
arch=('any')
url="https://github.com/googlefonts/$_pkgname"
license=('Apache')
_py_deps=('cffsubr' # optdepends of ufo2ft required for [cffsubr]
          'fonttools>=4.22.0'
          'fs' # optdepends of fonttols required for [ufo]
          'lxml'
          'pillow'
          'regex'
          'toml'
          'ufo2ft'
          'ufolib2')
depends=('absl-py'
         'ninja'
         'picosvg>=0.15.0'
         'python'
         "${_py_deps[@]/#/python-}")
makedepends=('python-setuptools')
source=("https://files.pythonhosted.org/packages/source/${pkgname::1}/$pkgname/$pkgname-$pkgver.tar.gz")
sha256sums=('f895bdac0f47689e390e4acd0b5eb570ed370be565f2f31aae1f1ae94aea25d1')

build() {
    cd "$pkgname-$pkgver"
    python setup.py build
}

package() {
    cd "$pkgname-$pkgver"
    python setup.py install --root="$pkgdir" --optimize=1 --skip-build
}
