# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>
# Contributor: Dimitris Kiziridis <ragouel at outlook dot com>

pkgname=python-akshare
pkgver=1.3.68
pkgrel=1
pkgdesc="Financial data interface library"
arch=('any')
url='https://www.akshare.xyz'
license=('MIT')
depends=(
	'python-beautifulsoup4'
	'python-lxml'
	'python-matplotlib'
	'python-numpy'
	'python-pandas'
	'python-requests'
	'python-urllib3'
	'python-pillow'
	'python-pinyin'
	'python-websocket-client'
	'python-html5lib'
	'python-tqdm'
	'python-xlrd'
	'python-openpyxl'
	'python-jsonpath-ng'
	'python-tabulate'
	'python-decorator'
	'python-pyminiracer')
makedepends=(
	'python-setuptools'
	'python-sphinx'
	'python-sphinx_rtd_theme'
	'python-sphinx-markdown-tables'
	'python-recommonmark')
changelog=changelog.md
source=("$pkgname-$pkgver.tar.gz::https://github.com/akfamily/akshare/archive/v$pkgver.tar.gz")
sha256sums=('8672e502c5dde3339a1c4d267876817302001f472385375be57a77cfe2f88828')

prepare() {
	cd "akshare-$pkgver"
	sed -i "/find_packages/s/()/(exclude=['tests'])/" setup.py
}

build() {
	cd "akshare-$pkgver"
	python setup.py build
	( cd docs; make man )
}

package() {
	cd "akshare-$pkgver"
	PYTHONHASHSEED=0 python setup.py install --root="$pkgdir" --optimize=1 --skip-build
	install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname/"
	install -Dm644 docs/build/man/akshare.1 -t "$pkgdir/usr/share/man/man1/"
}
