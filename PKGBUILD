# Maintainer: Caltlgin Stsodaat <contact@fossdaily.xyz>
# Contributer: Eli Patterson <elipup@gmail.com>
# Contributer: Franz Müller <ethylisocyanat@gmail.com>

_pkgname='osmnx'
pkgname="python-${_pkgname}"
pkgver=0.16.2
pkgrel=1
pkgdesc='Retrieve, model, analyze, and visualize OpenStreetMap street networks and other spatial data'
arch=('any')
url='https://github.com/gboeing/osmnx'
_url_pypi='https://pypi.org/project/osmnx'
license=('MIT')
depends=('python'
        'python-descartes'
        'python-folium'
        'python-geopandas'
        'python-matplotlib'
        'python-networkx'
        'python-numpy'
        'python-pandas'
        'python-pyproj'
        'python-requests'
        'python-rtree'
        'python-scikit-learn'
        'python-scipy'
        'python-shapely')
makedepends=('python-setuptools')
source=("https://files.pythonhosted.org/packages/source/${_pkgname::1}/${_pkgname}/${_pkgname}-${pkgver}.tar.gz")
sha256sums=('45c94896ca068653b2c233db459d03d8070a813df6cd8d95143f0714f8e0e7d6')

build() {
  cd "${_pkgname}-${pkgver}"
  python setup.py build
}

package() {
  cd "${_pkgname}-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
  install -Dvm644 'README.md' -t "${pkgdir}/usr/share/doc/${pkgname}"
  install -Dvm644 'LICENSE.txt' "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

# vim: ts=2 sw=2 et:
