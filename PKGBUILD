# Maintainer: Mark Weiman <mark.weiman@markzz.com>

pkgbase=python-pybgpstream
pkgname=('python-pybgpstream' 'python2-pybgpstream')
_pkgname='pybgpstream'
pkgver=1.2.1
pkgrel=1
pkgdesc="python bindings for libbgpstream"
arch=('x86_64')
license=('GPL')
url="https://bgpstream.caida.org/"
makedepends=('python' 'python-setuptools' 'python2' 'python2-setuptools')
source=("https://bgpstream.caida.org/bundles/caidabgpstreamwebhomepage/dists/${_pkgname}-${pkgver}.tar.gz")
md5sums=('ed8a1f6c72f1a6a40d48c748e0346cf8')

prepare() {
  cp -a "${srcdir}/${_pkgname}-${pkgver}" "${srcdir}/${_pkgname}2-${pkgver}"

  find "${srcdir}/${_pkgname}2-${pkgver}" -name '*.py' | \
    xargs sed -i "s|#!/usr/bin/env python$|#!/usr/bin/env python2|"
}

build() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  python setup.py build

  cd "${srcdir}/${_pkgname}2-${pkgver}"
  python2 setup.py build
}

package_python-pybgpstream() {
  depends=('python' 'bgpstream')
  cd "${srcdir}/${_pkgname}-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize=1
}

package_python2-pybgpstream() {
  depends=('python2' 'bgpstream')
  cd "${srcdir}/${_pkgname}2-${pkgver}"
  python2 setup.py install --root="${pkgdir}" --optimize=1
}
