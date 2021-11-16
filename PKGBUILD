# Maintainer: Pig Monkey <pm@pig-monkey.com>
# Maintainer: Caltlgin Stsodaat <contact@fossdaily.xyz>
# Contributor: Javier Tiá <javier dot tia at gmail dot com>

pkgname='visidata'
pkgver=2.7
pkgrel=1
pkgdesc='Terminal spreadsheet multitool for discovering and arranging data'
arch=('any')
url='https://www.visidata.org'
_url_source='https://github.com/saulpw/visidata'
_url_pypi='https://pypi.org/project/visidata'
license=('GPL3')
depends=('python-dateutil')
makedepends=('python-setuptools')
optdepends=('python-dnslib: pcap support'
            'python-dpkt: pcap support' # AUR
            'python-fonttools: ttf/otf support'
            'python-h5py: hdf5 support'
            'python-lxml: html/xml support'
            'python-mapbox-vector-tile: mbtiles support' # AUR
            'python-namestand: graphviz support' # AUR
            'python-openpyxl: xlsx support'
            'python-pandas: dta (Stata) support'
            'python-pdfminer: pdf support'
            'python-psycopg2: postgres support'
            'python-pypng: png support'
            'python-pyshp: shapefiles support' # AUR
            'python-requests: http support'
            'python-tabulate: tabulate saver support'
            'python-vobject: vcf support'
            'python-wcwidth: tabulate saver with unicode support'
            'python-xlrd: xls support'
            'python-pyaml: yaml/yml support')
source=("https://files.pythonhosted.org/packages/source/${pkgname::1}/${pkgname}/${pkgname}-${pkgver}.tar.gz")
sha256sums=('dbe2a629cac5e39b9fce893399edada61c3162814b183251688de096ac6a855e')

prepare() {
  # Set correct permissions
  cd "${pkgname}-${pkgver}"
  chmod -c 644 "${pkgname}/man/"*
  chmod -c 644 "${pkgname}.egg-info/"*
  chmod -c 644 "${pkgname}/ddw/"*
}

build() {
  cd "${pkgname}-${pkgver}"
  python setup.py build
}

package() {
  cd "${pkgname}-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
  install -Dvm644 'README.md' -t "${pkgdir}/usr/share/doc/${pkgname}"
}

# vim: ts=2 sw=2 et:
