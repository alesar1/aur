# Maintainer: tabulatejarl8@gmail.com <TabulateJarl8>
# Maintainer: TurboWafflz <turbowafflz@gmail.com>
pkgname=iicalc-beta
pkgver=2.11.19
pkgrel=1
pkgdesc="An extensible calculator written in Python. Development/Beta Channel."
arch=('any')
url="https://gitlab.com/TurboWafflz/ImaginaryInfinity-Calculator"
license=('GPL')
depends=('bash-completion' 'python-pip' 'dialog')
makedepends=("tar")
conflicts=("iicalc")
options=('!strip' '!emptydirs')
install=${pkgname}.install
source=("iicalc-$pkgver.deb::https://gitlab.com/TurboWafflz/ImaginaryInfinity-Calculator/-/jobs/artifacts/development/raw/iicalc.deb?job=debian%20packager")
sha512sums=('39365ceb3937419355834b94177ab824bdc39341fce200c1f049abfe9b94a6d95f2a204e20ba7cd7f0562e3773ece921576a945416b87820d35196618390708d')

package(){

	# Extract package data
	tar xf data.tar.xz -C "${pkgdir}"
	rm debian-binary control.tar.xz data.tar.xz
	sed -i -E 's/debian/aur/' ${pkgdir}/usr/share/iicalc/config.ini
	sed -i -E 's/checkupdates = true/checkupdates = false/' ${pkgdir}/usr/share/iicalc/config.ini

}
