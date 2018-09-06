# Contributor: Chris Down <chris@chrisdown.name>
# Contributor: Yung Wood <yung at yung.com.au>
# Contributor: Joshua Stiefer <facedelajunk at gmail.com>
# Contributor: Michael Seiwald <michael at mseiwald.at>
# Contributor: Techlive Zheng <techlivezheng at gmail.com>
# Contributor: ava1ar <mail(at)ava1ar(dot)me>
# Maintainer: Albert Westra <odsseywestra(at)gmail(dot)com>

pkgname=lastpass-pocket
pkgver=4.1.20
pkgrel=1
pkgdesc="Backup and offline access for LastPass"
arch=('x86_64')
url="https://lastpass.com"
license=('custom:LastPass')
options=('!strip')
depends=('ca-certificates' 'openssl' 'libldap' 'libidn' 'gtk2' 'libpng12' 'librtmp0')
source=('lastpass.desktop' 'lastpass.png')
sha1sums=('4e8258a93d2a72c86abc916fee1faab0d34fc8a7'
          '043994fdbb2af48eadb17e2ffe48a9a1652c297b')
sha1sums_x86_64=('893ec51711f1030ed575b895fef145982124496d')
source_x86_64=("pocket_x64_${pkgver}.tar.bz2::https://download.cloud.lastpass.com/pocket/pocket_x64.tar.bz2")

package() {
  [ "$CARCH" == x86_64 ] && _pocket_bin=pocket_x64
  install -Dm755 ${_pocket_bin} "${pkgdir}/usr/bin/lastpass"
  install -Dm644 lastpass.png "${pkgdir}/usr/share/icons/lastpass.png"
  install -Dm644 lastpass.desktop "${pkgdir}/usr/share/applications/lastpass.desktop"
}
