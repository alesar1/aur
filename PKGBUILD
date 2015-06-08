# Contributor: Cyberpunk <aur_linuxero@outlook.com>
# Maintainer: Cyberpunk <aur_linuxero@outlook.com>

_lang=br
_debver=38.0.1
_debrel=5
_debrepo=http://ftp.debian.org/debian/pool/main/i

pkgname=iceweasel-i18n-br
pkgver=$_debver.deb$_debrel
pkgrel=1
pkgdesc="Breton language package for Iceweasel"
arch=('any')
url="http://www.mozilla.com/"
license=('MPL' 'GPL' 'LGPL')
depends=("iceweasel>=$_debver") 
source=("${_debrepo}/iceweasel/iceweasel-l10n-${_lang}_${_debver}-${_debrel}_all.deb")

package() {
  msg2 "Installing Language Pack..."
  tar Jxvf "${srcdir}"/data.tar.xz -C "${pkgdir}"/
  msg2 "Cleaning unwanted files..."
  rm -rv "${pkgdir}"/usr/share/
}
sha256sums=('a93b3f0d9cae0b4ccb5c37d4b8be35d30b23a47dd1f67b2bcdd976a58222ba98')
