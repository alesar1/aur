# Creator: Miguel de Val-Borro <miguel dot deval at gmail dot com>
# Maintainer: Médéric boquien <mboquien@free.fr>

pkgname=python-astroquery
pkgver=0.4.3
pkgrel=1
pkgdesc="Set of tools for querying astronomical web forms and databases"
arch=('x86_64')
url="http://astroquery.readthedocs.org/en/latest/"
license=('BSD')
depends=('python>=3.6' 'python-numpy>=1.14' 'python-astropy>=3.1.2' 'python-requests' 'python-keyring' 'python-beautifulsoup4' 'python-html5lib')
optdepends=('python-aplpy: required for the full functionality of the alma module'
            'python-astropy-healpix: required for the full functionality of the cds module'
            'python-pyregion: required for the full functionality of the alma module'
            'python-regions: required for the full functionality of the cds module'
            'python-boto3: required for the full functionality of the mast module'
)
conflicts=()
makedepends=('cython')
source=("https://files.pythonhosted.org/packages/source/a/astroquery/astroquery-${pkgver}.tar.gz")
sha512sums=('80ea34e86919b6442e92f59f1dd759c482f72e1d9ccad69ed25b8dfafc8d7fe30c192539a0a104981279d3966eff0fdd6272022f320b93f9a8ba29745f64de8f')

build() {
  cd ${srcdir}/astroquery-${pkgver}
  python setup.py build --use-system-libraries --offline
}

package() {
  cd ${srcdir}/astroquery-${pkgver}

  install -d -m755 "${pkgdir}/usr/share/licenses/${pkgname}/"
  install -m644 -t "${pkgdir}/usr/share/licenses/${pkgname}/" licenses/*
  python setup.py install --offline --root=${pkgdir} --prefix=/usr --optimize=1
}
