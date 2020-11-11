# Maintainer: buckket <felix@buckket.org>

pkgname=zigbee2mqtt
pkgver=1.16.1
pkgrel=1
pkgdesc='A Zigbee to MQTT bridge'
arch=('x86_64' 'arm' 'armv6h' 'armv7h' 'aarch64')
url='https://www.zigbee2mqtt.io'
license=('GPL3')
depends=('nodejs>=10.0' 'npm')
conflicts=('zigbee2mqtt')
provides=('zigbee2mqtt')
optdepends=(
  'cc-tool: To flash Texas Instruments CC2531 debugger'
  'mosquitto: MQTT broker')
source=("https://github.com/Koenkk/${pkgname}/archive/${pkgver}.tar.gz"
  'zigbee2mqtt.service'
  'zigbee2mqtt.sysusers'
  'zigbee2mqtt.tmpfiles')
sha256sums=('e4313c798f10638e728da75388aaa3fad89c9f6f73b2ccb7a042611d8ed64722'
            '831ce970669d29ba2db208bec8245c97e80540981dd23276bba10a9b7b699e1b'
            'bf3e49cfb86df460b4db16b280839dc7f0c73fbfd29ea6d86040f711606abf65'
            '5861e6e25350b32fc81cf1a43802470e8ff033a019cba4d28b3bd48c6cb5ddf6')
backup=('opt/zigbee2mqtt/data/configuration.yaml')
  

package() {
  cd "${pkgname}-${pkgver}"
  npm install --cache "${srcdir}/npm-cache" --user root
  install -d -m 650 "${pkgdir}/opt/${pkgname}"
  cp -dpr --no-preserve=ownership "${srcdir}/${pkgname}-${pkgver}/." "${pkgdir}/opt/${pkgname}"
  install -Dm644 "${srcdir}/${pkgname}.service" "${pkgdir}/usr/lib/systemd/system/${pkgname}.service"
  install -Dm644 "${srcdir}/${pkgname}.sysusers" "${pkgdir}/usr/lib/sysusers.d/${pkgname}.conf"
  install -Dm644 "${srcdir}/${pkgname}.tmpfiles" "${pkgdir}/usr/lib/tmpfiles.d/${pkgname}.conf"
}

