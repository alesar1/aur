# Maintainer: Frederik “Freso” S. Olesen <freso.dk@gmail.com>

pkgbase=python-mbdata
_name=${pkgbase#python-}
pkgname=$pkgbase
pkgver=26.0.0
pkgrel=1
pkgdesc='MusicBrainz database tools for Python'
url="https://pypi.python.org/pypi/$_name"
arch=('any')
license=('MIT')
depends=(python python-psycopg2 python-six)
makedepends=('python-setuptools')
source=("https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz"
        "$_name-$pkgver-LICENSE::https://github.com/lalinsky/mbdata/raw/v$pkgver/LICENSE")
sha256sums=('b07bdacbbbe5f62218a1a232cf379b7d81e4f047190566256bd6c25f1ef2dddb'
            'ecae6699839c9b7845aa36aba997c2ec5f09c5eb237f8910b972269de4bfc5f9')

build() {
  cd "$_name-$pkgver"
  python3 setup.py build
}

package() {
  cd "$_name-$pkgver"
  python3 setup.py install --root="$pkgdir" --optimize=1 --skip-build
  install -Dm644 ../"$_name-$pkgver-LICENSE" "$pkgdir/usr/share/licenses/$pkgbase/LICENSE"
}
