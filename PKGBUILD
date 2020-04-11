_pkgname=jicofo
pkgname=${_pkgname}-bin
pkgver=1.0.544
pkgrel=1
_debver=1.0-544-1
pkgdesc="JItsi Meet COnference FOcus"
arch=('any')
url="https://jitsi.org/jitsi-meet/"
license=('Apache')
depends=('java-runtime-headless')
conflicts=(${_pkgname})
provides=(${_pkgname})
makedepends=('tar')
options=('!strip')
backup=('etc/jitsi/jicofo/config'
        'etc/jitsi/jicofo/sip-communicator.properties'
        'etc/jitsi/jicofo/logging.properties')

source=("https://download.jitsi.org/stable/${_pkgname}_${_debver}_all.deb"
        "${_pkgname}.service"
        'sysusers.conf'
        'tmpfiles.conf'
        'config'
        'sip-communicator.properties')
sha256sums=('34944ee997551c6cee68bf5933c256e29eef77e3d884716a96e0d6ab9879baea'
            '7c37d43d586c0cb0f868c5de967bbbeed1c6497e93f434993347cbc07abf5c6f'
            '0681e97ca1e06d8ea7bdec0a874c6fc7a6ea84628923005130cd444547a1b440'
            '1d19c303780f4640bc0cae6f40d8203b119bb81b74f50d61dbe72c548fa37372'
            'b36f987ce17388260fd6f6bcfb8372bf1aa1458959a996a44d073182414ba298'
            '64e30304bf8188240c1560f215b74b04bdbf06a67b1204d4c000e829f0a3eadf')

package() {
  cd "${srcdir}"
  tar -xJvf data.tar.xz -C "${pkgdir}"

  rm -r "${pkgdir}/etc/init.d"
  rm -r "${pkgdir}/etc/logrotate.d"
  rm -r "${pkgdir}/usr/share/doc"

  sed -i 's/-Xmx[^ ]*//' "${pkgdir}/usr/share/jicofo/jicofo.sh"

  install -Dm644 "${_pkgname}.service" "${pkgdir}/usr/lib/systemd/system/${_pkgname}.service"
  install -Dm644 'sysusers.conf' "${pkgdir}/usr/lib/sysusers.d/${_pkgname}.conf"
  install -Dm644 'tmpfiles.conf' "${pkgdir}/usr/lib/tmpfiles.d/${_pkgname}.conf"
  install -Dm644 'config' "${pkgdir}/etc/jitsi/jicofo/config"
  install -Dm644 'sip-communicator.properties' "${pkgdir}/etc/jitsi/jicofo/sip-communicator.properties"
}

# vim: set ts=2 sw=2 et:
