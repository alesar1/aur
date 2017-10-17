pkgbase=python-os-testr
pkgname=('python-os-testr' 'python2-os-testr')
pkgver=1.0.0
pkgrel=2
pkgdesc="A testr wrapper to provide additional functionality"
arch=('any')
url='https://pypi.python.org/pypi/os-testr'
license=('Apache')
source=( https://pypi.python.org/packages/47/ac/767db04504bd21b2fbcf11dd404c6b8bcc0cf954410c3c05f0d65877de2e/os-testr-1.0.0.tar.gz )
md5sums=('915dc11818c13c1726d57def7c372154')
makedepends=('python2' 'python' 'python-setuptools' 'python2-setuptools')

package_python-os-testr() {
  depends=('python' 'python-subunit' 'python-testtools' 'python-stestr>=1.0.0' 'python-pbr')

  cd $srcdir/os-testr-$pkgver
  python setup.py install --root=$pkgdir
}

package_python2-os-testr() {
  depends=('python2' 'python2-subunit' 'python2-testtools' 'python2-stestr>=1.0.0' 'python2-pbr')

  cd $srcdir/os-testr-$pkgver
  python2 setup.py install --root=$pkgdir
  mv "${pkgdir}/usr/bin/ostestr"{,2}
  mv "${pkgdir}/usr/bin/subunit-trace"{,2}
  mv "${pkgdir}/usr/bin/subunit2html"{,2}
  mv "${pkgdir}/usr/bin/generate-subunit"{,2}
}
