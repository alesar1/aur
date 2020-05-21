# Maintainer: Yarema aka Knedlyk <yupadmin at gmail dot com>
# Contributor: Yarema aka Knedlyk <yupadmin at gmail dot com>

pkgbase=python-getdevinfo
pkgname=('python-getdevinfo' 'python2-getdevinfo')
pkgver=1.0.6
pkgrel=1
pkgdesc="A device information gatherer for Linux and macOS."
arch=('any')
url="https://www.hamishmb.com/html/downloads.php?program_name=getdevinfo"
license=('PSF')
makedepends=('python-setuptools' 'python2-setuptools')
source=("https://www.hamishmb.com/files/Downloads/getdevinfo/${pkgver}/Python/getdevinfo-${pkgver}.tar.gz")

prepare() {
    cp -a getdevinfo-$pkgver{,-py2}
}

build() {
  cd "$srcdir"/getdevinfo-$pkgver
  python setup.py build

  cd "$srcdir"/getdevinfo-$pkgver
  python2 setup.py build
}

package_python-getdevinfo() {
  depends=('python')

  cd getdevinfo-$pkgver
  python setup.py install --root="$pkgdir"
}

package_python2-getdevinfo() {
  depends=('python2')

  cd getdevinfo-$pkgver-py2
  python2 setup.py install --root="$pkgdir"
}
md5sums=('096ea7b5681141cc53fa814b0e013abc')
