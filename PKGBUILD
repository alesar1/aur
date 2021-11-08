# Maintainer: Andreas 'Segaja' Schleifer <archlinux at segaja dot de>

pkgname=procpath
pkgver=1.4.0
pkgrel=1
pkgdesc="A process tree analysis workbench"
arch=(any)
url="https://heptapod.host/saajns/procpath"
license=(LGPL3)
makedepends=(mercurial python-setuptools)
depends=(python python-jsonpyth python-pygal)
source=("${pkgname}-${pkgver}::hg+${url}#revision=4e8ba95a83be")
sha512sums=('SKIP')

build() {
  cd "${pkgname}-${pkgver}"

  python setup.py build
}

# tests are disabled for now due to https://heptapod.host/saajns/procpath/-/issues/21
#check() {
#  cd "${pkgname}-${pkgver}"
#
#  python3 -m unittest
#}

package() {
  cd "${pkgname}-${pkgver}"

  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
}
