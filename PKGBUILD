# Maintainer: razer <razer[at]neuf[dot]fr>
pkgname=python-adafruit_dht
pkgver=1.3.2
pkgrel=1
pkgdesc="Python library to read the DHT series of humidity and temperature sensors on a Raspberry Pi or Beaglebone Black."
url="https://github.com/adafruit/Adafruit_Python_DHT"
arch=('armv6h' 'armv7h')
license=('GPLv3')
depends=('python' 'git')
optdepends=()
makedepends=()
conflicts=()
replaces=()
backup=()
install=()
source=("git://github.com/adafruit/Adafruit_Python_DHT")
md5sums=('SKIP')

package() {
  cd "${srcdir}/Adafruit_Python_DHT"
  if [ "$(grep AM33 /proc/cpuinfo)" = "" ]; then
    python setup.py install --force-pi2 --root="$pkgdir/" --optimize=1
  else
    python setup.py install --force-bbb --root="$pkgdir/" --optimize=1
  fi
}

# vim:set ts=2 sw=2 et:
