# Maintainer: Jean Lucas <jean@4ray.co>

pkgname=lynda-dl-git
pkgver=0.3+11+gbfa3fbe
pkgrel=1
pkgdesc='Tool to download courses from Lynda (git)'
arch=(any)
url=https://github.com/r0oth3x49/lynda-dl
license=(MIT)
depends=(python-requests
         python-six
         python-colorama
	 python-unidecode
         python-pyopenssl)
provides=(lynda-dl)
conflicts=(lynda-dl)
source=(git+$url)
sha512sums=('SKIP')

pkgver() {
  cd lynda-dl
  git describe --tags | sed 's/v//;s/-/+/g'
}

package() {
  cd lynda-dl
  mv lynda-dl.py lynda/lynda_dl.py
  python setup.py install --root="$pkgdir" --optimize=1
  install -Dm 644 LICENSE -t "$pkgdir"/usr/share/licenses/lynda-dl
}
