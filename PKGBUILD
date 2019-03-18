# Maintainer: Peter Mattern <pmattern at arcor dot de>

pkgname=meteo-qt
pkgver=1.0.0
pkgrel=1
pkgdesc='System tray application for weather status information'
arch=('any')
url='https://github.com/dglent/meteo-qt'
license=('GPL3')
depends=('libxkbcommon-x11' 'python-lxml' 'python-pyqt5' 'python-sip' 'python-urllib3')
makedepends=('python' 'qt5-tools')
source=("$pkgname-$pkgver.tar.gz::https://github.com/dglent/meteo-qt/archive/v${pkgver}.tar.gz")
sha256sums=('67e634261de77fbc3c227d0a765d08493c1d303a70a7e654ab12a6df2c74aca8')

package() {
  cd $pkgname-$pkgver
  python setup.py install --root $pkgdir
}
