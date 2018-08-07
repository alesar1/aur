# Maintainer: Alexander Minges <alexander.minges@gmail.com>
# Automatically generated by pip2arch on 2015-07-27

pkgname=python-zeroc-ice
pkgver=3.7.1
pkgrel=2
pkgdesc="Ice is comprehensive RPC framework with support for Python, C++, .NET, Java, JavaScript and more."
url="https://zeroc.com"
depends=('python' )
makedepends=()
optdepends=("zeroc-ice: other language bindings for zeroc-ice")
license=("GPL" "custom:Ice license")
arch=('any')
source=("https://files.pythonhosted.org/packages/67/77/44e30fbfaa920e4bffb38ed2216c75f1b0769d83cc53344987313b32526e/zeroc-ice-$pkgver.tar.gz")
sha256sums=('4436a40e91eb6d12e6a8f3a3ea248786ea41a3f23e2e5e7f719fc84efd0c3c8d')

prepare() {
    cd $srcdir/zeroc-ice-$pkgver
}

build() {
    cd $srcdir/zeroc-ice-$pkgver
    python setup.py build
}

package() {
    cd $srcdir/zeroc-ice-$pkgver
    python setup.py install --root="$pkgdir" --optimize=1
}
