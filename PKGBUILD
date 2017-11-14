# Generated by debtap
# Maintainer: jaap
# Contributor: jaap
pkgname=synergy2-bin
pkgver=2.0.1.stable~b1034+59dd93a0
pkgrel=1
pkgdesc="Keyboard and mouse sharing solution. Synergy allows you to share one mouse and keyboard between multiple computers. Work seamlessly across Windows, macOS and Linux."
arch=('x86_64')
url="https://symless.com/synergy"
license=('unknown')
groups=('')
depends=('gcc>=5.2' 'bash-completion>=1.18.' 'gcc-libs>=3.0' 'hicolor-icon-theme' 'openssl-1.0' 'libx11>=1.2.99.901' 'libxext' 'libxi>=1.2.99.4' 'libxtst' 'openssl-1.0>=1.0.0' 'qt5-base>=5.5.0' 'qt5-declarative>=5.5.0' 'qt5-quickcontrols>=5.5.0')
conflicts=('synergy' 'synergy2')
options=('!strip' '!emptydirs')
install=${pkgname}.install
source_x86_64=("https://www.dropbox.com/s/gnvp8gu27hzz2zc/synergy_2.0.1.stable-b1034%2B59dd93a0_amd64.deb?dl=1")
sha512sums_x86_64=('12a5df374a941122d3dcbc1b9c43ef7b8b04b4f48a6d505f301fcfca6e32a42f3a2ea28d318babf413b85e8f5f0ab10380ae405f6aa7ee570c06a718a5b65148')

package(){

	# Extract package data
	tar xf data.tar.xz -C "${pkgdir}"

	# Fix directories structure differencies
	cd "${pkgdir}"

	install -D -m644 "${pkgdir}/usr/share/doc/synergy/copyright" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
	mkdir -p usr/lib 2> /dev/null; cp -r lib/* usr/lib; rm -rf lib

	cd ..
	tput setaf 1; echo "this is the beta package for the AUR, if you want to stay on the stable builds go and download the synergy2 package. and make sure to remove this one."; tput sgr0
}
