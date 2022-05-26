# Maintainer: nblock <nblock [/at\] archlinux DOT us>

pkgname=pbincli
_name="PBinCLI"
pkgver=0.3.2
pkgrel=1
pkgdesc='A command line client for PrivateBin'
arch=('any')
url='https://github.com/r4sas/PBinCLI'
license=('MIT')
depends=('python'
         'python-base58'
         'python-pycryptodome'
         'python-requests'
         'python-sjcl')
makedepends=('python-setuptools')
source=("https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz")
sha1sums=('41e414fbb3d94ebb2dad5da1dd4d8f94e7a2c694')
sha256sums=('32cae77cc5e4e73ef0aa39a1d06701df535b30fd589327d6350d2e31814d2b61')

build() {
  cd "$_name-$pkgver"
  python setup.py build
}

package() {
  cd "$_name-$pkgver"
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
}
