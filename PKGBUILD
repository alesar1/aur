# Maintainer: Jack L. Frost <fbt@fleshless.org>
# vim: ft=sh syn=sh et
# % Trigger: 1434923067 %

pkgdesc='A dummy package to provide systemd'
pkgname='systemd-dummy'
epoch=1
pkgver=1
pkgrel=6
arch=( 'any' )
url="http://www.freedesktop.org/wiki/Software/systemd"
license=('GPL2' 'LGPL2.1' 'MIT')

provides=( 'systemd' )

package() {
  # systemd-tmfiles stub
  mkdir -pm755 "${pkgdir}/usr/bin"
  ln -s /usr/bin/true "${pkgdir}/usr/bin/systemd-tmpfiles"
}
