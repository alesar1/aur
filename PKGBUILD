# Maintainer: yjun <jerrysteve1101 at gmail dot com>

pkgname=python-botoy
_gitname=${pkgname#python-}
pkgver=0.0.18
pkgrel=1
pkgdesc="OPQ/IOTQQ/IOTBot的一个Python开发助手"
arch=('any')
url="https://github.com/xiyaowong/botoy"
license=('MIT')
depends=('python-httpx'
         'python-socketio4'
         'python-websocket-client'
         'python-prettytable'
         'python-loguru'
         'python-click'
         'python-aiohttp')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/xiyaowong/botoy/archive/${pkgver}.tar.gz")
sha256sums=('0cef12c9c125b784cc64157eb4e6aa5b95e2694943ba6a236877bb10292efa5a')

build() {
  cd ${_gitname}-${pkgver}

  python setup.py build
}

package() {
  cd ${_gitname}-${pkgver}

  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
  install -Dm644 "LICENSE" -t "$pkgdir/usr/share/licenses/$pkgname"
}
# vim: ts=2 sw=2 et:
