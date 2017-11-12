# Maintainer: brent s. <bts[at]square-r00t[dot]net>
validpgpkeys=('748231EBCBD808A14F5E85D28C004C2F93481F6B')
# Bug reports can be filed at https://bugs.square-r00t.net/index.php?project=3
# News updates for packages can be followed at https://devblog.square-r00t.net
pkgname=('python-pyqrcode' 'python2-pyqrcode')
pkgver=1.2.1
pkgrel=4
pkgdesc="A QR code generator written purely in Python with SVG, EPS, PNG and terminal output (fixed for python3)"
arch=('any')
url="https://pythonhosted.org/PyQRCode/"
license=('CUSTOM')
makedepends=('python-setuptools' 'python2-setuptools')
_pkgname=PyQRCode
source=("https://files.pythonhosted.org/packages/source/P/${_pkgname}/${_pkgname}-${pkgver}.tar.gz"
	"LICENSE"
        "${_pkgname}-${pkgver}.tar.gz.sig"
	"LICENSE.sig")
sha512sums=('784262cb15c10f3581b0caeac6bba046686b35b8c0709ee78684b805b6cba49f4250a004dc5f7d393cc25929cbf815c6c3a94e284a77d20ff7224a8dde3a036a'
	    '829167e63453a7be5089a8d1318645a69896147d81cb9591a2569bbbbd8d726a8d565d2d6306c1edf706e2367cf2f9a1de0606a1fe362190effa9797b693e1cb'
	    'SKIP'
            'SKIP')

package_python-pyqrcode() {
  depends=('python')
  optdepends=('python-pypng: PNG generation support')

  cd "${srcdir}/${_pkgname}-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize=1
  install -D -m 0644 ${srcdir}/LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/${pkgname}
}

package_python2-pyqrcode() {
  depends=('python2')
  optdepends=('python2-pypng: PNG generation support')

  cd "${srcdir}/${_pkgname}-${pkgver}"
  python2 setup.py install --root="${pkgdir}" --optimize=1
  install -D -m 0644 ${srcdir}/LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/${pkgname}
}
