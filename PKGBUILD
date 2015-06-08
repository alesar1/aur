# Maintainer: Andrejs Mivreņiks <gim at fastmail dot fm>
pkgname=python-vk
pkgver=1.5
pkgrel=1
pkgdesc='A Python wrapper around the VK.com/VKontakte.ru API.'
arch=('any')
url="https://github.com/dimka665/vk"
license=('MIT')
depends=('python' 'python-requests')
makedepends=('python-setuptools')
source=("https://github.com/dimka665/vk/archive/${pkgver}.tar.gz")
sha256sums=('ff250c29414c61e21d041b0e264be78bdbe7a91a29562ce0aeec9c1660e548b6')

build() {
  cd "$srcdir/vk-$pkgver"
  python setup.py build
}

package() {
  cd "$srcdir/vk-$pkgver"
  python setup.py install --root=$pkgdir --optimize=1
}
# vim:set ts=2 sw=2 et:
