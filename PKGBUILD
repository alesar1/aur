# Generated by debtap
# Maintainer: tabulatejarl8@gmail.com <TabulateJarl8>
# Maintainer: TurboWafflz <turbowafflz@gmail.com>
pkgname=iicalc-beta
pkgver=2.7.35
pkgrel=1
pkgdesc="An extensible calculator written in Python. Development/Beta Channel."
arch=('any')
url="https://gitlab.com/TurboWafflz/ImaginaryInfinity-Calculator"
license=('GPL')
groups=('')
depends=('bash-completion' 'python-pip')
optdepends=("dialog: GUI elements")
makedepends=("binutils" "tar")
conflicts=("iicalc")
options=('!strip' '!emptydirs')
install=${pkgname}.install
source=("iicalc-$pkgver.deb::https://gitlab.com/TurboWafflz/ImaginaryInfinity-Calculator/-/jobs/artifacts/development/raw/iicalc.deb?job=debian%20packager")
sha512sums=('a2d7c5b768ce0f443c14491f6678f712a74f756b1174ac160c49ac46b4b62b27143e038974492bc7b858145fdd4dc35bb61a8f06d9100b3ca5f4ea4a57302524')

package(){

	# Extract package data
	ar vx iicalc-$pkgver.deb
	tar xf data.tar.xz -C "${pkgdir}"
	rm debian-binary control.tar.xz data.tar.xz
	sed -i -E 's/debian/aur/' ${pkgdir}/usr/share/iicalc/config.ini

}
