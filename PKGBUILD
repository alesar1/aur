# Maintainer: Pieter Goetschalckx <3.14.e.ter <at> gmail <dot> com>

pkgbase=python-apprise
pkgname=('python-apprise' 'python2-apprise')
pkgver=0.0.6
pkgrel=1
pkgdesc="Push Notifications that work with just about every platform"
arch=('any')
url="https://github.com/caronc/apprise"
license=('GPL3')
makedepends=('python-setuptools' 'python2-setuptools')
source=("https://github.com/caronc/apprise/archive/v$pkgver.tar.gz")
sha256sums=('6ea14b4c81bb6e3b033ffd365f493039ebe874b8e0bc90f070572f5e0fc1fb46')

prepare() {
  cp -a apprise-$pkgver{,-py2}
}

build() {
  cd "$srcdir"/apprise-$pkgver
  python setup.py build

  cd "$srcdir"/apprise-$pkgver-py2
  python2 setup.py build
}

package_python-apprise() {
  depends=('python-decorator'
           'python-requests'
           'python-requests-oauthlib'
           'python-oauthlib'
           'python-urllib3'
           'python-six'
           'python-click')

  cd apprise-$pkgver
  python setup.py install --root="$pkgdir" --optimize=1
}

package_python2-apprise() {
  depends=('python2-decorator'
           'python2-requests'
           'python2-requests-oauthlib'
           'python2-oauthlib'
           'python2-urllib3'
           'python2-six'
           'python2-click')

  cd apprise-$pkgver-py2
  python2 setup.py install --root="$pkgdir" --optimize=1
}
