# Maintainer: Moses Narrow <moe_narrow@use.startmail.com>
# Co-Maintainer: Felix Golatofski <contact@xdfr.de>
# Contributor: Mark Weiman <mark.weiman@markzz.com>
# Contributor: Johannes Dewender  arch at JonnyJD dot net
# Contributor: Tony Lambiris <tony@critialstack.com>

pkgbase=apt
pkgname=('apt' 'apt-docs')
pkgver=2.1.6
pkgrel=2
arch=('i686' 'x86_64')
url="http://packages.debian.org"
license=('GPL2')
makedepends=('cmake' 'dpkg' 'docbook-xsl' 'doxygen' 'git' 'gtest' 'w3m' 'triehash'
             'perl-text-wrapi18n' 'perl-locale-gettext' 'perl-yaml-tiny'
             'perl-term-readkey' 'perl-sgmls' 'perl-module-build' 'perl-unicode-linebreak')
provides=('libapt-inst' 'libapt-pkg' 'libapt-pkg-dev' "apt-utils")
source=("git+https://salsa.debian.org/apt-team/apt.git#tag=${pkgver}"
        "https://github.com/mquinson/po4a/releases/download/v0.59.1/po4a-v0.59.1.tar.gz")
sha256sums=('SKIP'
            'a906fd82a6cc3a8898c1fe55d14076f3376fa6879ce9b1828b8b125e2dbe495b')

build() {
  # arch linux's po4a is too new to build apt, so build an older version
  # will likely be good to use system po4a when it's updated in sid
  msg2 "Building po4a 0.57..."
  cd "$srcdir/po4a-v0.59.1"
  perl Build.PL installdirs=vendor create_packlist=0
  LC_ALL=en_US.UTF-8 perl Build
  alias po4a="$srcdir/po4a-v0.59.1/po4a"

  msg2 "Building apt..."
  cd "$srcdir/$pkgname"

  # docbook xsl is stored with the version on Arch
  DOCBOOK_XSL_VER=`ls -d /usr/share/xml/docbook/xsl-stylesheets-* | sort | head -1 | xargs basename`

  cmake -B build \
  	-DCMAKE_INSTALL_PREFIX="/usr" \
  	-DCMAKE_INSTALL_LIBDIR="lib" \
  	-DCMAKE_INSTALL_LIBEXECDIR="lib" \
	  -DDOCBOOK_XSL="/usr/share/xml/docbook/${DOCBOOK_XSL_VER}"

  sed -i -e "s|stylesheet/docbook-xsl|$DOCBOOK_XSL_VER=t|" build/doc/*.xsl
  sed -i -e "s|stylesheet/nwalsh|$DOCBOOK_XSL_VER=|" build/doc/*.xsl

  make -C build all
}

package_apt() {
  depends=('gnupg' 'curl' 'xz')
  pkgdesc="Command-line package manager used on Debian-based systems"
  cd "$srcdir/$pkgbase"
  make -C build DESTDIR="${pkgdir}" install
  rm -rf "${pkgdir}/usr/share/docs"
}

package_apt-docs() {
  pkgdesc="Documentation for apt"
  cd "$srcdir/$pkgbase"
  make -C build DESTDIR="${pkgdir}" install
  rm -rf "${pkgdir}"/etc
  rm -rf "${pkgdir}"/var
  rm -rf "${pkgdir}"/usr/{bin,include,lib}
  rm -rf "${pkgdir}"/usr/share/{bash-completion,locale,man}
}

# vim:set ts=2 sw=2 et:
