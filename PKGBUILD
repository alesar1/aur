# Maintainer: Guillaume Horel <guillaume.horel@gmail.com>

pkgname=python-psycopg
_pkgname=psycopg
pkgver=3.0.4
pkgrel=1
pkgdesc="A modern implementation of a PostgreSQL adapter for Python"
arch=('x86_64')
url="https://www.psycopg.org/psycopg3/"
license=('LGPL-3')
depends=('python')
optdepends=()
makedepends=('cython' 'python-setuptools')
checkdepends=('python-pytest' 'python-pytest-asyncio')
source=("psycopg-$pkgver.tar.gz::https://github.com/psycopg/psycopg/archive/refs/tags/$pkgver.tar.gz")
sha256sums=('484ef2e37c439d9b81e5eeaceffd947de75662abce077d7d0494ad14ed9d4a3c')

build(){
  cd "$_pkgname-$pkgver"
  for subpackage in psycopg psycopg_c psycopg_pool
  do
    python "$subpackage/setup.py" build
  done
}

package(){
  cd "$_pkgname-$pkgver"
  for subpackage in psycopg psycopg_c psycopg_pool
  do
    python "$subpackage/setup.py" install --root="$pkgdir/" --optimize=1 --skip-build
  done
}


#check(){
  #cd "$_pkgname-$pkgver"
  #pytest tests
#}
## vim:ts=2:sw=2:et:
