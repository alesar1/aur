# Maintainer: Philipp Claßen <philipp.classen@posteo.de>
pkgname=ghostery-dawn-bin
_vendorname=ghostery
pkgver=2022.3
_builddate=2022-03-22-2
pkgrel=1
pkgdesc="Privacy aware web browser from Ghostery (binary release)."
arch=('x86_64')
url="https://www.ghostery.com/dawn"
license=('MPL2')
provides=('ghostery-dawn')
conflicts=('ghostery-dawn')
depends=(dbus-glib
	 gtk2
	 gtk3
	 libxt
	 nss)
optional=('firejail')
install=install

source=("https://github.com/ghostery/user-agent-desktop/releases/download/${_builddate}/Ghostery-${pkgver}.en.linux.tar.gz"
	"https://raw.githubusercontent.com/ghostery/user-agent-desktop/master/LICENSE"
        "ghostery.profile")
sha256sums=('3d5475d373cc37be853daf70b241b3b017bafa310daea997edc0c3ac8305b81b'
            '1f256ecad192880510e84ad60474eab7589218784b9a50bc7ceee34c2b91f1d5'
            'dbdfb7e32bb874d6b0c67b10524508620e2137662b7f928750f41f0df926040f')

prepare() {
  cd $srcdir
  tar xzf Ghostery-${pkgver}.en.linux.tar.gz
}

package() {
  cd $srcdir

  install -D -m644 LICENSE ${pkgdir}/usr/share/licenses/${_vendorname}/LICENSE
  install -d -m755 ${pkgdir}/usr/lib
  cp -R Ghostery ${pkgdir}/usr/lib/${_vendorname}/

  install -D -m644 ghostery.profile ${pkgdir}/etc/firejail/ghostery.profile

  install -d -m755 ${pkgdir}/usr/bin
  printf '#!/bin/sh
exec /usr/lib/ghostery/Ghostery "$@"' > ${pkgdir}/usr/bin/ghostery
  chmod 755 ${pkgdir}/usr/bin/ghostery
}
