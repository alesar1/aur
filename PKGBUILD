# Generated by debtap
# Maintainer: Alex
# Contributor: Alex
pkgname=('opentx-companion-bin')
pkgver=2.3.11
pkgrel=1
pkgdesc="Models and settings editor for the OpenTX open source firmware."
arch=('x86_64')
url="http://www.open-tx.org/"
license=('GPL')
depends=('hicolor-icon-theme' 'qt5-base>=5.7.0' 'qt5-multimedia>=5.6.0beta' 'qt5-svg>=5.6.0beta' 'sdl>=1.2.11')
provides=('companion')
conflicts=('companion' 'companion9x-svn')
options=('!strip' '!emptydirs')
install=${pkgname}.install
source_x86_64=("https://downloads.open-tx.org/2.3/release/companion/linux/companion23_${pkgver}_amd64.deb")
sha512sums_x86_64=('aea3eae3174996139d7e614f33883e781e5a5a23313be909ade545853a83a51fe304bd314c8c00b10540f753a57ec52d0d8dd93b3b9ad345e10258cb0bf7f5ab')

package(){

	# Extract package data
	tar xzf data.tar.gz -C "${pkgdir}"

	# Fix directories structure differencies
	cd "${pkgdir}"

	mv usr/local/bin usr/bin
	mv usr/local/lib usr/lib
	mv lib/* usr/lib
	rm -r lib
}
