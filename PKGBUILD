# Maintainer: robertfoster

pkgbase=python-fastjsonschema
pkgname=('python-fastjsonschema' 'python2-fastjsonschema')
pkgver=2.14.4
pkgrel=1
pkgdesc="Fastest Python implementation of JSON schema"
arch=('any')
url="https://github.com/horejsek/python-fastjsonschema"
license=('BSD3')
source=("https://github.com/horejsek/python-fastjsonschema/archive/v$pkgver.tar.gz")
makedepends=('python2-setuptools' 'python-setuptools')

prepare() {
  cp -a $pkgbase-$pkgver{,-py2}
}

build() {
  cd "$srcdir"/$pkgbase-$pkgver
  python setup.py build

  cd "$srcdir"/$pkgbase-$pkgver-py2
  python2 setup.py build
}

package_python-fastjsonschema() {
  depends=('python')

  cd $pkgbase-$pkgver
  python setup.py install --root="$pkgdir" --optimize=1
}

package_python2-fastjsonschema() {
  depends=('python2')

  cd $pkgbase-$pkgver-py2
  python2 setup.py install --root="$pkgdir" --optimize=1
}

md5sums=('98d94e472ea56ac94f0606b1f0453f6c')
