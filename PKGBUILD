# Maintainer: superlex

_lang=it
_debver=44.0.2
_debrel=1
_debrepo=http://ftp.debian.org/debian/pool/main/i/

pkgname=iceweasel-i18n-it
pkgver=$_debver.deb$_debrel
pkgrel=1
pkgdesc="Italian language pack for Iceweasel"
arch=('any')
url="https://packages.debian.org/sid/iceweasel-l10n-it"
license=('MPL' 'GPL')
depends=("iceweasel>=$_debver") 
source=("${_debrepo}/iceweasel/iceweasel-l10n-${_lang}_${_debver}-${_debrel}_all.deb")
sha1sums=('d5b0bef71fc938233cfbf941ccc8389ad892ad60')

package() {
  msg2 "Installing Language Pack..."
  tar Jxvf "${srcdir}"/data.tar.xz -C "${pkgdir}"/
  msg2 "Cleaning unwanted files..."
  rm -rv "${pkgdir}"/usr/share/
}
