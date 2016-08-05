# Maintainer: Sergio Tridente <tioduke (at) gmail (dot) com>

_pkgname=habitica
pkgname=python-habitica
pkgver=0.0.13
pkgrel=2
pkgdesc="Commandline interface to Habitica."
arch=('any')
url="https://pypi.python.org/pypi/habitica"
license=('MIT')
depends=('python' 'python-docopt' 'python-requests')
makedepends=('python-setuptools')
source=("https://pypi.python.org/packages/source/h/habitica/${_pkgname}-$pkgver.tar.gz"
        auth.cfg.sample
        habitica_api_v3.patch)
md5sums=('4fffa63a0f2c97a72826dbb77a603163'
         '73203917ea9a075cafaf287f9d707a15'
         '51b8709c608ac1d6a95f6d3031cd53d6')


prepare() {
  cd "$srcdir/${_pkgname}-$pkgver"
  
  patch -p0 -i $srcdir/habitica_api_v3.patch
}

build() {
  cd "$srcdir/${_pkgname}-$pkgver"
  python setup.py build
}

package() {
  cd "$srcdir/${_pkgname}-$pkgver"
  python setup.py install --skip-build --root="$pkgdir" --optimize=1
  install -Dm644 README.md "$pkgdir"/usr/share/doc/${_pkgname}/README.txt
  install -Dm644 "$srcdir"/auth.cfg.sample "$pkgdir"/usr/share/examples/${_pkgname}/auth.cfg.sample
}
