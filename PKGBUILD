# Maintainer: Johann Rohwer <j.m.rohwer@gmail.com>

_lang=afr-eng
_pkgname=dict-freedict-${_lang}
pkgname=${_pkgname}-bin
pkgver=0.2.2
_pkgver=${pkgver//_/-}
pkgrel=1
pkgdesc="Afrikaans -> English dictionary for dictd et al. from Freedict.org"
arch=('any')
url="https://freedict.org/"
license=('GPL')
optdepends=('dictd: dict client and server')
provides=(${_pkgname})
conflicts=(${_pkgname})
install=${pkgname}.install
source=("https://download.freedict.org/dictionaries/${_lang}/${_pkgver}/freedict-${_lang}-${_pkgver}.dictd.tar.xz")
sha512sums=('22776546d30239a7b213aecf55cae032b9281cb6fd9d9b23b64dcc8846506dcaa2f13d5db6d196108a7e30e0b5641c45034f2983da60c126b21fd58768d95df5')

package()
{
	install -m 755 -d "${pkgdir}/usr/share/dictd"
	install -m 644 -t "${pkgdir}/usr/share/dictd/" \
		${_lang}/${_lang}.{dict.dz,index}

	for file in ${_lang}/{AUTHORS,README,NEWS,ChangeLog}
	do
		if test -f ${file}
		then
			install -m 644 -Dt "${pkgdir}/usr/share/doc/freedict/${_lang}/" ${file}
		fi
	done
	# License
	install -m 644 -Dt "${pkgdir}/usr/share/licenses/${_pkgname}/" ${_lang}/COPYING
}
    
