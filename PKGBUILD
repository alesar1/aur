# Maintainer: Doron Behar <doron.behar@gmail.com>

pkgname=python-syncthing
_name=syncthing
pkgver=2.3.1
pkgrel=1
pkgdesc="Python bindings to the Syncthing REST interface"
arch=('any')
url="https://github.com/blakev/python-syncthing"
license=('GPL')
groups=()
depends=('syncthing' 'python' 'python-requests' 'python-dateutil')
makedepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=(!emptydirs)
install=
source=("https://files.pythonhosted.org/packages/source/${_name::1}/${_name}/${_name}-${pkgver}.tar.gz")
md5sums=('ead41fbbc898fa53d276261b490d5b45')

package() {
  cd "$srcdir/$_name-$pkgver"
  python setup.py install --root="$pkgdir/" --optimize=1
}

# vim:set ts=2 sw=2 et:
