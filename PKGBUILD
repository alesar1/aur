# Maintainer: Zhuoyun Wei <wzyboy@wzyboy.org>
# Contributor: "Amhairghin" Oscar Garcia Amor (https://ogarcia.me)

_pkgname='python-magic'
pkgname='python-magic-ahupp'
pkgdesc='A python wrapper for libmagic'
pkgver=0.4.13
pkgrel=1
arch=('any')
url="https://github.com/ahupp/python-magic"
license=('MIT')
makedepends=('python-setuptools')
conflicts=('python-magic')
provides=('python-magic')
source=("https://github.com/ahupp/${_pkgname}/archive/${pkgver}.tar.gz")
sha256sums=('fd476aeab18792985b18e51c4356677e5a396576bc21717360fc6c81587e872e')

package() {
  cd "${_pkgname}-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize='1'

  # doc file
  install -D -m644 README.md "${pkgdir}/usr/share/doc/${pkgname}/README.md"
}
