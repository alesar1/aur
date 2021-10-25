# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>
# Contributor:  Dimitris Kiziridis <ragouel at outlook dot com>

pkgname=python-akshare
pkgver=1.1.79
pkgrel=1
pkgdesc="Financial data interface library"
arch=('any')
url='https://www.akshare.xyz'
license=('MIT')
depends=(
	'python-beautifulsoup4>=4.9.1'
	'python-lxml>=4.2.1'
	'python-matplotlib>=3.1.1'
	'python-numpy>=1.17.2'
	'python-pandas>=0.25'
	'python-requests>=2.22.0'
	'python-urllib3>=1.25.8'
	'python-pillow>=6.2.1'
	'python-pinyin>=0.35.0'
	'python-websocket-client>=0.56.0'
	'python-html5lib>=1.0.1'
	'python-tqdm>=4.43.0'
	'python-xlrd>=1.2.0'
	'python-openpyxl>=3.0.3'
	'python-jsonpath-ng>=0.82'
	'python-tabulate>=0.8.6'
	'python-decorator>=4.4.2'
	'python-pyminiracer>=0.6.0')
makedepends=('python-setuptools')
changelog=changelog.md
source=("$pkgname-$pkgver.tar.gz::https://github.com/jindaxiang/akshare/archive/v$pkgver.tar.gz")
sha256sums=('3d98993a18000aa224535bca8262f9592f94b205396aaff5551c2d9098ccfa1d')

prepare() {
	cd "akshare-$pkgver"
	sed -i "/find_packages/s/()/(exclude=['tests'])/" setup.py
}

build() {
	cd "akshare-$pkgver"
	python setup.py build
}

package() {
	cd "akshare-$pkgver"
	PYTHONHASHSEED=0 python setup.py install --root="$pkgdir" --optimize=1 --skip-build
	install -Dm 644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname/"
}
