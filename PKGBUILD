# Maintainer: icasdri <icasdri at gmail dot com>
# Maintainer: hexchain <i@hexchain.org>

_pypi_name=mypy
pkgname=${_pypi_name}
pkgver=0.520
pkgrel=1
pkgdesc='Optional static typing for Python 2 and 3'
url="https://github.com/python/mypy"
arch=('any')
license=('MIT')
provides=('python-mypy-lang' 'python-mypy')
conflicts=('python-mypy-lang' 'python-mypy')
depends=('python-typed-ast')
source=(
    "$_pypi_name-$pkgver.tar.gz::https://pypi.org/packages/source/m/$_pypi_name/$_pypi_name-$pkgver.tar.gz"
    "LICENSE::$url/raw/v$pkgver/LICENSE")

package() {
    cd "$srcdir"
    install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname/"

    cd "${srcdir}/${_pypi_name}-${pkgver}"
    python setup.py install --prefix="/usr" --root="${pkgdir}" --optimize=1
}
sha256sums=('740d438922573259feab848b1689abb53be405897a231f0b1bf025fe25dbc2f4'
            'b2f0953f966a13bc1b01f4225420fd106ef870a39c8f8ff8b22aaf4cc77c0cfe')
