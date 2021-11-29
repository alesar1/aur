# Maintainer: Richard Neumann aka. schard <mail at richard dash neumann period de>

_pkgbase='peeweeplus'
pkgname="python-${_pkgbase}"
pkgver=1.16.6
pkgrel=1
pkgdesc='Practical extension of a small, expressive ORM'
arch=('any')
url="https://github.com/homeinfogmbh/${_pkgbase}"
license=('GPLv3')
depends=('python' 'python-argon2_cffi' 'python-peewee' 'python-lxml')
optdepends=('python-authlib: for authlib integration')
makedepends=('git' 'python' 'python-setuptools' 'python-setuptools-scm')
source=("${_pkgbase}::git+${url}.git#tag=${pkgver}")
md5sums=('SKIP')

build() {
    cd "${srcdir}/${_pkgbase}"
    python setup.py build
}

package() {
    cd "${srcdir}/${_pkgbase}"
    python setup.py install --root "${pkgdir}" --optimize=1 --skip-build
}
