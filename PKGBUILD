# Maintainer: Lukas Zimmermann <luk.zim91 at gmail dot com> 
# Contributor: Kelsey Maes <kelseymaes at outlook dot com>

pkgname=python-knack
pkgver=0.7.1
pkgrel=1
pkgdesc="A Python command line interface framework"
arch=('any')
url="https://github.com/Microsoft/knack"
license=('MIT')
depends=('python-argcomplete' 'python-colorama' 'python-jmespath' 'python-six' 'python-tabulate' 'python-yaml')
makedepends=('python-setuptools')
checkdepends=('python-mock')
source=("https://github.com/Microsoft/knack/archive/v${pkgver}.tar.gz")
sha256sums=('8026672cb831e2bbcc1c2ce5d8df342eff909b5b901676f32fa83013e88f3d1f')

build() {
  cd "knack-${pkgver}"
  python setup.py build
}

# This can be commented in once issue with YAML and Python 3.7 have been resolved, see:
# * https://github.com/yaml/pyyaml/pull/212
# check() {
#   cd "knack-${pkgver}"
#   python -m unittest discover tests
# }

package() {
  cd "knack-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
}

