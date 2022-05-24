#!/bin/bash

# Maintainer: PumpkinCheshire <me at pumpkincheshire dot com>

pkgname=python-xyzservices
_name=xyzservices
pkgver=2022.4.0
pkgrel=1
pkgdesc='A lightweight library providing a repository of available XYZ services offering raster basemap tiles. The repository is provided via Python API and as a compressed JSON file.'
arch=('x86_64')
url="https://github.com/geopandas/$_name"
license=('BSD')
depends=('python')
makedepends=(
  'python-wheel'
  'python-build'
  'python-installer'
)
source=("https://files.pythonhosted.org/packages/source/${_name::1}/${_name}/${_name}-${pkgver}.tar.gz")
b2sums=('e9477319601fdc969a5528b638ac9b6fbced60edadb137163f2135316f65499c02471d69e25ff8e36a3f039c4ae5bdf59e0eb9b67fd1cd369ee15e6de23d584b')

build() {
  cd "$srcdir/$_name-$pkgver" || exit

  python -m build --wheel --no-isolation
}

package() {
  cd "$srcdir/$_name-$pkgver" || exit
  python -m installer --destdir="$pkgdir" dist/*.whl

  # install -Dm644 LICENSE.txt "$pkgdir/usr/share/licenses/python-$_name/LICENSE"
}
