# Maintainer: Phil A. <flying-sheep@web.de>
# Contributor: Simon Legner <Simon.Legner@gmail.com>
# Contributor: Aniket Pradhan <aniket17133[at]iiitd[dot]ac[dot]in>
# Contributor: Roman Haritonov <reclosedev[at]gmail[dot]com>

_pkgname=requests-cache
pkgname=python-requests-cache
pkgver=0.7.3
pkgrel=2
pkgdesc='Transparent persistent cache for http://python-requests.org/ library.'
arch=(x86_64)
url="https://github.com/reclosedev/$_pkgname"
license=(BSD)
depends=(python python-requests python-url-normalize python-itsdangerous python-attrs)
makedepends=(python-setuptools)
conflicts=(python2-requests-cache)
source=("https://files.pythonhosted.org/packages/source/r/$_pkgname/$_pkgname-$pkgver.tar.gz")
sha256sums=('d17c95b0fa52670044356378886dbaf8e25069123d4fced43e05cd13b38c42f8')

build() {
	cd "$srcdir/$_pkgname-$pkgver"
	python setup.py build
	# poetry build --format wheel
}

package() {
	cd "$srcdir/$_pkgname-$pkgver"
	python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
	# PIP_CONFIG_FILE=/dev/null pip install --isolated --root="${pkgdir}" --ignore-installed --no-deps dist/*.whl

	install -Dm 644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
	install -Dm 644 README.md "$pkgdir/usr/share/doc/$pkgname/README"
}
