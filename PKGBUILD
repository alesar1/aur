# Maintainer: Benjamin A. Shelton <zancarius@gmail.com>
# Source: https://github.com/zancarius/archlinux-pkgbuilds

pkgname=python2-httpagentparser
pkgver=1.7.8
pkgrel=1
pkgdesc="Extracts OS browser information from the user agent string."
arch=(any)
url="http://pypi.python.org/pypi/httpagentparser"
license=(MIT)
depends=(python2)
makedepends=(python2-setuptools)

source=("https://pypi.python.org/packages/source/h/httpagentparser/httpagentparser-${pkgver}.tar.gz")
md5sums=(
    0ca0961b95fc4ec7a20a6b14ebbbe97a
)

package () {
    
    cd "${srcdir}/httpagentparser-${pkgver}"
    python2 setup.py install --root="${pkgdir}/" --optimize=1

}
