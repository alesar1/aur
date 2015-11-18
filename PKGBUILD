# Maintainer: Perttu Luukko <"perttu.luukko" followed by "@iki.fi">
# Contributor: Jaroslav Lichtblau <dragonlord@aur.archlinux.org>
# Contributor: Sergey Mamonov <mrqwer88 (at) gmail (dot) com>
# Contributor: Feirlane

# This is a PKGBUILD for ADOM prereleases restricted only to Indiegogo campaign donors.
# Please fill in the username and password you received by email for the download link to work.

_username=
_password=

DLAGENTS=("http::/usr/bin/wget --user ${_username} --password ${_password} %u")

pkgname=adom-restricted
pkgver=61
pkgrel=1
pkgdesc="A roguelike game with a quest-centric, plot driven structure"
arch=("i686" "x86_64" "armv6h")
conflicts=("adom")
provides=("adom")
depends=("ncurses")
url="http://www.adom.de/"
license=('custom: "adom"')

_source_url="http://www.ancardia.com/secure/download/current"
source=(LICENSE)
source_i686=(${_source_url}/adom_linux_debian_32_r${pkgver}.tar.gz)
source_x86_64=(${_source_url}/adom_linux_debian_64_r${pkgver}.tar.gz)
source_armv6h=(${_source_url}/adom_linux_arm_r${pkgver}.tar.gz)

sha1sums=("51d28fe3f0420cd354113fd7ceb2a1a7abf1b069")
sha1sums_i686=("6668db8d55853522f9cc7392a366f6e368ee0de4")
sha1sums_x86_64=("15729c479daeb32efcde3508ccc2d15201424e44")
sha1sums_armv6h=("dc70ef44f0ee920cc8d45d99e336293220c00e90")

package() {
  cd ${srcdir}/adom

  install -m755 -D adom ${pkgdir}/usr/bin/adom
  install -m644 -D ${srcdir}/LICENSE ${pkgdir}/usr/share/licenses/adom-restricted/LICENSE
}
