# Maintainer: Caleb Maclennan <caleb@alerque.com>

pkgname=trufont
pkgver=0.6.5
pkgrel=1
pkgdesc='A streamlined and hackable font editor'
arch=('any')
url='https://trufont.github.io'
license=('GPL3' 'LGPL3')
_pydeps=('appdirs'
         'booleanoperations'
         'brotli'
         'compreffor'
         'cu2qu'
         'defcon'
         'fonttools'
         'fs'
         'hsluv'
         'lxml'
         'pyclipper'
         'pyqt5'
         'pyqt5-sip'
         'pytz'
         'six'
         'ufo-extractor'
         'ufo2ft'
         'unicodedata2'
         'zopfli')
depends=('python' "${_pydeps[@]/#/python-}")
makedepends=('git' 'python-setuptools')
source=("https://files.pythonhosted.org/packages/source/${pkgname::1}/$pkgname/$pkgname-$pkgver.zip")
sha256sums=('dc39c4704fbbd69e58a2cba0ea7c647473906ac05c5931cda84de43a64eb0887')

build() {
    cd "$pkgname-$pkgver"
	python setup.py build
}

package() {
    cd "$pkgname-$pkgver"
    python setup.py install --root="$pkgdir" --optimize=1 --skip-build
}
