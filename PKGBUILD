# Maintainer: Donald Webster <fryfrog@gmail.com>
# Maintainer: Devin Buhl <devin.kray@gmail.com>
pkgname="radarr"
pkgver="0.2.0.2"
pkgrel=4
pkgdesc="Movie downloader for usenet and torrents."
arch=(any)
url="https://github.com/galli-leo/Radarr"
license=('GPL3')
depends=('mono' 'libmediainfo' 'sqlite')
optdepends=('sabnzbd: an NZB downloader'
            'nzbget: an NZB downloader'
            'transmission-cli: a torrent downloader (CLI and daemon version)'
            'transmission-gtk: a torrent downloader (GTK+ version)'
            'transmission-qt: a torrent downloader (Qt version)'
            'deluge: a torrent downloader')
install='radarr.install'
provides=('radarr')
source=("https://github.com/galli-leo/Radarr/releases/download/v0.2.0.2/Radarr.develop.${pkgver}.linux.tar.gz"
        "radarr.sh"
        "radarr.service")
noextract=()

sha512sums=('30f2fa9d52662a7ea0b09d98e700720c339f51c5e770c8cbda25c7b8351442cae21f0802524435f83a33aacabc818050533b024acdb1cb4bbf77252abba12fde'
            '17c0a54de94ab6e4523ab5f3f65bd40b592cc6723acaf123db8bbf0d2c6200e4b5877878c542fe849c09b9748ab8c8887cbd94365ba431cf71fc1256f24b43ec'
            '237a74e8ae8c968da33c44241f0b47fb3209b15ecc1962f45286adab466701d0c7be91cffc7e856951d14f1b72e565ad6fd97115bc1feb1c3bfd4f8c07f453fd')

package() {
    cd "$srcdir"

    install -d -m 755 "${pkgdir}/var/lib/radarr"

    msg2 "Install Radarr in /usr/lib"
    install -d -m 755 "${pkgdir}/usr/lib/radarr"
    cp -dpr --no-preserve=ownership "${srcdir}/Radarr/"* "${pkgdir}/usr/lib/radarr"

    msg2 "Fixing permissions in /usr/lib/radarr/"
    find "${pkgdir}/usr/lib/radarr" -type f -exec chmod 644 '{}' ';'

    msg2 "Install executable into /usr/bin"
    install -D -m755 "${srcdir}/radarr.sh" "${pkgdir}/usr/bin/radarr"

    msg2 "Install radarr.service"
    install -D -m 644 "${srcdir}/radarr.service" "${pkgdir}/usr/lib/systemd/system/radarr.service"
}
