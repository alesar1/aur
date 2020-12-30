#Maintainer: Dylan Delgado <dylan1496@live.com>

pkgname=mtsieve
_pkgrev=82
_srcrev=r${_pkgrev}-trunk
pkgver=2.1.1r${_pkgrev}
_pkgver=2.1.1
pkgrel=1
pkgdesc='Library for sieving various types of numbers'
url='https://sourceforge.net/projects/mtsieve/'
license=('GPL')
arch=('x86_64')
depends=('gmp')

# Static copy of the snapshot file since sourceforge regenerates it on demand.
source=("https://github.com/Dylan1496/mtsieve-source/raw/main/mtsieve-${_pkgver}-${_srcrev}.zip")
sha256sums=('63bc7873b69ee882593135f8f3dd321b3ceefd9cb78ffe554658ca547827936d')

prepare() {  
	cd "${srcdir}/${pkgname}-svn"
	sed \
		-e 's/^CPPFLAGS =/CPPFLAGS +=/' \
		-e "/^SVN_VERSION :=/s/=.*/= r${_pkgrev}/" \
		-i makefile
}

build() {
	cd "${srcdir}/${pkgname}-svn"
	CPPFLAGS+=' -march=native'
	make cpu_all

}

package() {
	  cd "${srcdir}/${pkgname}-svn"
	  install -Dm755 afsieve "${pkgdir}"/usr/bin/afsieve
	  install -Dm755 cksieve "${pkgdir}"/usr/bin/cksieve
	  install -Dm755 dmdsieve "${pkgdir}"/usr/bin/dmdsieve
	  install -Dm755 gcwsieve "${pkgdir}"/usr/bin/gcwsieve
	  install -Dm755 gfndsieve "${pkgdir}"/usr/bin/gfndsieve
	  install -Dm755 fbncsieve "${pkgdir}"/usr/bin/fbncsieve
	  install -Dm755 fkbnsieve "${pkgdir}"/usr/bin/fkbnsieve
	  install -Dm755 k1b2sieve "${pkgdir}"/usr/bin/k1b2sieve
	  install -Dm755 kbbsieve "${pkgdir}"/usr/bin/kbbsieve
	  install -Dm755 mfsieve "${pkgdir}"/usr/bin/mfsieve
	  install -Dm755 pixsieve "${pkgdir}"/usr/bin/pixsieve
	  install -Dm755 psieve "${pkgdir}"/usr/bin/psieve
	  install -Dm755 sgsieve "${pkgdir}"/usr/bin/sgsieve
	  install -Dm755 srsieve2 "${pkgdir}"/usr/bin/srsieve2
	  install -Dm755 twinsieve "${pkgdir}"/usr/bin/twinsieve
	  install -Dm755 xyyxsieve "${pkgdir}"/usr/bin/xyyxsieve
}