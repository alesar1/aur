# Contributor: Thomas Oster <thomas.oster@rwth-aachen.de>
# Maintainer: Zeph <zeph33@gmail.com>

pkgname=rabbitvcs
pkgver=0.17.2
pkgrel=1
_gitcommit='e7d5a82836855675b11cc860bc9cc3ce56864ffd'
pkgdesc="A project with the goal of developing a collection of utilities to allow for better client integration with some of the popular version control systems (core)"
arch=('any')
#url="http://rabbitvcs.org/"
url="https://github.com/rabbitvcs/rabbitvcs"
install=${pkgname}.install
changelog=${pkgname}.changelog
depends=('git' 'gtk3' 'python-pysvn' 'python-dulwich' 'python-gobject' 'python-configobj' 'python-simplejson' 'python-gtkspellcheck' 'tk')
optdepends=('meld: graphical diff viewer')
makedepends=('python-setuptools')
license=('GPL')
if [ "${_gitcommit}" != "" ]; then
  source=("rabbitvcs-$pkgver-$pkgrel.tar.gz::$url/archive/$_gitcommit.tar.gz")
else
  source=("rabbitvcs-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
fi
sha256sums=('658f410d29baf615f668ff0d787e5f3769c887d3077a307b6da9d2169291fa5f')
#sha256sums=('SKIP')


build() {
  if [ "$_gitcommit" != "" ]; then
    mv "$srcdir/rabbitvcs-$_gitcommit" "$srcdir/rabbitvcs-$pkgver"
  fi
	cd "$srcdir/$pkgname-$pkgver"
	sed -i "s#0.17.1#${pkgver}#" ./rabbitvcs/__init__.py
	sed -i "s#0.17.1#${pkgver}#" setup.py
	# sed -i "s#!= 'Darwin'#== 'toto'#" setup.py
	# sed -i "s#import hashlib#import hashlib, urllib#" ./rabbitvcs/util/helper.py
	# find . -name "*.py" | xargs grep -l sys.executable | xargs sed -i 's|sys\.executable|"/usr/bin/python2"|g'
	python setup.py build 
}
	
package(){
	cd "$srcdir/$pkgname-$pkgver"
	python setup.py install --prefix=/usr --root="$pkgdir" --optimize=1
}
