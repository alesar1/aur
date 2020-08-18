# Maintainer: Donald Webster <fryfrog@gmail.com>

# The script that controls the fanshim is not part of the pypi release. And the releases track the fanshim library,
# not the script. So we'll track this package version on the library, but pin the hash of the script and bump the
# pkgrel to update.

pkgname=fanshim
_name=fanshim
pkgver=0.0.5
pkgrel=1
_scripthash="99151b84b975df72b4af34d71117885184e740db"
pkgdesc="Automatic control of Pimoroni Fan Shim for Raspberry Pi."
arch=('any')
url="https://github.com/pimoroni/fanshim-python"
license=('MIT')
depends=('python'
         'python-psutil'
         'python-plasmalights'
         'python-raspberry-gpio')
makedepends=('python-setuptools')

source=("https://files.pythonhosted.org/packages/source/${_name::1}/${_name}/${_name}-${pkgver}.tar.gz"
        "fanshim-${_scripthash}.py::https://raw.githubusercontent.com/pimoroni/fanshim-python/${_scripthash}/examples/automatic.py"
        'fanshim.service')

sha512sums=('e81de34579c6d3312a4647fae3a11bae034769f28b3bdef01b2bf8a32fdd5e49900c8bf9a063f4875fb9a2880c5e54a70847d0a479254782500eda02f1b15979'
            '35db868516da1d5ba5f4d337de3fa0c43b210d4b4a6e37efba45801e12f88c7c0e66d39c5307f98811f3268af2b2bc69a9cc476b8986abc699aed2ff0e6b0ae0'
            '10bf465ab1d5d5a769ad2f656030cd6e9cf247efc0a7446797ae2df70bc10e91f1e0b5a478f68a46974a3aa84c01f35bd4119c17739b1bbb0cb98806382354e5')

package() {
  cd fanshim-${pkgver}
  python setup.py install --root="${pkgdir}" --optimize=1
  install -D -m 755 "${srcdir}/fanshim-${_scripthash}.py" "${pkgdir}/usr/bin/fanshim"
  install -D -m 644 "${srcdir}/fanshim.service" "${pkgdir}/usr/lib/systemd/system/fanshim.service"
}

# vim:set ts=2 sw=2 et:
