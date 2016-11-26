# Maintainer: IanDury

pkgname=domoticz
pkgver=3.5877
pkgrel=1
pkgdesc="Web based home automation"
arch=('x86_64' 'arm' 'armv6h' 'armv7h')
url="http://www.domoticz.com"
license=('GPL')
depends=('openzwave-git' 'libusb-compat' 'curl' 'sqlite' 'boost-libs')
conflicts=('domoticz-svn' 'domoticz-git' 'domoticz-beta')
install='domoticz-beta.install'
case $CARCH in
  armv8*)
    _target_arch=aarch64
    ;;
  arm*)
    _target_arch=armv7l
    ;;
  *)
    _target_arch=$CARCH
    ;;
esac

source=("https://releases.domoticz.com/releases/release/domoticz_linux_${_target_arch}.tgz"
        "https://releases.domoticz.com/releases/release/history_linux_${_target_arch}.txt"
        'domoticz.service')
sha256sums=('SKIP' 'SKIP'
            '8627b3a82db83a0d94c830c007c09ffd38366505fced9c724a7c29414837f3ad')

pkgver() {
  echo "$(grep ^Version history_linux_${_target_arch}.txt | head -1 | cut -d' ' -f2)"
}

package() {
  mkdir -p  "${pkgdir}/opt/domoticz/"
  cp -R Config domoticz History.txt License.txt scripts server_cert.pem www domoticz.sh history_linux_${_target_arch}.txt "${pkgdir}/opt/domoticz/"
  mkdir -p "${pkgdir}/usr/lib/systemd/system"
  cp ../domoticz.service "${pkgdir}/usr/lib/systemd/system/"
  chown -R http:http "${pkgdir}/opt/domoticz"
}
