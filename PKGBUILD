# Maintainer: Doron Behar <doron.behar@gmail.com>

pkgname=python-vunit_hdl
_name=vunit_hdl
pkgver=3.8.0
pkgrel=1
pkgdesc="Unit Testing Framework for VHDL/SystemVerilog"
arch=('any')
url="https://vunit.github.io/"
license=('MPL')
groups=()
depends=('python')
makedepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=(!emptydirs)
install=
source=("https://files.pythonhosted.org/packages/source/${_name::1}/${_name}/${_name}-${pkgver}.tar.gz")
md5sums=('906b411393ddda0f2129f0deefad7777')

package() {
  cd "$srcdir/$_name-$pkgver"
  python setup.py install --root="$pkgdir/" --optimize=1
}

# vim:set ts=2 sw=2 et:
