# Maintainer: Chris Icenhour <chris@randomlinux.com>

pkgname=python-freqtrade-git
pkgver=0.14.3.r10509.g4e5f8478
pkgrel=1
pkgdesc="Free, open source crypto trading bot"
url="https://github.com/freqtrade/freqtrade"
arch=('any')
license=('GPLv3')
provides=('python-freqtrade')
makedepends=('python' 'python-setuptools' 'git')
depends=('python-sqlalchemy' 'python-cachetools'
         'python-arrow' 'python-requests' 'ta-lib' 'python-pip'
         'python-urllib3' 'python-wrapt' 'python-pandas' 'python-scikit-learn'
         'python-scipy' 'python-jsonschema' 'python-numpy' 'python-pytest'
         'python-pytest-mock' 'python-pytest-cov' 'python-networkx'
         'python-telegram-bot' 'python-tabulate' 'python-hyperopt' 'python-ta-lib'
         'python-bittrex' 'python-questionary' 'python-jinja' 'python-sdnotify' 'python-rapidjson' 
         'python-hyperopt' 'python-coinmarketcap' 'python-ccxt' 'python-certifi' 'python-aiohttp'
         'python-pytables' )
         
source=("$pkgname"::"git://github.com/freqtrade/freqtrade.git#branch=develop")
sha256sums=('SKIP')

pkgver() {
  cd "$pkgname"
  git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

package() {
  cd "$srcdir/$pkgname"
  #pip install --prefix=/usr --root="hyperopt" hyperopt
  python setup.py build
  python setup.py install --prefix=/usr --root="$pkgdir"


  install -D -m644 LICENSE \
	  "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
