# Maintainer: Chris Severance aur.severach AatT spamgourmet.com
# Contributor: Chris Andrews <christophersimonandrews at gmail.com>
# Contributor: Dan Serban
# Contributors: Henri HÃ¤kkinenv, Damian Barberon, Netanel Shine, Simon Schneider
# Contributor: Lari Tikkanen <lartza at wippies.com>
# Contributor: Jonas Heinrich <onny@project-insanity.org>

set -u
pkgname='joomla'
pkgver='3.7.1'
pkgrel='1'
pkgdesc='a php Content Management System (CMS) which enables you to build websites and powerful online applications.'
arch=('any')
url='http://www.joomla.org/'
#_watch=('http://www.joomla.org/download.html',' ([\d.]*) Full Package')
license=('GPL')
#depends=('php<6')
options=('!strip')
install="${pkgname}.install"
#_verwatch=("http://joomlacode.org/gf/project/${pkgname}/frs/" "Joomla_\(.*\)-Stable-Full_Package\.tar\.bz2" 't')
#source=("http://joomlacode.org/gf/download/frsrelease/20086/162538/Joomla_${pkgver}-Stable-Full_Package.tar.bz2")
_giturl="https://github.com/joomla/${pkgname}-cms"
#_verwatch=("${_giturl}/releases" "${_giturl}/releases/download/[0-9\.]\+/Joomla_\([0-9\.]\+\)-Stable-Full_Package\.tar\.bz2" 'l')
_verwatch=("${_giturl}/releases.atom" '\s\+<link rel="alternate" type="text/html" href="/joomla/joomla-cms/releases/tag/\([0-9\.]\+\)".*' 'f')
source=("${_giturl}/releases/download/${pkgver}/Joomla_${pkgver}-Stable-Full_Package.tar.bz2")
sha256sums=('e7c1726ea58aab5539b62885fb5583e92e60e6b5e43e9ca302281a759b322473')

package() {
  set -u
  install -dm755 "${pkgdir}/usr/share/webapps"
  cp -pr "${srcdir}" "${pkgdir}/usr/share/webapps/joomla"
  find "${pkgdir}/usr/share/webapps/joomla" -maxdepth 1 -type l -iname '*.bz2' -delete
  find "${pkgdir}/usr/share/webapps/joomla" -type f -exec chmod 0664 '{}' ';'
  find "${pkgdir}/usr/share/webapps/joomla" -type d -exec chmod 0775 '{}' ';'
  chown -R 'root:root' "${pkgdir}/usr/share/webapps/joomla"
  install -D 'LICENSE.txt' "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  set +u
}
set +u
