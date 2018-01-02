# Maintainer: Étienne Deparis <etienne [at] depar.is>

pkgname=python2-reconfigure
_name=reconfigure
pkgver=0.1.81
pkgrel=1
pkgdesc="An ORM for config files"
license=("LGPL3")
url="https://pypi.python.org/pypi/reconfigure"
depends=("python2-chardet")
makedepends=("python2-setuptools")
source=("https://files.pythonhosted.org/packages/source/r/${_name}/${_name}-${pkgver}.tar.gz")
md5sums=('3e22035fb630103196fe674b98069e74')
arch=("any")
options=(!emptydirs)

package() {
  cd $srcdir/${_name}-$pkgver

  find . -type f -exec sed -i \
    -e "1s|^#!/usr/bin/env python$|#!/usr/bin/env python2|" \
    -e "1s|^#!/usr/bin/python$|#!/usr/bin/env python2|" \
    "{}" \;

  python2 setup.py install --root=$pkgdir
}
