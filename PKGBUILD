# Maintainer: Nicolas Pouillard <nicolas.pouillard@gmail.com>
# Contributor: Peter Simons <simons@cryp.to>

pkgname=nevow
pkgver=0.11.1
pkgrel=1
pkgdesc="web application construction kit written in Python"
arch=('any')
url='http://pypi.python.org/pypi/Nevow'
license=('custom')
depends=('python2' 'twisted')
source=("https://pypi.python.org/packages/source/N/Nevow/Nevow-${pkgver}.tar.gz")
md5sums=('acc5d23bd94a5399752065baae6117f6')

build(){
    cd "$srcdir/Nevow-$pkgver"
    python2 setup.py build
}

package(){
    cd "$srcdir/Nevow-$pkgver"
    python2 setup.py install --prefix=/usr --root="$pkgdir" --install-data=/usr/share/"$pkgname"
    install -D LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
