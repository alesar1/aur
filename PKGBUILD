# Maintainer: Alex Forencich <alex@alexforencich.com>
pkgname=python-cocotbext-pcie
pkgver=0.1.10
pkgrel=1
pkgdesc="PCI express simulation framework for cocotb"
arch=('any')
url="https://github.com/alexforencich/cocotbext-pcie"
license=('MIT')
depends=('python-cocotb' 'python-cocotbext-axi')
makedepends=('python-setuptools')

source=("cocotbext-pcie-$pkgver.tar.gz::https://github.com/alexforencich/cocotbext-pcie/archive/v$pkgver.tar.gz")
sha256sums=('c844ef23e3a0f7d3bcc00180861b65e8de87cfa90eedef7ddfdf83cd50e6a381')

build() {
    cd "$srcdir/cocotbext-pcie-$pkgver"
    python setup.py build
}

package() {
    cd "$srcdir/cocotbext-pcie-$pkgver"
    python setup.py install --skip-build --prefix=/usr --root="$pkgdir/" --optimize=1
    install -m 644 -D ./LICENSE "$pkgdir"/usr/share/licenses/"$pkgname"/LICENSE
}
