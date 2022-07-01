# Maintainer: yate <mwyeatts at gmail dot com>
# Maintainer: Xaiuweb <xaiuweb@protonmail.ch>
# Contributor: Andy Weidenbaum <archbaum@gmail.com>

pkgname=python-trezor
pkgver=0.13.2
pkgrel=1
pkgdesc='Python 3 library for communicating with the TREZOR Bitcoin hardware wallet'
arch=('any')
makedepends=('python-setuptools')
depends=('protobuf'
         'python'
         'python-ecdsa'
         'python-mnemonic'
         'python-requests'
         'python-click'
         'python-libusb1'
         'python-construct'
         'python-typing_extensions'
         'python-pyblake2'
         'python-protobuf'
         'python-attrs')
optdepends=('python-hidapi: Firmware-less Trezor One setup')
url='https://github.com/trezor/trezor-firmware/tree/master/python'
license=('LGPL3')
options=(!emptydirs)
source=('https://files.pythonhosted.org/packages/8b/d8/010acbb090551e6bb9446ab611357f98891a61857215bfe3c475292b74d3/trezor-0.13.2.tar.gz')
sha256sums=('cdb696fd01dad6a0cb23b61ea3a4867bb51cecda5cb2a77366fb6a53bff58ac4')
provides=('python-trezor' 'trezorctl')
conflicts=('trezorctl')

build() {
  cd "$srcdir/${pkgname#python-}-$pkgver"

  msg2 'Building...'
  python setup.py build
}

package() {
  cd "$srcdir/${pkgname#python-}-$pkgver"

  msg2 'Installing...'
  python setup.py install --root="$pkgdir" --optimize=1
}
