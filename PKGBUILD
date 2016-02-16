# Based on PKGBUILD: Cyberpunk <apocalipsisfull-2011@outlook.com>
# Maintainer: Pekman

_debname=iceweasel-l10n-pt-br
_lang=pt-br
_debver=38.6.1esr
_debrel=1~deb8u1
_debrepo=http://security.debian.org/debian-security/pool/updates/main/i/

pkgname=iceweasel-stable-bin-i18n-pt-br
pkgver=$_debver.deb$_debrel
pkgrel=1
pkgdesc="Portuguese Brazilian (pt_BR) language package for Iceweasel Stable used in Debian Jessie"
arch=('any')
url="https://packages.debian.org/jessie/iceweasel-l10n-pt-br"
license=('MPL' 'GPL' 'LGPL')
provides=("$_debname"="$_debver")
depends=("iceweasel>=$_debver")
source=("${_debrepo}/iceweasel/iceweasel-l10n-${_lang}_${_debver}-${_debrel}_all.deb")
sha256sums=('e976daec8c0ab813e152f63ed4b6124d3cd527c786dbb89e6f3259b800a64792')

package() {
  msg2 "Installing Language Pack..."
  tar Jxvf "${srcdir}"/data.tar.xz -C "${pkgdir}"/
  msg2 "Cleaning unwanted files..."
  rm -rv "${pkgdir}"/usr/share/
}


