# Maintainer: Dustin Falgout <dustin@falgout.us>
# Contributor: Gifts <gifts.antichat@gmail.com>
# Contributor: Andrey Vlasovskikh <andrey.vlasovskikh@gmail.com>

pkgname=pycharm-eap
_buildver=143.869.1
_pkgver=5.0.2
_eap="True"
pkgver="${_pkgver}.${_buildver}"
pkgrel=1
pkgdesc="Powerful Python and Django IDE, Early Access Program (EAP) build. Professional edition."
arch=('any')
options=('!strip')
url="https://confluence.jetbrains.com/pages/viewpage.action?pageId=23004355"
license=("custom")
depends=("java-environment>=6")
makedepends=("wget")
provides=("pycharm-professional" "pycharm-pro-eap")
conflicts=("pycharm-professional" "pycharm-pro-eap")
groups=("development" "IDE" "editor" "jetbrains")

if [[ "True" = "${_eap}" ]]; then
	_srcfile="pycharm-professional-${_buildver}.tar.gz"
	source=("http://download.jetbrains.com/python/${_srcfile}"
			"${pkgname}.desktop")
	sha256sums=($(wget -q "${source}.sha256" && cat "${_srcfile}.sha256" | cut -f1 -d" ")
				"aa9573c177f5d4d3092b9dff2aef5b4c7d25ff9c2b044be222a0512dff759731")
else
	_srcfile="pycharm-professional-${_pkgver}.tar.gz"
	source=("http://download.jetbrains.com/python/${_srcfile}"
			"${pkgname}.desktop")
	sha256sums=($(wget -q "${source}.sha256" && cat "${_srcfile}.sha256" | cut -f1 -d" ")
				"aa9573c177f5d4d3092b9dff2aef5b4c7d25ff9c2b044be222a0512dff759731")
fi


package() {
	cd "${srcdir}"
	install -dm 755 \
		"${pkgdir}/opt/${pkgname}" \
		"${pkgdir}/usr/bin/" \
		"${pkgdir}/usr/share/licenses/${pkgname}/" \
		"${pkgdir}/usr/share/applications/"

	_eap="False"

	wget "https://www.jetbrains.com/pycharm/buy/license.pdf"
	install -m644 license.pdf "${pkgdir}/usr/share/licenses/${pkgname}/PyCharm_license.txt"

	if [[ "True" = "${_eap}" ]]; then
		cp -R --no-preserve=ownership "${srcdir}/pycharm-${_buildver}/"* "${pkgdir}/opt/${pkgname}"
	else
		cp -R --no-preserve=ownership "${srcdir}/pycharm-${_pkgver}/"* "${pkgdir}/opt/${pkgname}"
	fi
	
	if [[ "i686" = "${CARCH}" ]]; then
		rm -f "${pkgdir}/opt/${pkgname}/bin/libyjpagent-linux64.so"
		rm -f "${pkgdir}/opt/${pkgname}/bin/fsnotifier64"
	fi

	sed -i "s/Version=/Version=${pkgver}/g" "${pkgname}.desktop"
	install -m644 "${srcdir}/${pkgname}.desktop" "${pkgdir}/usr/share/applications/"
	
	ln -s "/opt/${pkgname}/bin/pycharm.sh" "${pkgdir}/usr/bin/pycharm-eap"
}