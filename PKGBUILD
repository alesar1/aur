# Maintainer: Ryan Greenblatt <ryan_greenblatt at brown dot edu>
#
# Contributor: Paul Nicholson <brenix@gmail.com>

pkgname=openpyn-nordvpn
pkgver=3.0.0
pkgrel=2
pkgdesc="Easily connect to and switch between OpenVPN servers hosted by NordVPN"
provides=('python-openpyn' 'openpyn-nordvpn')
arch=('any')
url="https://github.com/jotyGill/openpyn-nordvpn"
license=('GPLv3')
depends=('openvpn' 'systemd' 'python-humanfriendly' 'python-requests' 'python-colorama' 'python-coloredlogs' 'python-verboselogs' 'python-tqdm' 'python-jsonschema' 'wget' 'unzip')
makedepends=('python-setuptools')
install="${pkgname}.install"
source=("https://github.com/jotyGill/${pkgname}/archive/refs/tags/${pkgver}.tar.gz")
sha512sums=('78cd9984f82bcd1cde4d0a798c79599629fe9fd0d9ac72fb1a464dd415019379e530cc3ac360637b65e67b3bebd54289654555e7ce0786c1e525434e23713356')

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  python setup.py build
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  python setup.py install --skip-build -O1 --root="${pkgdir}"
}
