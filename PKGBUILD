#Automatically generated by pip2arch on 2014-02-17

pkgname=python2-bloom
pkgver=0.4.9
pkgrel=1
pkgdesc="Bloom is a release automation tool."
url="http://www.ros.org/wiki/bloom"
depends=('python2')
makedepends=('python2')
license=('BSD')
arch=('any')
source=('https://pypi.python.org/packages/source/b/bloom/bloom-0.4.9.tar.gz')
md5sums=('c1cf7fb00fea662e282e42efb9a84fbb')

build() {
    cd $srcdir/bloom-0.4.9
    python2 setup.py build
}

package() {
    cd $srcdir/bloom-0.4.9
    python2 setup.py install --root="$pkgdir" --optimize=1
}
