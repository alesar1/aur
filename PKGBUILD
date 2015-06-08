# Maintainer: Johannes Löthberg <johannes2kyriasis.com>

pkgname=python-pafy-git
pkgver=git
pkgrel=1
pkgdesc="Python API for YouTube - Download videos and retrieve metadata from YouTube."
arch=('any')
url="http://np1.github.io/pafy"
license=('GPL3')
depends=('python')
conflicts=('python-pafy')
source=('git+https://github.com/np1/pafy.git')
md5sums=('SKIP')

pkgver() {
	cd pafy
	git describe --long --tags | sed -r 's/^v//;s/([^-]*-g)/r\1/;s/-/./g'
}
package() {
	cd pafy
	python setup.py install --root="$pkgdir" --optimize=1
}
