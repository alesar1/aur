# Maintainer: Einhard Leichtfuß <archer@respiranto.de>
# Contributor: Michael Duell <michael.duell@rub.de> PGP-Fingerprint: FF8C D50E 66E9 5491 F30C  B75E F32C 939C 5566 FF77

pkgname=thunderbird-enigmail-bin
_pkg_main_ver=1.9
pkgver=${_pkg_main_ver}.6.1
pkgrel=2
pkgdesc="The Mozilla Thunderbird GnuPG encryption plugin. Binary version."
arch=('any')
url="https://www.enigmail.net/"
license=('MPL')
depends=('thunderbird')
provides=('thunderbird-enigmail')
conflicts=('enigmail' 'thunderbird-enigmail')
replaces=('enigmail-64-bin' 'enigmail-bin')
source=("https://www.enigmail.net/download/release/${_pkg_main_ver}/enigmail-${pkgver}-sm+tb.xpi"{,.asc})
noextract=("enigmail-${pkgver}-sm+tb.xpi")
validpgpkeys=('10B2E4A0E718BB1B2791DAC4F040E41B9369CDF3'
              '4F9F89F5505AC1D1A260631CDB1187B9DD5F693B')
sha384sums=('SKIP'
            'SKIP')

package() {
	mkdir "${pkgname}"
	bsdtar -C "${pkgname}" -xf "enigmail-${pkgver}-sm+tb.xpi"

	cd "${pkgname}"
	_eid=$(grep -m 1 '<em:id>' install.rdf | sed 's/.*>\(.*\)<.*/\1/')
	mkdir -p "${pkgdir}/usr/lib/thunderbird/extensions/${_eid}"
	cp -r ./. "${pkgdir}/usr/lib/thunderbird/extensions/${_eid}"
}
