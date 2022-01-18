# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
# Contributor: hexchain <i@hexchain.org>
pkgname=python-requirements-parser
_name=${pkgname#python-}
pkgver=0.4.0
pkgrel=1
pkgdesc="A Pip requirements file parser."
arch=('any')
url="https://github.com/davidfischer/requirements-parser"
license=('BSD')
depends=('python-future' 'python-setuptools' 'python-types-setuptools')
source=("https://pypi.org/packages/source/${_name:0:1}/$_name/$_name-$pkgver.tar.gz" #{,.asc}
        '0001-Dont-fail-with-valid-options-in-requirements_txt-files.patch')
sha256sums=('e5977e78d51ba23729a93222a7332dc37b93e32676005aa35ef893dd56773059'
            '961a1aa1c720fdbe8fe8bbecdbcfcaf9b0faa52718868c4b19b9b332d2a41c6b')
#validpgpkeys=('301078D634936CEB7FCDF13BF0C9B0ADA737AB60') # David Fischer <djfische@gmail.com>

prepare() {
  cd "$_name-$pkgver"

  # https://github.com/davidfischer/requirements-parser/pull/47
  patch -Np1 -i ../0001-Dont-fail-with-valid-options-in-requirements_txt-files.patch
}

build() {
  cd "$_name-$pkgver"
  python setup.py build
}

package() {
  cd "$_name-$pkgver"
  python setup.py install --root="$pkgdir" --optimize=1 --skip-build

  install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname"
}
