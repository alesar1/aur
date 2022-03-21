# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>
# Contributor: Dimitris Kiziridis <ragouel at outlook dot com>

## Do NOT build from source; upstream builds V8 from source
## and takes well over an hour and large amounts of disk space

pkgname=python-pyminiracer
_name=py_mini_racer
pkgver=0.6.0
pkgrel=3
pkgdesc='Minimal, modern embedded V8 for Python'
arch=('x86_64')
url="https://github.com/sqreen/PyMiniRacer"
license=('ISC')
depends=('python')
makedepends=('python-installer')
source=("https://files.pythonhosted.org/packages/py2.py3/p/$_name/$_name-$pkgver-py2.py3-none-manylinux1_x86_64.whl")
noextract=("$_name-$pkgver-py2.py3-none-manylinux1_x86_64.whl")
sha256sums=('42896c24968481dd953eeeb11de331f6870917811961c9b26ba09071e07180e2')

package() {
	PYTHONHASHSEED=0 python -m installer --destdir="$pkgdir/" *.whl
	local _site="$(python -c 'import site; print(site.getsitepackages()[0])')"
	install -d "$pkgdir/usr/share/licenses/$pkgname/"
	ln -s \
		"$_site/$_name-$pkgver.dist-info/LICENSE" \
		"$pkgdir/usr/share/licenses/$pkgname/"
}
