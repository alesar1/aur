# Maintainer: Nissar Chababy <contact at funilrys dot com>

_appName="pyfunceble"
pkgname=${_appName}-dev
_name=${pkgname}
upstreamName="PyFunceble-dev"
pkgver=1.17.0
pkgrel=1
pkgdesc="The tool to check the availability or syntax of domains, IPv4 or URL."
arch=('any')
url="https://funilrys.github.io/PyFunceble/"
license=('MIT')
provides=("${_appName}")
conflicts=('pyfunceble')
provides=("pyfunceble=${pkgver}")
depends=(
    'python3'
    'python-distribute'
    'python-setuptools'
    'python-colorama'
    'python-pyaml'
    'python-urllib3'
    'python-requests'
    'domain2idna'
)
source=(
    "https://files.pythonhosted.org/packages/source/${_name::1}/${_name}/${upstreamName}-${pkgver}.tar.gz"
    "https://raw.githubusercontent.com/funilrys/PyFunceble/dev/LICENSE"
)
sha256sums=(
    "09563e9cc85ca567c1d9fc2b108d6fc7d0b53b689ddac5deb4ce8948753b29a6"
    "b6f0b000fe7b60a2d6d8b31454d705d928c6ffa8783722ba5c0419dd2c9084e4"
)

build() {
    echo "https://files.pythonhosted.org/packages/source/${_name::1}/${_name}/${upstreamName}-${pkgver}.tar.gz"
    cd ${srcdir}/${upstreamName}-${pkgver}
    python setup.py build
}

package() {
    install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
    cd ${srcdir}/${upstreamName}-${pkgver}
    python setup.py install --root="${pkgdir}/" --optimize=1 --skip-build
}
