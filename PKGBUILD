# Maintainer: Caleb Maclennan <caleb@alerque.com>

_pyname=glyphsets
pkgname=python-${_pyname,,}
pkgver=0.4.0
pkgrel=1
pkgdesc='an API with data about glyph sets for many different scripts and languages'
arch=(any)
url="https://github.com/googlefonts/$_pyname"
license=(Apache)
_pydeps=(defcon
         fonttools
         fs # for fonttools[ufo]
         glyphslib)
depends=(python
         "${_pydeps[@]/#/python-}")
makedepends=(python-{build,installer}
             python-setuptools
             python-wheel)
_archive="$_pyname-$pkgver"
source=("https://files.pythonhosted.org/packages/source/${_pyname::1}/$_pyname/$_archive.tar.gz")
sha256sums=('f5e5d635d47661621fa59fb8d5f9546ef00ca8ee04fb41e1956b83f75c5b906f')
prepare() {
	cd "$_archive"
	# Upstream requires outdated setuptools_scm, work around
	sed -i -e '/_scm/d' setup.py
	echo "version = '$pkgver'" > Lib/glyphsets/_version
}

build() {
	cd "$_archive"
	python -m build -wn
}

package() {
	cd "$_archive"
	python -m installer -d "$pkgdir" dist/*.whl
}
