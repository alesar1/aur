# Maintainer: Michael J. Pento <mjpento@verizon.net>

pkgname=cppcheck-nox
_pkgname=cppcheck
pkgver=1.88
pkgrel=2
pkgdesc="A tool for static C/C++ code analysis without the GUI"
arch=('i686' 'x86_64')
url="http://cppcheck.sourceforge.net/"
license=('GPL')
depends=('python-pygments' 'pcre')
makedepends=('docbook-xsl')
provides=('cppcheck')
conflicts=('cppcheck')
source=(https://github.com/danmar/cppcheck/archive/${pkgver}.tar.gz)
md5sums=('0fc4c8180cacc07917b752ddd26954ea')

build() {
  cd "${_pkgname}-${pkgver}"

  LANG='en_US.UTF-8' make SRCDIR=build CFGDIR=/usr/share/cppcheck/cfg HAVE_RULES=yes
  make DB2MAN=/usr/share/xml/docbook/xsl-stylesheets-1.79.2/manpages/docbook.xsl CFGDIR=/usr/share/cppcheck/cfg man
}

package() {
  cd "${_pkgname}-${pkgver}"
  LANG='en_US.UTF-8' make DESTDIR=${pkgdir} CFGDIR=/usr/share/cppcheck/cfg SRCDIR=build HAVE_RULES=yes install

  install -D -p -m 644 cppcheck.1 "${pkgdir}"/usr/share/man/man1/cppcheck.1

  install -d "${pkgdir}"/usr/share/cppcheck/cfg
  install -D ./cfg/* -t "${pkgdir}"/usr/share/cppcheck/cfg
}
