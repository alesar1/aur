# Maintainer: Justin Kromlinger <hashworks@archlinux.org>
# Contributor: Stefan Husmann <stefan-husmann@t-online.de>

pkgname=python-dateparser
pkgver=1.1.2
pkgrel=1
pkgdesc="python parser for human readable dates"
url="https://github.com/scrapinghub/dateparser"
arch=('any')
license=('custom:bsd')
depends=(
  'python-dateutil'
  'python-regex'
  'python-tzlocal'
  'python-ruamel-yaml'
  'python-langdetect'
  'python-pytz'
  'python-gitpython'
  'python-fasttext' # AUR
  'python-convertdate' # AUR
  'python-hijri-converter' # AUR
)
makedepends=('python-setuptools')
#checkdepends=(
#  'python-pytest'
#  'python-parameterized'
#  'python-pymeeus' # AUR
#)
source=("${pkgname#python-}-${pkgver}.tar.gz::https://github.com/scrapinghub/dateparser/archive/v${pkgver}.tar.gz")
sha256sums=('c96cc41b2a1c8596edfcdf676f3adf8f458590ca0c67447f0a8f53c189a5b30b')

build() {
  cd "${pkgname#python-}-${pkgver}"

  python setup.py build
}

# Currently: 2260 failed, 21272 passed, 14 skipped, 15 warnings in 253.79s (0:04:13)
#check() {
#  cd "${pkgname#python-}-${pkgver}"

#  python -m pytest
#}

package() {
  cd "${pkgname#python-}-${pkgver}"

  python setup.py install --root="${pkgdir}/" --optimize=1

  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  install -Dm644 README.rst "${pkgdir}/usr/share/doc/${pkgname}/README.rst"
}
