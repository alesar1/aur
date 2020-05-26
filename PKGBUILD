# Maintainer: Steven Seifried <gitlab@canox.net>
# Contributor: Steven Seifried <gitlab@canox.net>
pkgname=tuxedo-keyboard
pkgver=2.0.4
pkgrel=1
pkgdesc="Keyboard Backlight Driver from TUXEDO Computers"
url="https://github.com/tuxedocomputers/tuxedo-keyboard"
license=("GPL")
arch=('x86_64') 
makedepends=('git')
depends=('dkms')
conflicts=('tuxedo-keyboard-dkms' 'tuxedo-wmi' 'tuxedo-wmi-dkms')
optdepends=('linux-headers: build modules against Arch kernel'
            'linux-lts-headers: build modules against LTS kernel'
            'linux-zen-headers: build modules against ZEN kernel')
replaces=('tuxedo-keyboard-dkms' 'tuxedo-wmi' 'tuxedo-wmi-dkms')
backup=(etc/modprobe.d/tuxedo_keyboard.conf)
source=('https://github.com/tuxedocomputers/tuxedo-keyboard/archive/v2.0.4.tar.gz' 'tuxedokeyboard.conf')
sha256sums=('6e4d9e21aa50731b318a8c56b2aaa3b1c8bffd043648d59df45828dcfba74ccd'
            'd22aadf76a400f38ddee7ce2fd7f8b14694bf1d402bfbb99e65133d122ccb0f8')
sha512sums=('83f14fe62eff9027dad4905e3c1e5fece04b5e08511b2ed666b49342d5d5908b859468f8d7835e9883c79530de21725903615eaa70842f453226b7db93c1ee7f'
            '8aef78240aacf4a5c15cfb648400750a17db3203d230d6a1f8a84b1db71f0bd0d65251690f6290d8707b771cf74c6f008b82c65b00220e8d3fa70153be65ade6')
package() {
  tar -vxzf "v${pkgver}.tar.gz" 
  mkdir -p "${pkgdir}/usr/src/${pkgname}-${pkgver}"
  cp -r "${srcdir}/${pkgname}-${pkgver}"/* "${pkgdir}/usr/src/${pkgname}-${pkgver}"
  install -D "${srcdir}/${pkgname}-${pkgver}/dkms.conf" "${pkgdir}/usr/src/${pkgname}-${pkgver}/dkms.conf"
  echo "Copy tuxedo_keyboard.conf to /etc/modprobe.d/tuxedo_keyboard.conf"
  install -Dm644 "${srcdir}/${pkgname}-${pkgver}/tuxedo_keyboard.conf" "${pkgdir}/etc/modprobe.d/tuxedo_keyboard.conf"
  install -Dm644 ${srcdir}/tuxedokeyboard.conf ${pkgdir}/usr/lib/modules-load.d/${pkgname}.conf
}
