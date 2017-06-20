# Contributor : anish [ at ] gatech [dot] edu
# Maintainer  : meijin007 [ at ] gmail [dot] com

pkgname=dump1090-mictronics-git
_gitname=dump1090
pkgver=3.3.0.r189.g18ac2cc
pkgrel=1
pkgdesc="FMictronics fork of dump1090, a simple Mode S decoder for RTLSDR devices."
arch=('i686' 'x86_64' 'armv6h' 'armv7h')
url="https://github.com/Mictronics/dump1090"
license=('BSD')
depends=('rtl-sdr' 'lighttpd' 'bladerf')
conflicts=('dump1090' 'dump1090-git' 'dump1090_mr-git' 'dump1090-fa-git')
provides=('dump1090' 'dump1090-fa' 'dump1090-fa-git')
makedepends=('git')
source=('dump1090::git+git://github.com/Mictronics/dump1090'
	'dump1090.service'
	'lighttpd.conf')
md5sums=('SKIP'
         'b0b8292df98aab3f514c43f03eb71d06'
         'e01a5f1b57d5d553bf595f9c0f83ceb9')
install='dump1090-mictronics.install'
 
pkgver() {
  cd "${srcdir}/${_gitname}"
  git describe --long --tags --match=v* | sed 's/dev.//g' | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  cd "${srcdir}/${_gitname}"
}

build() {
  cd "${srcdir}/${_gitname}"
  make all faup1090 EXTRACFLAGS=-DHTMLPATH=\\\"/usr/share/dump1090/html\\\"
}
 
package() {
  # mkdir -p "${pkgdir}/usr/bin"
  install -D -m755 "${srcdir}/${_gitname}/dump1090" "${pkgdir}/usr/bin/dump1090"
  install -D -m755 "${srcdir}/${_gitname}/view1090" "${pkgdir}/usr/bin/view1090"
  install -D -m755 "${srcdir}/${_gitname}/faup1090" "${pkgdir}/usr/lib/piaware/helpers/faup1090"
  install -d -m755 "${pkgdir}/usr/share/dump1090/html"
  install -D -m644 dump1090.service "${pkgdir}/usr/lib/systemd/system/dump1090.service"
  cp -r "${srcdir}"/"${_gitname}"/public_html/* "${pkgdir}/usr/share/dump1090/html"
  install -D -m644 "${srcdir}"/lighttpd.conf "${pkgdir}/usr/share/dump1090/lighttpd.conf"
}
