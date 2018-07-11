# Maintainer: Marco Kundt <mrckndt@gmail.com>

pkgname=python-kppy
_pkgname=kppy
pkgver=1.5.2
pkgrel=1
pkgdesc="A Python-module to provide an API to KeePass 1.x files commonly used by KeePassX."
arch=('any')
url="https://github.com/raymontag/kppy"
license=('GPL')
depends=('python-crypto')
makedepends=('python' 'python-crypto')
source=(https://github.com/raymontag/kppy/archive/${pkgver}.tar.gz)
sha256sums=('9dbf494304f2ac82ff6b8037744ab2887f68901840e4dda2aa612ab9129a6a60')

package() {
    cd ${_pkgname}-${pkgver}

    python setup.py install --root=${pkgdir} --optimize=1
}
