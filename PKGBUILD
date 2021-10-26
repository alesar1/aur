#!/bin/bash

# Maintainer: PumpkinCheshire <me at pumpkincheshire dot com>

pkgname=python-google-cloud-speech
_name=google-cloud-speech
pkgver=2.10.0
pkgrel=1
pkgdesc='A google cloud speech api for python to convert audio to text.'
url='https://github.com/googleapis/python-speech'
arch=('any')
license=('Apache')
depends=(
  'python-libcst'
  'python-proto-plus'
  'python-google-api-core'
  # 'python-google-cloud-core'
  'python-packaging'
)
makedepends=(
  'python'
  'python-setuptools'
)

source=("https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz")
b2sums=('e296a2e3fbc51e65befe6a343742edf2cec666d876838431e0f32688279299eef5d5cf3258fe495eff791052fe1ac09b424da13055a3233f7104ee8f3d1541c8')

build() {
  cd "$_name-$pkgver" || exit

  export PYTHONHASHSEED=0
  python setup.py build
}

package() {
  cd "$_name-$pkgver" || exit

  python setup.py install --root="$pkgdir" --optimize=1 --skip-build
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
