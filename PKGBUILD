# Maintainer: C0rn3j <spleefer90@gmail.com>
# Contributor: Celogeek <private-4zokpdq6@mrhyde.xyz>

_basename=jitsi
_pkgname=videobridge
_version=2.1+607+g153f7e4e
_url=https://download.jitsi.org/stable/jitsi-videobridge2_2.1-607-g153f7e4e-1_all.deb

_pkgbase=${_basename}-${_pkgname}
_debname=${_basename}-${_pkgname}2
pkgname=${_pkgbase}-bin
pkgver=${_version}
pkgrel=1
pkgdesc="Jitsi Meet Videobridge binary"
arch=('any')
url="https://jitsi.org/jitsi-meet/"
license=('Apache')
depends=("java-runtime" "bash")
optdepends=("prosody")
makedepends=('tar' 'unzip')
options=('!strip')
backup=(
  "etc/${_pkgbase}/config"
  "etc/${_pkgbase}/logging.properties"
  "etc/${_pkgbase}/callstats-java-sdk.properties"
  "etc/${_pkgbase}/sip-communicator.properties"
  "etc/${_pkgbase}/jvb.conf"
)
source=(
        "$_url"
        "config"
        "sip-communicator.properties"
        "service"
        "sysusers.conf"
        "tmpfiles.conf"
	"jitsi.install"
)
provides=(${_pkgbase})
conflicts=(${_pkgbase})
install=jitsi.install

build() {
        rm -rf ${_pkgbase}
        mkdir ${_pkgbase}
        tar xJf data.tar.xz -C ${_pkgbase}
}

package() {
        cd "$srcdir/${_pkgbase}"

        DESTDIR="${pkgdir}/usr/lib/${_pkgbase}"
        CONFDIR="${pkgdir}/etc/${_pkgbase}"

        install -dm755 "${DESTDIR}"
        cp -R usr/share/jitsi-videobridge/* "${DESTDIR}"
        rm "${DESTDIR}"/{collect-dump-logs.sh,graceful_shutdown.sh}

        chown -R root:root "${DESTDIR}"

        install -dm700 "${CONFDIR}"
        install -Dm600 -t "${CONFDIR}" etc/jitsi/videobridge/*
        install -Dm644 "etc/sysctl.d/20-jvb-udp-buffers.conf" "${pkgdir}/etc/sysctl.d/${_pkgbase}.conf"

        cd "$srcdir"
        unzip "$srcdir/${_pkgbase}/usr/share/jitsi-videobridge/jitsi-videobridge.jar" reference.conf
        mv reference.conf jvb.conf
        install -Dm600 -t "${CONFDIR}" "config" "sip-communicator.properties" "jvb.conf"
        install -Dm644 "service" "${pkgdir}/usr/lib/systemd/system/${_pkgbase}.service"
        install -Dm644 "sysusers.conf" "${pkgdir}/usr/lib/sysusers.d/${_pkgbase}.conf"
        install -Dm644 "tmpfiles.conf" "${pkgdir}/usr/lib/tmpfiles.d/${_pkgbase}.conf"
}
sha256sums=('28488fdd02fe64a86d8fbcdb4f24d6236bb478de3c6af018cc9ff7d0ef1477a3'
            'ecf266d0fe026ced8121a0491ee560fed4e9e586ff510c8e9b2f21ce505f0a2d'
            'cc9fbf77497bce3c9673b2d144928f11cdd0c0823940c2b60c8369a2f086b9b7'
            '5d78e8eec07c6aae84a1f1c0922f951217741ccc6f1a50ed7ef966c665bbf291'
            '998cbc64def56ab98080ff7150dd0913a5e10325cd2b038cf3db14baf8cb19fc'
            '8a8f2fd5d02f196dff0ce7ceb75e45d19028a9f22dc9e55653ab17cce29051af'
            '59c2b2068205d6972c4b25bf1bbed9aaf08ff395b28309888cfe9b386dc29fa0')
