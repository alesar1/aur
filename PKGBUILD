# Maintainer: Ross Chadwick <hello@rchadwick.co.uk>

pkgbase=('nordnm')
pkgname=('nordnm')
_module='nordnm'
provides=('nordnm')
pkgver='0.3.2'
pkgrel=1
pkgdesc="A CLI tool for automating the importing, securing and usage of NordVPN OpenVPN servers through NetworkManager."
url="https://github.com/Chadsr/NordVPN-NetworkManager"
depends=('python' 'iputils' 'sudo' 'networkmanager' 'openvpn' 'networkmanager-openvpn' 'python-requests' 'python-numpy')
makedepends=('python-setuptools')
license=('GPL3')
arch=('any')
source=("https://files.pythonhosted.org/packages/source/n/nordnm/nordnm-${pkgver}.tar.gz")
md5sums=('67b0ab72f53b90dd634ee379f764f422')

build() {
    cd "${srcdir}/${_module}-${pkgver}"
    python setup.py build
}

package() {
    depends+=()
    cd "${srcdir}/${_module}-${pkgver}"
    python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
}
