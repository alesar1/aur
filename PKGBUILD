# Maintainer: Caleb Maclennan <caleb@alerque.com>
# Maintainer: Guillaume Horel <guillaume.horel@gmail.com>

pkgname=python-fontmake
_pyname=${pkgname#python-}
pkgver=3.0.0
pkgrel=2
pkgdesc='Compile fonts from sources (UFO, Glyphs) to binary (OpenType, TrueType)'
arch=(any)
url="https://github.com/googlefonts/$_pyname"
license=(Apache)
_pydeps=(attrs
         fontmath
         fonttools
         fs # for fonttools[ufo]
         glyphslib
         lxml # for fonttools[lxml] and defcon[lxml]
         ufo2ft
         ufolib2
         unicodedata2) # for fonttools[unicode]
depends=(python
         "${_pydeps[@]/#/python-}")
checkdepends=(python-compreffor
              python-defcon
              python-mutatormath
              python-pytest
              python-skia-pathops)
makedepends=(python-setuptools-scm)
optdepends=(python-mutatormath
            python-skia-pathops)
_archive="$_pyname-$pkgver"
source=("https://files.pythonhosted.org/packages/source/${_pyname::1}/$_pyname/$_archive.zip")
sha256sums=('864983cb636c739d73dc859f0518a7480cecdd061e2b3484e1b457b5db7ecaae')

build() {
	cd "$_archive"
	python setup.py build
}

check() {
	cd "$_archive"
	PYTHONPATH=Lib pytest tests
}

package() {
	cd "$_archive"
	python setup.py install --root="$pkgdir" --optimize=1 --skip-build
}
