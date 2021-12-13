# Maintainer: Donald Webster <fryfrog@gmail.com>

pkgbase=python-attrdict
pkgname='python-attrdict'
_name=${pkgname#python-}
pkgver=2.0.1
pkgrel=4
pkgdesc='A library that provides mapping objects that allow their elements to be accessed both as keys and as attributes.'
arch=('any')
url='https://pypi.org/project/attrdict/'
license=('MIT')
makedepends=('python-setuptools')
source=("https://files.pythonhosted.org/packages/source/${_name::1}/${_name}/${_name}-${pkgver}.tar.gz")
sha256sums=('35c90698b55c683946091177177a9e9c0713a0860f0e049febd72649ccd77b70')

package() {
  cd attrdict-${pkgver}
  python setup.py install --root="$pkgdir" --optimize=1
}
