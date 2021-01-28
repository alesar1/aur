# Maintainer: Jingbei Li <i@jingbei.li>
pkgname=python-glob2
pkgver=0.7
pkgrel=2
pkgdesc="An extended version of Python's builtin glob module that can capture patterns and supports recursive wildcards."
arch=('any')
url="https://github.com/miracle2k/python-glob2"
license=('custom')
depends=('python')
makedepends=('git' 'python-setuptools')
source=("https://github.com/miracle2k/python-glob2/archive/v${pkgver}.tar.gz")
md5sums=('dc668d155d48c679844fbdecd1e9cef0')

build() {
  cd "$srcdir/${pkgname}-${pkgver}"
  python setup.py build
}

package() {
  cd "$srcdir/${pkgname}-${pkgver}"
  python setup.py install --root="$pkgdir"/ --optimize=1
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

# vim:set ts=2 sw=2 et:
