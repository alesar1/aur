# Maintainer: mrxx <mrxx at cyberhome dot at>
# Contributor: speps <speps at aur dot archlinux dot org>

pkgname=exif-py
pkgver=2.2.0
pkgrel=3
pkgdesc="Easy to use Python2 module to extract Exif metadata from tiff and jpeg files."
arch=('any')
url="https://github.com/ianare/exif-py"
license=('BSD')
depends=('python2')
makedepends=('python2-setuptools')
conflicts=('exifread')
replaces=('exifread')
source=("$pkgname-$pkgver.tar.gz::https://github.com/ianare/exif-py/archive/$pkgver.tar.gz")
sha1sums=('eec3d5f355a210d78409ec91dee2b794e482410a')

build() {
  cd "$pkgname-$pkgver"
  python2 setup.py build
}

package() {
  cd "$pkgname-$pkgver"
  python2 setup.py install --root="$pkgdir/" --optimize=1 --skip-build
  install -Dm755 EXIF.py "$pkgdir/usr/lib/python2.7/site-packages/EXIF.py"
  install -Dm644 LICENSE.txt "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
