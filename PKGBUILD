# Maintainer: Michał Wojdyła < micwoj9292 at gmail dot com >
_name=pyHanko
pkgname='python-pyhanko'
pkgver=0.15.1
pkgrel=1
pkgdesc="Tools for stamping and signing PDF files"
url="https://github.com/MatthiasValvekens/pyHanko"
license=('MIT')
arch=('any')
depends=('python-pyhanko-certvalidator' 'python-pytz' 'python-qrcode' 'python-tzlocal'
         'python-click' 'python-pyyaml')
optdepends=('python-uharfbuzz: to use OpenType fonts.'
            'python-fonttools: to use OpenType fonts.')
makedepends=('python-setuptools' 'python-pytest-runner' 'python-wheel')
source=("${_name}-${pkgver}.tar.gz::https://files.pythonhosted.org/packages/source/${_name::1}/${_name}/${_name}-$pkgver.tar.gz")
sha256sums=('7854916e608d34878abbdc30337e71914683b128401b7dfe3f4ae25fa76dbcac')

build() {
  cd "$srcdir/${_name}-${pkgver}"
  python setup.py build
}

package() {
  cd "$srcdir/${_name}-${pkgver}/"
  python setup.py install --skip-build --root="$pkgdir/" --optimize=1
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
