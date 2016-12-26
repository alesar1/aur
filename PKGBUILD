# Maintainer: Mateusz Galazyn <carbolymer@gmail.com>
pkgname=python-influxdb
pkgver=4.0.0
pkgrel=1
pkgdesc="Python client for InfluxDB"
arch=('any')
url="https://github.com/influxdb/influxdb-python/"
license=('MIT')
depends=('python' 'python-requests>=1.0.3' 'python-dateutil>=2.0.0' 'python-six>=1.9.0' 'python-pytz')
makedepends=('python-setuptools')
optdepends=('influxdb')
options=(!emptydirs)
source=("https://github.com/influxdb/influxdb-python/archive/v$pkgver.tar.gz")
md5sums=('5fabd048e3b3dc92977f303ac30af470')

package() {
  cd "$srcdir/influxdb-python-$pkgver"
  python setup.py install --root="$pkgdir/" --optimize=1
}

# vim:set ts=2 sw=2 et:
