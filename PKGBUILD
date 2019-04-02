# Maintainer: Federico Giuliani <federico.giuliani86 at gmail dot com>

pkgname=airsonic
pkgver=10.2.1
pkgrel=3
pkgdesc="A free, web-based media streamer and jukebox."
arch=('any')
url="https://github.com/Airsonic/airsonic/"
license=('GPL3')
depends=('java-runtime-headless')
backup=('etc/airsonic/airsonic.conf')
noextract=(airsonic.war)
source=(https://github.com/airsonic/airsonic/releases/download/v${pkgver}/airsonic.war
        https://raw.githubusercontent.com/airsonic/airsonic/master/contrib/airsonic-systemd-env
        "${pkgname}.service"
        "${pkgname}.sysusers"
        "${pkgname}.tmpfiles")

package() {
  cd ${srcdir}
  mkdir -p ${pkgdir}/var/lib/airsonic
  mkdir -p ${pkgdir}/var/lib/airsonic/playlists
  mkdir -p ${pkgdir}/usr/lib/systemd/system
  mkdir -p ${pkgdir}/etc/airsonic
  cp airsonic.war ${pkgdir}/var/lib/airsonic

  sed -i 's/\/var\/airsonic/\/var\/lib\/airsonic/' airsonic-systemd-env  
  cp airsonic-systemd-env ${pkgdir}/etc/airsonic/airsonic.conf
  
  install -Dm644 "${srcdir}/${pkgname}.service" "${pkgdir}/usr/lib/systemd/system/${pkgname}.service"
  install -Dm644 "${srcdir}/${pkgname}.sysusers" "${pkgdir}/usr/lib/sysusers.d/${pkgname}.conf"
  install -Dm644 "${srcdir}/${pkgname}.tmpfiles" "${pkgdir}/usr/lib/tmpfiles.d/${pkgname}.conf"
  
}

sha256sums=('9bd4e9651df1a15278fb6414d011bd5a45c037857e84eaeb1375b26c717a5ebe'
            '059a43fe100d95aaaae8091d1c312f4d3a2a2b4edc1969358dd7be35f6525930'
            '8178ae5396921739176e33ae8693d0fe5fb43709fc669e38cc87ab0d0e8bf2fb'
            '25af0b92b247df928db5ac8fec3fb4fa2cdc717e649729d5e0c059a5b81e058e'
            '952c15c8c6b53b9c63a96eb6b2402eae42bde56dc9c6c60484cf039a03a82963')
