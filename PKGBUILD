# Maintainer: pallxk <aur at pallxk dot com>

pkgname=python-azure-git
pkgver=4.0.0.r720.gff6fd86c4
pkgrel=1
pkgdesc="Microsoft Azure SDK for Python"
arch=('any')
url="https://github.com/Azure/azure-sdk-for-python"
license=('MIT')
depends=('python-azure-storage' 'python-msrestazure')
makedepends=('git' 'python-setuptools')
provides=('python-azure')
conflicts=('python-azure')
source=("git+https://github.com/Azure/azure-sdk-for-python.git")
md5sums=('SKIP')

pkgver() {
  cd azure-sdk-for-python
  git describe --long --tags --match azure_* | sed 's/^azure_//;s/-/.r/;s/-/./'
}

build() {
  cd azure-sdk-for-python
  python setup.py build
}

package() {
  cd azure-sdk-for-python
  python setup.py install --root="$pkgdir" --optimize=1
}
