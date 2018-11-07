# Maintainer: Aleksandar Trifunović <akstrfn at gmail dot com>
# Contributor: Sergey Mastykov <smastykov at gmail dot com>

pkgname=python-pyramid
pkgver=1.10.1
pkgrel=1
pkgdesc='A very general open source Python web framework.'
arch=('any')
url='https://github.com/Pylons/pyramid'
license=('custom')
depends=('python-hupper'
         'python-plaster'
         'python-plaster-pastedeploy'
         'python-translationstring'
         'python-venusian'
         'python-webob'
         'python-zope-deprecation'
         'python-zope-interface')
makedepends=('python-webtest'
             'python-zope-component'
             'python-nose'
             'python-virtualenv'
             'python-repoze.lru'
             'python-setuptools')
optdepends=('python-pyramid-debugtoolbar: development mode'
            'python-pastedeploy: pserve/pcreate'
            'python-chameleon: pserve/pcreate'
            'python-waitress: pserve/pcreate')

source=($url/archive/${pkgver}.tar.gz)
sha256sums=('a7763ddd8851a1ee031bde995551dcbc81ff6c88e2da744fefbea082e2193746')

build() {
  cd pyramid-$pkgver
  python setup.py build
}

check() {
  cd pyramid-$pkgver
  # this fails because testing can be done only once pyramid is installed...
  # nosetests 
}

package() {
  cd pyramid-$pkgver
  python setup.py install --prefix=/usr --root="${pkgdir}" --optimize=1
  install -D LICENSE.txt $pkgdir/usr/share/licenses/$pkgname/LICENSE
}

# vim:set ts=2 sw=2 et:
