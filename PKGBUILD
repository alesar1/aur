# Maintainer: Franco Masotti <franco dot masotti at tutanota dot com>
# Contributor: Franco Masotti <franco dot masotti at tutanota dot com>
pkgname=python-md_toc
pkgver=8.1.1
pkgrel=1
pkgdesc="Automatically generate a compliant table of contents for a markdown file to improve document readability"
arch=('any')
url="https://blog.franco.net.eu.org/software/#md-toc"
license=('GPL3')
depends=('python'
         'python-fpyutils=2.1.0'
         'python-setuptools')
options=(!emptydirs)
source=("https://blog.franco.net.eu.org/software/md-toc-${pkgver}/md-toc-${pkgver}.tar.gz.sig" "https://blog.franco.net.eu.org/software/md-toc-${pkgver}/md-toc-${pkgver}.tar.gz")
sha512sums=('SKIP' '67a9f70ccb0b8af038572d2aa37474d199bbd2c07f5f891ccd4779d65e166a780377abbf9d3f51666d6fcf3e40989a69268b295ee0190e8bbd948271319195cb')

check() {
  cd "${srcdir}"/md-toc-"${pkgver}"
  python -m unittest discover --failfast --locals --verbose
}

package() {
  cd "${srcdir}"/md-toc-"${pkgver}"
  python setup.py install --root="${pkgdir}/" --optimize=1
}
