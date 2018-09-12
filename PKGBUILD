# Maintainer: Joseph Brains <jnbrains@gmail.com>

_pkgname=python-prompt-toolkit
pkgname=python-prompt_toolkit-gns3
pkgver=1.0.15
pkgrel=2
pkgdesc="Library for building powerful interactive command lines in Python (GNS3)"
arch=('any')
depends=('python-pygments' 'python-six' 'python-wcwidth')
makedepends=('python-setuptools')
url="https://github.com/jonathanslenders/python-prompt-toolkit"
license=('BSD')
groups=('gns3')
options=(!emptydirs)
provides=("python-$_pkgname")
conflicts=("python-$_pkgname")
source=("$_pkgname-$pkgver.tar.gz::https://github.com/jonathanslenders/$_pkgname/archive/$pkgver.tar.gz")
sha256sums=('e2f720a1e8149a2b56b776d68c8fb28c8211546d266301178fb982e69d0c9bed')

build() {
    cd "$_pkgname-$pkgver"
    python setup.py build
}

package() {
    cd "$_pkgname-$pkgver"
    python setup.py install --root="$pkgdir" --optimize=1
    install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
