# Maintainer: Lorenzo Cappelletti <lorenzo.cappelletti gmail.com>

pkgname=python-mbed-manifest-tool
pkgver=2.3.0
pkgrel=1
pkgdesc='A tool for creating and parsing update manifests'
arch=('any')
url='https://github.com/ARMmbed/manifest-tool'
license=('Apache')
makedepends=('python-setuptools')
depends=(
  'python>=3.6'
  'python-yaml>=4.2b1' 'python-yaml<5.4.2'
  'python-asn1ate>=0.5' 'python-asn1ate<=0.6.0'
  'python-cryptography>=2.5' 'python-cryptography<=3.4.8'
  'python-jsonschema>=2.6.0' 'python-jsonschema<=3.2.0'
  'python-pyasn1>=0.3.1' 'python-pyasn1<=0.4.8'
  'python-requests>=2.20.0' 'python-requests<=2.26.0'
  'python-mbed-cloud-sdk'
)
source=("${pkgname}-${pkgver}.tar.gz::${url}/archive/v${pkgver}.tar.gz")
sha256sums=('19ff61ed139dc9143767856c8d8e27d9d056f176ce029814d465d1e3d8a265cb')

package() {
  cd "manifest-tool-${pkgver}"
  python setup.py install --root="${pkgdir}/" --optimize=1
  python setup.py clean --all
}

# vim:set ts=2 sw=2 et:
