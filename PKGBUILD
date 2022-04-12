# Maintainer: Kewl <xrjy@nygb.rh.bet(rot13)>

pkgname='python-web3'
_pkgname=${pkgname#python-}
pkgver=5.28.0
pkgrel=1
pkgdesc="A Python library for interacting with Ethereum, inspired by web3.js"
arch=('any')
depends=('python-aiohttp' 'python-eth-abi' 'python-eth-account' 'python-eth-hash' 'python-eth-typing' 'python-eth-utils' \
         'python-hexbytes' 'python-ipfshttpclient' 'python-jsonschema' 'python-lru-dict' 'python-protobuf' 'python-requests' \
         'python-websockets')

makedepends=('python-setuptools')
url="https://github.com/ethereum/$_pkgname"
license=('GPL3')
source=("https://files.pythonhosted.org/packages/source/${_pkgname:0:1}/$_pkgname/$_pkgname-$pkgver.tar.gz")
sha256sums=('15209f1da8b99f85dadaa10f1117a8ec0624fc04426c62d8fe2d126bf0498b6e')

build() {
  cd $_pkgname-$pkgver
  python setup.py build
}

package() {
  cd $_pkgname-$pkgver
  python setup.py install --root="$pkgdir" --optimize=1 --skip-build
}
