# Maintainer: ettom <motte at cock dot li>

_pkgname=smuview
_spkgname=SmuView
pkgname=${_pkgname}-appimage
pkgver=0.0.4
pkgrel=1
pkgdesc="A Qt based source measure unit GUI for sigrok"
arch=('x86_64')
url="https://github.com/knarfS/smuview"
license=('GPL3')
provides=('smuview')
conflicts=('smuview')
source=("https://github.com/knarfS/${_pkgname}/releases/download/v${pkgver}/${_spkgname}-${pkgver}-${arch}.AppImage"
	${_pkgname}.sh)

md5sums=('86ee6891a1ee275dd7fc76610ec982b8'
         '31f18ee527b6ea19c63fc521a0f91043')
options=(!strip)
_filename=./${_spkgname}-${pkgver}-${arch}.AppImage

prepare() {
	cd "${srcdir}"
	chmod +x ${_filename}
	${_filename} --appimage-extract
}

package() {
	install -Dm755 "${srcdir}/${_filename}" "${pkgdir}/opt/appimages/${_pkgname}.AppImage"
	install -Dm755 "${srcdir}/${_pkgname}.sh" "${pkgdir}/usr/bin/${_pkgname}"

	install -dm755 "${pkgdir}/usr/share/applications/"
	cp -r --no-preserve=mode,ownership "${srcdir}/squashfs-root/usr/share/icons" "${pkgdir}/usr/share/"
	cp --no-preserve=mode,ownership "${srcdir}/squashfs-root/org.sigrok.${_spkgname}.desktop" "${pkgdir}/usr/share/applications/"
}
