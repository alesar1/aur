# Maintainer: Pieter Goetschalckx <3.14.e.ter <at> gmail <dot> com>

pkgname=('python-apprise' 'python2-apprise')
_name=${pkgname#python-}
pkgver=0.8.0
pkgrel=1
pkgdesc="Push Notifications that work with just about every platform"
arch=('any')
url="https://github.com/caronc/apprise"
license=('MIT')
makedepends=('python-setuptools'
             'python2-setuptools')
source=("https://files.pythonhosted.org/packages/source/${_name::1}/${_name}/${_name}-${pkgver}.tar.gz")
sha256sums=('511ced1b2f34eb40e6b90b4c36b83dd3c154437e40d3344b4aa80439d95f5709')

prepare() {
  cp -a apprise-${pkgver}{,-py2}
}

package_python-apprise() {
  depends=('python-decorator'
           'python-requests'
           'python-requests-oauthlib'
           'python-oauthlib'
           'python-urllib3'
           'python-six'
           'python-click'
           'python-markdown'
           'python-yaml')

  cd apprise-${pkgver}
  python setup.py install --root="${pkgdir}" --optimize=1
}

package_python2-apprise() {
  depends=('python2-decorator'
           'python2-requests'
           'python2-requests-oauthlib'
           'python2-oauthlib'
           'python2-urllib3'
           'python2-six'
           'python2-click'
           'python2-markdown'
           'python2-yaml')

  cd apprise-${pkgver}-py2
  python2 setup.py install --root="${pkgdir}" --optimize=1
}

# vim:set ts=2 sw=2 et:
