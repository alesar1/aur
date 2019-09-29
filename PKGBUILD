# Maintainer: Alexander Fasching <fasching.a91@gmail.com>
# Contributor: Doron Behar <doron.behar@gmail.com>
# Contributor: Dan "Streetwalrus" Elkouby <streetwalkermc@gmail.com>

pkgname=python-vunit_hdl
_name=vunit_hdl
pkgver=4.1.0
pkgrel=1
pkgdesc="Unit Testing Framework for VHDL/SystemVerilog"
arch=('any')
url="https://vunit.github.io/"
license=('MPL2')
depends=('python' 'python-colorama')
makedepends=(python-setuptools)
options=(!emptydirs)
source=("https://files.pythonhosted.org/packages/source/${_name::1}/${_name}/${_name}-${pkgver}.tar.gz")
md5sums=('1f7c0cb116a8f14d93b4b14946822725')

build() {
  cd "$srcdir/$_name-$pkgver"
  python setup.py build
}

package() {
  cd "$srcdir/$_name-$pkgver"
  python setup.py install --root="$pkgdir" --optimize=1 --skip-build
}

# vim:set ts=2 sw=2 et:
