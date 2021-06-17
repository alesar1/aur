# Maintainer: Caleb Maclennan <caleb@alerque.com>
# Contributor: Gabriel Magno <gabrielmagno1@gmail.com>
# Contributor: Michał Pałubicki <maln0ir@gmx.com>

_py_name=agate
pkgname=python-$_py_name
pkgver=1.6.2
pkgrel=1
pkgdesc='A data analysis library that is optimized for humans instead of machines'
arch=('any')
url='https://agate.readthedocs.org/'
license=('MIT')
_py_deps=(babel
         isodate
         leather
         parsedatetime
         pyicu
         pytimeparse
         six
         slugify
         sphinx_rtd_theme)
depends=(python "${_py_deps[@]/#/python-}")
makedepends=(python-setuptools python-sphinx)
checkdepends=(python-cssselect)
_pkgdir="$_py_name-$pkgver"
source=("https://files.pythonhosted.org/packages/source/${_py_name::1}/$_py_name/$_pkgdir.tar.gz")
sha256sums=('8dbd4a57a2cffecfa2d8109ef5993ec4be12a8a7c81fbc0c8c79d96d4c4399ed')

build() {
	cd "$_pkgdir"
	python setup.py build
	python setup.py build_sphinx
	_rtd_theme_path="$(python -c 'import sphinx_rtd_theme; print(sphinx_rtd_theme.get_html_theme_path())')"
	rm -rvf "build/sphinx/html/_static"
	ln -svf "$_rtd_theme_path/sphinx_rtd_theme/static" "build/sphinx/html/_static"
}

check() {
	cd "$_pkgdir"
	# Note: Upstream test suite is currently badly broken; it depends on the system local and fails on some
	# python setup.py test --test-suite=tests
}

package() {
	cd "$_pkgdir"
	python setup.py install --root="$pkgdir" --optimize=1 --skip-build
	mkdir -p "$pkgdir/usr/share/doc"
	cp -rv "build/sphinx/html" "$pkgdir/usr/share/doc/$pkgname"
}
