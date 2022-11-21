# Maintainer: Danny Waser <danny@waser.tech>
# Contributor: Felix Yan <felixonmars@archlinux.org>
# Contributor: Daniel Wallace <danielwallace at gtmanfred dot com>
# Contributor: Limao Luo <luolimao+AUR@gmail.com>

pkgname=python38-jsonpatch
pkgver=1.32
pkgrel=3
pkgdesc="An implementation of the JSON Patch format"
arch=("any")
url="https://github.com/stefankoegl/python-json-patch"
license=("BSD")
depends=("python38-jsonpointer")
makedepends=("python38-setuptools" "python38-pypandoc")
checkdepends=('python38-coverage')
source=("$pkgname-$pkgver.tar.gz::https://github.com/stefankoegl/python-json-patch/archive/v$pkgver.tar.gz")
sha512sums=('4e2978555dd506e09553014d426c4e3a6c6d5c865428f11450952704007c8a0b2060b945cf1fa33a128151427e1c66919891466e095e96fff4316304f0b3ad1d')

build() {
  cd python-json-patch-$pkgver
  python3.8 setup.py build
}

check() {
  cd python-json-patch-$pkgver
  coverage run --source=jsonpatch tests.py
}

package_python38-jsonpatch() {
  cd python-json-patch-$pkgver

  install -Dm644 COPYING "$pkgdir"/usr/share/licenses/$pkgname/COPYING
  python3.8 setup.py install --prefix=/usr --root="$pkgdir"
}
