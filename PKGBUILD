# Maintainer: Aleksandr Beliaev <trap000d@gmail.com>

_pkgname=webscrapbook
pkgname=python-$_pkgname
pkgver=0.45.1
pkgrel=1
pkgdesc="PyWebScrapBook is a command line toolkit and backend server for WebScrapBook browser extension"
arch=('any')
url="https://github.com/danny0838/PyWebScrapBook"
license=('MIT')
depends=('python' 'python-commonmark' 'python-flask' 'python-lxml' 'python-pyopenssl' 'python-werkzeug' 'python-jinja')
makedepends=('python-setuptools')
source=("${url}/archive/${pkgver}.tar.gz")
sha256sums=('d8216dc4f8e201c56937779299a1324750915baec4b4efd269f64fd15e1da879')

package() {
    cd "$srcdir/PyWebScrapBook-$pkgver"
    python setup.py install --root="$pkgdir/" --optimize=1
}