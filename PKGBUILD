# Maintainer: David McInnis <dave@dave3.xyz>
# Maintainer: Jean Lucas <jean@4ray.co>
# Contributor: McNoggins <gagnon88 at Gmail dot com>

pkgname=python-imread
pkgver=0.7.1
pkgrel=1
pkgdesc='mahotas-imread: A library to read & write to numpy arrays'
arch=(any)
url='http://luispedro.org/software/imread/'
license=(MIT)
depends=(python libpng libtiff libwebp python-numpy)
makedepends=(python-setuptools)
provides=(python-imread)
source=(https://pypi.python.org/packages/4e/7e/52603151a6746a229f80b3d22a08e468dce9bcf723728a3b99d050372e86/imread-$pkgver.tar.gz)
sha256sums=(c343b546ab54acdb50dbe69d6793d64ead3ba6d585022f5a7ad4687b7f3db79b)

package() {
  cd $srcdir/imread-$pkgver
  python setup.py install --root=$pkgdir --optimize=1
}

