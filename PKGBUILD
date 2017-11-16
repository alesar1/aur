# Maintainer: Kelsey Maes <kelseymaes at outlook dot com>
pkgname=python-adal
pkgver=0.4.7
pkgrel=1
pkgdesc='ADAL for Python'
arch=('any')
url="https://github.com/AzureAD/azure-activedirectory-library-for-python"
license=('MIT')
depends=('python-cryptography' 'python-dateutil' 'python-pyjwt' 'python-requests')
source=("https://github.com/AzureAD/azure-activedirectory-library-for-python/archive/${pkgver}.tar.gz")
md5sums=('4b48343e0d67dc02461450dde9ecd070')
makedepends=('python-setuptools')

build() {
  cd "azure-activedirectory-library-for-python-$pkgver"
  python setup.py build
}

package() {
  cd "azure-activedirectory-library-for-python-$pkgver"
  python setup.py install --root="$pkgdir" --optimize=1
}
