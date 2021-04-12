# Maintainer: eomanis at web dot de

pkgname='pulse-autoconf'
_pkgverUpstream="1.4.1"
pkgver="${_pkgverUpstream//-/.}"
pkgrel=1
pkgdesc="PulseAudio server dynamic configuration daemon"
arch=('any')
url='https://eomanis.duckdns.org/permshare/pulse-autoconf/'
license=('GPL3')
depends=('bash' 'coreutils' 'findutils' 'grep' 'libpulse' 'sed' 'util-linux')
source=("https://eomanis.duckdns.org/permshare/pulse-autoconf/pulse-autoconf-${_pkgverUpstream}.tar.gz")
sha384sums=('6c4ab6803e29a8738dc020f2b4053e86dcf6b52c9915b78d947bc2ca427dabbc33398c8f33bb68425beb9c2503905d3e')

package() {
    local srcRootDir="${srcdir}/${pkgname}-${_pkgverUpstream}"

    # Place the main bash script into /usr/bin
    mkdir -p "${pkgdir}/usr/bin"
    cd "${pkgdir}/usr/bin"
    cp -t . "${srcRootDir}/pulse-autoconf"
    chmod u=rwx,go=rx "pulse-autoconf"

    # Place the Desktop Entry file into /usr/share/applications
    mkdir -p "${pkgdir}/usr/share/applications"
    cd "${pkgdir}/usr/share/applications"
    cp -t . "${srcRootDir}/pulse-autoconf.desktop"
    chmod u=rw,go=r "pulse-autoconf.desktop"

    # Place the systemd unit file into /usr/lib/systemd/user
    mkdir -p "${pkgdir}/usr/lib/systemd/user"
    cd "${pkgdir}/usr/lib/systemd/user"
    cp -t . "${srcRootDir}/systemd/pulse-autoconf.service"
    chmod u=rw,go=r "pulse-autoconf.service"
}
