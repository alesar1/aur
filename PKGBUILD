# Maintainer: Richard Neumann aka. schard <mail at richard dash neumann period de>

_pkgbase='rcon'
pkgname="python-${_pkgbase}"
pkgver=1.2.0
pkgrel=1
pkgdesc='Python 3 RCON client library and scripts'
arch=('any')
url="https://github.com/coNQP/${_pkgbase}"
license=('GPLv3')
depends=('python')
optdepends=('python-gobject: for GUI support')
makedepends=('git' 'python' 'python-setuptools' 'python-setuptools-git')
source=("${_pkgbase}::git+${url}.git#tag=${pkgver}")
md5sums=('SKIP')


package() {
    cd "${srcdir}/${_pkgbase}"
    python setup.py install --root "${pkgdir}" --optimize=1
}
