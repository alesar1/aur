# $Id$
# Maintainer: Mohammadreza Abdollahzadeh <morealaz@gmail.com>
# Contributor: Apkawa <apkawa@gmail.com>
# Contributor: Peter A. Shevtsov <pshevtsov@severusweb.ru>
pkgname=mysql-docs
pkgver=8.0
pkgrel=3
pkgdesc="Set of HTML documentation for MySQL."
arch=('any')
url="http://dev.mysql.com/doc/"
license=('GPL')
options=('docs')
source=("${pkgname}-${pkgver}.tar.gz::http://downloads.mysql.com/docs/refman-${pkgver}-en.html-chapter.tar.gz")
sha256sums=('SKIP')

package() {
  install -d ${pkgdir}/usr/share/doc/mysql/html
  cp -a refman-${pkgver}-en.html-chapter/* \
   ${pkgdir}/usr/share/doc/mysql/html/
}
# vim:set ts=2 sw=2 et:
