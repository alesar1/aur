# Generated by debtap
# Maintainer: jaap
# Contributor: jaap
pkgname=synergy2-bin
pkgver=2.0.4.stable~b1205+fcb59be4
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
source_x86_64=("https://binaries.symless.com/v2.0.4/synergy_2.0.4.stable~b1205%2Bfcb59be4_amd64.deb")
sha512sums_x86_64=('ae96856006ddd74965593acf51a263e2e9af3514917c99e5166930080ead8bbb6c24e9fd3e79a6963a24f663702042d18bae4e05b852f7c2f492b3600f6b9299')
package(){
	# Extract package data
	tar xf data.tar.xz -C "${pkgdir}"

	# Fix directories structure differencies
	cd "${pkgdir}"

	install -D -m644 "${pkgdir}/usr/share/doc/synergy/copyright" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
	mkdir -p usr/lib 2> /dev/null; cp -r lib/* usr/lib; rm -rf lib

	cd ..
	tput setaf 1; echo "this is the beta package for the AUR, if you want to move to the stable builds go and download the synergy2 package. and make sure to remove this one."; tput sgr0
}
