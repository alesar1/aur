# Maintainer: Chih-Hsuan Yen <yan12125@gmail.com>
# Contributor: Alexander 'z33ky' Hirsch <1zeeky@gmail.com>

pkgname=python-requests-futures
pkgver=0.9.8
pkgrel=1
pkgdesc='Asynchronous Python HTTP for Humans.'
license=('Apache')
arch=('any')
url='https://github.com/ross/requests-futures'
depends=('python-requests')
makedepends=('python-setuptools')
source=("https://pypi.python.org/packages/source/r/requests-futures/requests-futures-${pkgver}.tar.gz")
sha256sums=('76a22b95723267b53d8cc50e54d00b98d95afa02fd8449501b07a3797f46a96d')

build() {
    cd requests-futures-$pkgver
    python setup.py build
}

check() {
    cd requests-futures-$pkgver
    python test_requests_futures.py
}

package() {
    cd requests-futures-$pkgver
    python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
}
