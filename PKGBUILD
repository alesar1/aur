# Maintainer: Andrew Sun <adsun701 at gmail dot com>
# Contributor: Levente Polyak <anthraxx[at]archlinux[dot]org>

pkgbase=pyshark
pkgname=('python-pyshark')
pkgver=0.5.2
pkgrel=1
pkgdesc='Python wrapper for tshark, allowing python packet parsing using wireshark dissectors'
url='https://github.com/KimiNewt/pyshark'
arch=('any')
license=('MIT')
makedepends=('wireshark-cli' 'python-py' 'python-lxml' 'python-setuptools' 'python-packaging')
source=("${pkgbase}-${pkgver}.tar.gz"::"https://github.com/KimiNewt/pyshark/archive/v${pkgver}.tar.gz")
sha512sums=('dc9ee92a915a6122c4b492efdb9569bdead1bcb82e1931d7e05af6a5131c396feb2e8fc35fc294c5a3c5fd85641338790707da2682f3c44edc77c056e77411fc')

build() {
  cd "${srcdir}/${pkgbase}-${pkgver}/src"
  python setup.py build
}

package_python-pyshark() {
  depends=('wireshark-cli' 'python-py' 'python-lxml' 'python-packaging')
  cd "${srcdir}/${pkgbase}-${pkgver}/src"
  python setup.py install --prefix=/usr --root="${pkgdir}" --optimize=1 --skip-build
  install -Dm644 ../README.md "${pkgdir}/usr/share/doc/${pkgname}/README.md"
  install -Dm644 ../LICENSE.txt "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE.txt"
}

# vim: ts=2 sw=2 et:
