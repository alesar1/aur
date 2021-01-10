# Maintainer: Alex Brinister <alex_brinister at yahoo dot com>

pkgbase=python-cheetah3
pkgname=('python-cheetah3' 'python2-cheetah3')
_name=Cheetah3
pkgver=3.2.6
pkgrel=1
pkgdesc="A Python powered template engine and code generator"
arch=('any')
url="http://www.cheetahtemplate.org"
license=(MIT)
makedepends=('python-setuptools'
             'python2-setuptools')
source=("https://files.pythonhosted.org/packages/source/${_name::1}/${_name}/${_name}-${pkgver}.tar.gz")
sha512sums=('e3422147b3d476676ecfd4ed0bba77c80b008869055748ea50fe83a79b462bb15a20239e6803403e90ea6a0a090697a7fe6ecaae8bfd8e4832f3f0c8da69200d')

prepare() {
  cp -a Cheetah3-${pkgver}{,-py2}
}

package_python-cheetah3() {
  optdepends=('python-markdown')

  cd "${srcdir}/${_name}-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize=1
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

package_python2-cheetah3() {
  optdepends=('python2-markdown')

  cd "${srcdir}/${_name}-${pkgver}-py2"
  python2 setup.py install --root="${pkgdir}" --optimize=1
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

  # Avoid conflict with python-cheetah3
  for name in cheetah cheetah-analyze cheetah-compile; do
    mv "${pkgdir}/usr/bin/${name}"{,2}
  done
}
