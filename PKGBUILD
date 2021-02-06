# Maintainer: Benjamin Görler <ben at greenflare dot io>


_pkgname=greenflare
pkgname=greenflare
pkgver=0.98
pkgrel=1
pkgdesc='A light weight SEO web crawler and analysis tool'
arch=('any')
url='https://greenflare.io'
license=('GPLv3')
depends=('python' 'tcl' 'tk' 'python-lxml' 'python-requests' 'python-cssselect' 'python-pillow' 'python-packaging' 'python-ua-parser')
optdepends=('python-ttkthemes: modern gui theme support')
makedepends=('python-setuptools')
conflicts=("$pkgname-git")
source=("$pkgname-$pkgver.tar.gz::https://github.com/beb7/gflare-tk/archive/$pkgver.tar.gz")

build() {
  cd gflare-tk-$pkgver
  python setup.py build
}

package() {
  cd gflare-tk-$pkgver
  python setup.py install --root="$pkgdir" --skip-build --optimize=1
  install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname"
}

sha256sums=('630812251581db133ae7dafb92f57bb8dcc0c8f9c88c1e38d01c4120491ecfed')
