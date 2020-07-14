# Maintainer: Jonas Malaco <jonas@protocubo.io>
# Contributor: Alex Forencich <alex@alexforencich.com>
pkgname=(python-pyusb-git python2-pyusb-git)
pkgver=1.0.2.r59.g4ea402d
pkgrel=1
pkgdesc="USB access for Python"
arch=('any')
url="https://github.com/pyusb/pyusb"
license=('BSD')
makedepends=('git' 'python-setuptools' 'python2-setuptools'
             'python-setuptools-scm' 'python2-setuptools-scm')

_gitroot='https://github.com/pyusb/pyusb'
_gitname='pyusb'

source=("$_gitname::git+$_gitroot")
md5sums=('SKIP')

pkgver() {
  cd "$srcdir/$_gitname"
  git describe --tags --long | sed -E 's/^v//;s/([^-]*-g)/r\1/;s/-/./g'
}

build() {
  cd "$srcdir/$_gitname"
  python setup.py build
  python2 setup.py build
}

package_python-pyusb-git() {
  depends=('python' 'libusb')
  provides=('python-pyusb')
  conflicts=('python-pyusb')

  cd "$srcdir/$_gitname"
  python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
}

package_python2-pyusb-git() {
  depends=('python2' 'libusb')
  provides=('python2-pyusb')
  conflicts=('python2-pyusb')

  cd "$srcdir/$_gitname"
  python2 setup.py install --root="$pkgdir/" --optimize=1 --skip-build
}
