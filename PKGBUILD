# Maintainer: Marius Lindvall <(firstname) {cat} varden {dog} info>

pkgname=python-jellyfin-apiclient
pkgver='1.7.2'
pkgrel=1
pkgdesc="Python API client for Jellyfin"
arch=('any')
url='https://github.com/iwalton3/jellyfin-apiclient-python'
license=('GPL3')
depends=('python>=3.6' 'python-requests' 'python-urllib3' 'python-websocket-client' 'python-six')
makedepends=('python-setuptools')
source=("https://pypi.python.org/packages/source/j/jellyfin-apiclient-python/jellyfin-apiclient-python-$pkgver.tar.gz")
sha256sums=('9d22d46bdfe3013e97ac7a3bee45791d80713cefe585c58aa8f7e9112eee97d0')

build() {
	cd "${srcdir}/jellyfin-apiclient-python-${pkgver}"
	python setup.py build
}

package() {
	cd "${srcdir}/jellyfin-apiclient-python-${pkgver}"
	python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
}
