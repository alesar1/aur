# Maintainer: Michael Borders <michael.a.borders@gmail.com>

pkgname=python-netmiko
_pkgname=netmiko
pkgver=2.4.2
_pkgver="v${pkgver}"
pkgrel=1
pkgdesc="Multi-vendor library to simplify Paramiko SSH connections to network devices"
arch=('any')
url="https://github.com/ktbyers/netmiko"
license=('MIT')
depends=('python' 'python-paramiko' 'python-scp' 'python-pyserial' 'python-textfsm')
optdepends=()
makedepends=('python-setuptools')
source=("${url}/archive/${_pkgver}.tar.gz")
sha256sums=('02f6d1eafa5588ae89a7ba01f9a0c65089aded8cfedef7bd8d61a1255bf2b4f7')

package(){
  cd "$srcdir/$_pkgname-$pkgver"
  python setup.py install --root="$pkgdir/" --optimize=1
}
