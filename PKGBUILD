# Maintainer: Guillaume Horel <guillaume.horel@gmail.com>

pkgname=python-psycopg
_pkgname=psycopg
pkgver=3.0.9
pkgrel=2
pkgdesc="A modern implementation of a PostgreSQL adapter for Python"
arch=('x86_64')
url="https://www.psycopg.org/psycopg3/"
license=('LGPL-3')
depends=('python')
optdepends=()
makedepends=('cython' 'python-setuptools')
checkdepends=('python-pytest' 'python-pytest-asyncio')
source=("psycopg-$pkgver.tar.gz::https://github.com/psycopg/psycopg/archive/refs/tags/$pkgver.tar.gz")
sha256sums=('79298f521add1b8632b1bbdaba2b8f76a61b09c82b1e6e702fddbb77cc9aec2c')

build(){
  cd "$_pkgname-$pkgver"
  for subpackage in psycopg psycopg_c
  do
    python "$subpackage/setup.py" build
  done
}

package(){
  cd "$_pkgname-$pkgver"
  for subpackage in psycopg psycopg_c
  do
    python "$subpackage/setup.py" install --root="$pkgdir/" --optimize=1 --skip-build
  done
}


#check(){
  #cd "$_pkgname-$pkgver"
  #pytest tests
#}
## vim:ts=2:sw=2:et:
