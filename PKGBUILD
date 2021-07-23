# Maintainer: Jonathon Fernyhough <jonathon_at_m2x.dev>

pkgname=hopper
_pkgname=hopperv4
pkgver=4.8.1
pkgrel=1
pkgdesc="Reverse engineering tool that lets you disassemble, decompile and debug your applications"
arch=(x86_64)
url="https://www.hopperapp.com/"
license=('Commercial')
depends=('hicolor-icon-theme' 'libbsd' 'libdispatch' 'qt5-base')
provides=("${_pkgname}")
conflicts=("${_pkgname}")
source=("https://d2ap6ypl1xbe4k.cloudfront.net/Hopper-v4-$pkgver-Linux.pkg.tar.xz"
        'LICENSE')
# sha1 on https://www.hopperapp.com/download.html
sha1sums=('54a45e00cb723ccce72c787001436cb42977573b'
          'c3f410d29524eb02a8bf3dc1b29aaeb82b1844e6')
changelog=ChangeLog

package() {
  # Copy package content
  cp -r "$srcdir"/opt "$pkgdir"/opt
  cp -r "$srcdir"/usr "$pkgdir"/usr

  # Move docs to /opt
  mv "$pkgdir"/usr/share/doc/hopperv4 "$pkgdir"/opt/hopper-v4/doc
  ln -s /opt/hopper-v4/doc "$pkgdir"/usr/share/doc/hopperv4

  # Remove launcher from Accessories
  sed -i '10s|Utility;||' "$pkgdir"/usr/share/applications/hopper-v4.desktop

  # Install license file
  # https://www.hopperapp.com/license_agreement.html @ 2017-08-14
  install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}
