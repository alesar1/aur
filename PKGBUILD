# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>
# Contributor: Dimitris Kiziridis <ragouel at outlook dot com>

pkgname=python-akshare
pkgver=1.4.84
pkgrel=1
pkgdesc="Financial data interface library"
arch=('any')
url='https://github.com/akfamily/akshare'
license=('MIT')
depends=(
	'python-beautifulsoup4'
	'python-lxml'
	'python-numpy'
	'python-pandas'
	'python-requests'
	'python-requests-cache'
	'python-urllib3'
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
	'python-build'
	'python-installer'
	'python-wheel'
	'python-sphinx'
	'python-sphinx_rtd_theme'
	'python-sphinx-markdown-tables'
	'python-recommonmark')
changelog=changelog.md
source=("$pkgname-$pkgver.tar.gz::$url/archive/release-v$pkgver.tar.gz")
sha256sums=('ee5cd4c85e296c9abe42e34706650c5d86fdd912bd746083e5db4706bfae60b9')

prepare() {
	cd "akshare-release-v$pkgver"
	sed -i "/find_packages/s/()/(exclude=['tests'])/" setup.py
}

build() {
	cd "akshare-release-v$pkgver"
	python -m build --wheel --no-isolation
	( cd docs; make man )
}

package() {
	export PYTHONHASHSEED=0
	cd "akshare-release-v$pkgver"
	python -m installer --destdir="$pkgdir/" dist/*.whl
	install -Dm644 docs/build/man/akshare.1 -t "$pkgdir/usr/share/man/man1/"

	local _site="$(python -c 'import site; print(site.getsitepackages()[0])')"
	install -d "$pkgdir/usr/share/licenses/$pkgname/"
	ln -s \
		"$_site/akshare-$pkgver.dist-info/LICENSE" \
		"$pkgdir/usr/share/licenses/$pkgname/"
}
