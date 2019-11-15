# Maintainer: Marcel O'Neil <marcel@marceloneil.com>
# Contributor: Andy Weidenbaum <archbaum@gmail.com>
# Contributor: RunningDroid <runningdroid AT zoho.com>
# Contributor: Sebastian Lindqvist <dunpin@gmail.com>
# Contributor: Dan Beste <dan.ray.beste@gmail.com>

pkgname='electron-cash-git'
pkgdesc='Lightweight Bitcoin Cash wallet'
pkgver=4.0.11.r3.g7f761fb0f
pkgrel=1
url='http://www.electroncash.org/'
arch=('any')
license=('MIT')
makedepends=(
  'git'
  'protobuf'
  'python-requests'
  'python-setuptools'
  'python-tox'
)
depends=(
  'hicolor-icon-theme'
  'libsecp256k1'
  'python'
  'python-dateutil'
  'python-dnspython'
  'python-ecdsa'
  'python-jsonrpclib-pelix'
  'python-protobuf'
  'python-pyaes'
  'python-pyqt5'
  'python-pysocks'
  'python-qrcode'
  'python-requests'
  'python-six'
  'qt5-base'
  'qt5-svg'
  'ttf-bitstream-vera'
)
optdepends=(
  'python-btchip: Ledger hardware wallet support'
  'python-hidapi: Digital Bitbox hardware wallet support'
  'python-matplotlib: plot transaction history in graphical mode'
  'python-pycryptodomex: use PyCryptodome AES implementation instead of pyaes'
  'python-qdarkstyle: optional dark theme in graphical mode'
  'python-rpyc: send commands to Electrum Python console from an external script'
  'zbar: QR code reading support'
)
provides=("${pkgname/-git/}")
conflicts=("${pkgname/-git/}")
source=("${pkgname}::git+https://github.com/Electron-Cash/Electron-Cash.git")
sha256sums=('SKIP')

pkgver() {
  cd "${pkgname}"

  git describe --long --tags \
    | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "${pkgname}"

  # Compile the icons file for Qt:
  pyrcc5 icons.qrc -o gui/qt/icons_rc.py
  # Compile the protobuf description file:
  protoc --proto_path=lib/ --python_out=lib/ lib/paymentrequest.proto
  # Create translations (optional):
  python contrib/make_locale
  # Build
  python setup.py build
}

check() {
  cd "${pkgname}"

  tox -e py38
}

package() {
  cd "${pkgname}"

  python setup.py install --root="${pkgdir}" --optimize=1
}

# vim: ts=2 sw=2 et:
