# Maintainer: Donald Webster <fryfrog@gmail.com>

pkgname=varken
pkgver=1.7.0
pkgrel=1
pkgdesc="Manage and download subtitles for Sonarr and Radarr."
arch=('any')
url="https://github.com/morpheus65535/varken"
license=('GPL3')
depends=('python'
         'python-requests'
         'python-geoip2'
         'python-influxdb'
         'python-schedule'
         'python-distro'
         'python-urllib3')

optdepend=('grafana: display of pretty graphs'
           'influxdb: storage of data')


source=("varken-${pkgver}.tar.gz::https://github.com/Boerderij/Varken/archive/${pkgver}.tar.gz"
        'varken.service'
        'varken.sysusers'
        'varken.tmpfiles')

sha256sums=('c51d8439337fe24f75a94b5040fc707f4573517fa014cdc494066cee08ca5171'
            '87557de0d204223d5fa74c3d8da79dbe13be739e57d20c027291f1a487c34bb6'
            'ba43aebc95499e93a03d7abf1e1671d72d734725e8a0f2c35ccce3f5ec9b72e2'
            '75805db8a147673b0b3ea11fe46cc9e8b96b76e7877bc17878d4fc6d57ae014c')

package() {
  install -d -m 755 "${pkgdir}/usr/lib/varken"
  install -d -m 755 "${pkgdir}/var/lib/varken"

  cp -dpr --no-preserve=ownership "${srcdir}/Varken-${pkgver}/data/varken.example.ini" "${pkgdir}/var/lib/varken"
  cp -dpr --no-preserve=ownership "${srcdir}/Varken-${pkgver}/"* "${pkgdir}/usr/lib/varken"

  install -D -m 644 "${srcdir}/varken.service" "${pkgdir}/usr/lib/systemd/system/varken.service"
  install -D -m 644 "${srcdir}/varken.sysusers" "${pkgdir}/usr/lib/sysusers.d/varken.conf"
  install -D -m 644 "${srcdir}/varken.tmpfiles" "${pkgdir}/usr/lib/tmpfiles.d/varken.conf"
}
