# Maintainer: Einhard Leichtfuß <alguien@respiranto.de>
#
# Generated by aur-fd-scripts - https://git.respiranto.de/aur-fd-scripts.git/

_lang=eng-spa
pkgname="dict-freedict-${_lang}"
_pkgver=0.3.1
pkgver="${_pkgver//-/_}"
pkgrel=2
pkgdesc="English -> Spanish dictionary for dictd et al. from FreeDict.org"
arch=('any')
url="https://freedict.org/"
license=('GPL')
optdepends=('dictd: dict client and server')
makedepends=('freedict-tools')
install="${pkgname}.install"
source=("https://download.freedict.org/dictionaries/${_lang}/${_pkgver}/freedict-${_lang}-${_pkgver}.src.tar.xz")
sha512sums=('73db7cacf88d7bbe1e385b42ca17daf2ecc61f93b5cc7ba06416f0dd7d4b03ea831523e3a2eb327c398ce6de2c5d8d58bd3a1e7eb5800d7f419c0e451a827d98')

build()
{
	cd "$_lang"
	make FREEDICT_TOOLS=/usr/lib/freedict-tools build-dictd
}

package()
{
	install -m 755 -d "${pkgdir}/usr/share/dictd"
	install -m 644 -t "${pkgdir}/usr/share/dictd/" \
		"${_lang}/build/dictd/${_lang}".{dict.dz,index}

	for file in "$_lang"/{AUTHORS,README,NEWS,ChangeLog}
	do
		if test -f "$file"
		then
			install -m 644 -Dt "${pkgdir}/usr/share/doc/freedict/${_lang}/" "$file"
		fi
	done
}
