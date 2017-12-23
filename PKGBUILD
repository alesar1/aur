# Maintainer: Einhard Leichtfuß <alguien@respiranto.de>
# Contributor: Michael Duell <michael.duell@rub.de> PGP-Fingerprint: FF8C D50E 66E9 5491 F30C  B75E F32C 939C 5566 FF77

pkgbase=enigmail-bin
pkgname=(icedove-${pkgbase} thunderbird-${pkgbase})
_pkg_main_ver=1.9
pkgver=${_pkg_main_ver}.9
pkgrel=1
_pkgdesc_pre="The"
_pkgdesc_post="GnuPG encryption plugin. Binary version."
pkgdesc="${_pkgdesc_pre} Icedove / Thunderbird ${_pkgdesc_post}"
arch=('any')
url="https://www.enigmail.net/"
license=('MPL')
depends=('gnupg>=2.0.7')
source=("https://www.enigmail.net/download/release/${_pkg_main_ver}/enigmail-${pkgver}-sm+tb.xpi"{,.asc})
noextract=("enigmail-${pkgver}-sm+tb.xpi")
validpgpkeys=('10B2E4A0E718BB1B2791DAC4F040E41B9369CDF3'
              '4F9F89F5505AC1D1A260631CDB1187B9DD5F693B')
sha512sums=('8d83a4adf3a4432a7f88fcd29db12a6bec784c2b0650c5aec0f1feaeaedd06a7d40a9c83deee0b9b254b13ca3ea0fc1cab5bce401ed3bee54fc313a56c5c85e2'
            'SKIP')

prepare()
{
	mkdir -p "$pkgbase"
	bsdtar -xf "enigmail-${pkgver}-sm+tb.xpi" -C "$pkgbase"
}

_package_for()
{
	cd "$pkgbase"
	local emid=$(grep -m 1 '<em:id>' install.rdf | sed 's/.*>\(.*\)<.*/\1/')
	mkdir -p "${pkgdir}/usr/lib/${1}/extensions/${emid}"
	cp -r ./. "${pkgdir}/usr/lib/${1}/extensions/${emid}"

	pkgdesc="${_pkgdesc_pre} ${1^} ${_pkgdesc_post}"
	depends+=("${1}>=38")
	provides+=(${1}-enigmail)
	conflicts+=(${1}-enigmail)
}

package_icedove-enigmail-bin()
{
	_package_for icedove
}

package_thunderbird-enigmail-bin()
{
	_package_for thunderbird
}
