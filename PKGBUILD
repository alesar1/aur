# Maintainer: fryfrog@gmail.com

pkgname=readsb-git
_gitname=readsb
pkgver=3.8.1.r8.gf98e3a1
pkgrel=1
pkgdesc="Readsb is a Mode-S/ADSB/TIS decoder for RTLSDR, BladeRF, Modes-Beast and GNS5894 devices."
arch=('x86_64' 'armv6h' 'armv7h' 'aarch64')
url="https://github.com/Mictronics/readsb"
license=('GPL3')
depends=('bladerf' 'libiio' 'libad9361' 'rtl-sdr')
provides=('readsb')
conflicts=('readsb')
makedepends=('git')
backup=('etc/default/readsb')

source=('readsb::git+git://github.com/Mictronics/readsb'
        'readsb.default'
        'readsb.sysusers'
	'readsb.service')

sha256sums=('SKIP'
            '1b6721ee262fdc04f9009a793eca96b81127145b4314e21b3ad468c504c1c9d6'
            '3da99128f5a89aef6f9748f1e09f0120940f123e80c007e7d5ac2d0571740a05'
            'da7b799553bf6098573a9a03fce4baaf1ef20f668a7a4772d4c1bd62aaf08736')

pkgver() {
  cd "${srcdir}/${_gitname}"
  git describe --long --tags --match=v* | sed 's/dev.//g' | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "${srcdir}/${_gitname}"
  make BLADERF=yes RTLSDR=yes PLUTOSDR=yes
}

package() {
  install -D -m 755 "${srcdir}/${_gitname}/readsb" "${pkgdir}/usr/bin/readsb"
  install -D -m 755 "${srcdir}/${_gitname}/viewadsb" "${pkgdir}/usr/bin/viewadsb"
  install -D -m 644 readsb.default "${pkgdir}/etc/default/readsb"
  install -D -m 644 readsb.sysusers "${pkgdir}/usr/lib/sysusers.d/readsb.conf"
  install -D -m 644 readsb.service "${pkgdir}/usr/lib/systemd/system/readsb.service"
}
