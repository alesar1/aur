# Maintainer: Caleb Maclennan <caleb@alerque.com>

pkgname=nanoemoji
pkgver=0.1.2
pkgrel=1
pkgdesc='A wee tool to build color fonts'
arch=('any')
url="https://github.com/googlefonts/$_pkgname"
license=('Apache')
_py_deps=('fonttools'
          'fs' # optdepends of fonttols required for [ufo]
          'lxml'
          'protobuf'
          'pygithub'
          'regex'
          'ufo2ft'
          'ufolib2')
depends=('absl-py'
         'picosvg'
         'python'
         "${_py_deps[@]/#/python-}")
makedepends=('python-setuptools')
source=("https://files.pythonhosted.org/packages/source/${pkgname::1}/$pkgname/$pkgname-$pkgver.tar.gz")
sha256sums=('ac3b890ce423a081323abf7bec70fe294fef372ebfed63997590fac362def696')

build() {
    cd "$pkgname-$pkgver"
    python setup.py build
}

package() {
    cd "$pkgname-$pkgver"
    python setup.py install --root="$pkgdir" --optimize=1 --skip-build
}
