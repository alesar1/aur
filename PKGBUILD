# Maintainer: Christopher Arndt <aur -at- chrisarndt -dot- de>

_pkgbase="rtmidi"
pkgbase="python-${_pkgbase}"
pkgname=(${pkgbase} python2-${_pkgbase})
pkgver=1.3.0
pkgrel=1
arch=('i686' 'x86_64' 'arm')
url="https://github.com/SpotlightKid/python-rtmidi"
license=('MIT')
depends=('jack')
makedepends=('cython' 'cython2' 'python-setuptools' 'python2-setuptools')
source=("https://files.pythonhosted.org/packages/source/${pkgbase::1}/${pkgbase}/${pkgbase}-${pkgver}.tar.gz")
sha256sums=('61e9d1c1f1202a1577f06644948af985427030984ff956970a22b50f080d4c2d')


prepare() {
  cp -r ${pkgbase}-${pkgver} python2-${_pkgbase}-${pkgver}
}

build() {
  cd "${srcdir}/${pkgbase}-${pkgver}"
  python setup.py build

  cd "${srcdir}/python2-${_pkgbase}-${pkgver}"
  python2 setup.py build
}

package_python-rtmidi() {
  pkgdesc="Python bindings for the cross-platform MIDI I/O library RtMidi"
  depends+=('python')

  cd "${srcdir}/${pkgbase}-${pkgver}"
  python setup.py install --root="$pkgdir" --skip-build --optimize=1

  # license
  install -Dm644 LICENSE.txt "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

package_python2-rtmidi() {
  pkgdesc="Python 2 bindings for the cross-platform MIDI I/O library RtMidi"
  depends+=('python2')

  cd "${srcdir}/python2-${_pkgbase}-$pkgver"
  python2 setup.py install --root="$pkgdir" --skip-build --optimize=1

  # license
  install -Dm644 LICENSE.txt "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
