# Maintainer: twa022 <twa022 at gmail dot com>

_pkgname=UbuntuIndicatorWeather
pkgname=simple-weather-indicator
pkgver=1.0
pkgrel=1
pkgdesc='A simple weather indicator'
arch=('i686' 'x86_64')
url='https://github.com/kasramp/UbuntuIndicatorWeather'
license=('GPL3')
depends=('libappindicator-gtk3' 'libnotify' 'python2-retrying' 'python2-gobject')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/kasramp/UbuntuIndicatorWeather/archive/v${pkgver}.tar.gz")
sha256sums=('983dfb9821d4a3b2350fb062578350f54cc81485f985dad7364d96fb4df99f0e')

prepare() {
  cd "${_pkgname}-${pkgver}"

  # Don't install to ubuntu- directory
  find . -type f -exec sed -i 's:ubuntu-indicator-weather:simple-weather-indicator:g' '{}' \;
  # python2 fix
  sed -i 's:exec python:&2:' indicator-weather
}

package() {
  cd "${_pkgname}-${pkgver}"
  while read file dest ; do
    [ ! -d "${pkgdir}/${dest}" ] && mkdir -p "${pkgdir}/${dest}"
    install -m644 "${file}" "${pkgdir}/${dest}"
  done < debian/install
  chmod 755 "${pkgdir}"/usr/lib/simple-weather-indicator/indicator-weather
  mkdir -p "${pkgdir}"/usr/bin
  ln -s /usr/lib/simple-weather-indicator/indicator-weather "${pkgdir}"/usr/bin/indicator-weather
}
