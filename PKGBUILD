# Maintainer: jmf <jmf at mesecons dot net>
# Contributor: Pascal Groschwitz <p.groschwitz@googlemail.com>
pkgname=fgdata-git
pkgver=20150829
pkgrel=1
_gitname="fgdata"
pkgdesc="Base data for the flightgear flight simulator."
arch=('i686' 'x86_64')
url="http://www.flightgear.org"
license=('GPL')
depends=('')
provides=('fgdata-git')
conflicts=('flightgear-data')
source=(git://git.code.sf.net/p/flightgear/fgdata#branch=next)
md5sums=('SKIP')

prepare(){
	cd ${srcdir}/${_gitname}
	git checkout next
}

package(){
  cd "${srcdir}/${_gitname}"
  mkdir -p ${pkgdir}/usr/share/flightgear
  mv * ${pkgdir}/usr/share/flightgear || return 1
  chown root.users ${pkgdir}/usr/share/flightgear/
	ln -s ${pkgdir}/usr/share/FlightGear/ ${pkgdir}/usr/share/flightgear/
} 

