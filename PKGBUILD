# Maintainer: Pieter Goetschalckx <3.14.e.ter <at> gmail <dot> com>

pkgbase=python-attrdict
pkgname=('python-attrdict' 'python2-attrdict')
pkgver=2.0.0
pkgrel=1
pkgdesc="Push Notifications that work with just about every platform"
arch=('any')
url="https://github.com/bcj/attrdict"
license=('GPL3')
makedepends=('python-setuptools' 'python2-setuptools')
source=("https://github.com/bcj/attrdict/archive/v$pkgver.tar.gz")
sha256sums=('e779bdb2824498311fd82068ff62c1ac01c2049a5766230f7ead2a80f4d81ed7')

prepare() {
  cp -a AttrDict-$pkgver{,-py2}
}

build() {
  cd "${srcdir}"/AttrDict-${pkgver}
  python setup.py build

  cd "${srcdir}"/AttrDict-${pkgver}-py2
  python2 setup.py build
}

package_python-attrdict() {
  cd AttrDict-${pkgver}
  python setup.py install --root="$pkgdir" --optimize=1
}

package_python2-attrdict() {
  cd AttrDict-${pkgver}-py2
  python2 setup.py install --root="$pkgdir" --optimize=1
}
