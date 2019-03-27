# Maintainer: Francois Menning <f.menning@pm.me>
# Contributor: Denis A. Altoé Falqueto <denisfalqueto@gmail.com>

pkgname=python-pychromecast-git
pkgver=360.0a3ba3f
pkgrel=1
pkgdesc="Library for Python 3 to communicate with the Google Chromecast."
arch=('any')
url="https://github.com/balloob/pychromecast"
license=('MIT')
depends=('python' 'python-requests' 'python-protobuf' 'python-zeroconf')
makedepends=('git' 'python-setuptools')
provides=('python-pychromecast')
conflicts=('python-pychromecast')
options=(!emptydirs)
source=('git+https://github.com/balloob/pychromecast.git')
sha256sums=('SKIP')

pkgver() {
  cd "$srcdir/pychromecast"
  echo $(git rev-list --count master).$(git rev-parse --short master)
}

package() {
  cd "$srcdir/pychromecast"
  python setup.py install --root="$pkgdir/" --optimize=1
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

# vim:set ts=2 sw=2 et:
