# Maintainer: Nicolas Pouillard <nicolas.pouillard@gmail.com>
# Contributor: Peter Simons <simons@cryp.to>

pkgname=nevow
pkgver=0.14.3
pkgrel=1
pkgdesc="web application construction kit written in Python"
arch=('any')
url='http://pypi.python.org/pypi/Nevow'
license=('custom')
makedepends=('python2-setuptools')
depends=('python2' 'python2-twisted')

source=("https://files.pythonhosted.org/packages/1c/78/e3d086fbea8553ce9db487da38da7120e8b8896126e194b2e5af46cab5bf/Nevow-${pkgver}.tar.gz")
sha256sums=('ab565b9bccecbafa36446ea8765bec2be7ee7c66a9a8644b3851a13b64432d5e')

build(){
    cd "$srcdir/Nevow-$pkgver"
    python2 setup.py build
}

package(){
    cd "$srcdir/Nevow-$pkgver"
    python2 setup.py install --prefix=/usr --root="$pkgdir" --install-data=/usr/share/"$pkgname"
    install -D LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
