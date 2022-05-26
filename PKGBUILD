# Maintainer: Arthur Aslanyan <arthur.e.aslanyan@gmail.com>
_name=starc
_filename='starc.AppImage'

pkgname="${_name}-appimage"
pkgver=0.1.5
pkgrel=1
pkgdesc="Story Architect is a text editor for film, theatre, radio scripts or comic books."
arch=('x86_64')
url='https://starc.app/'
license=('GPL3' 'custom')
depends=('zlib' 'bash')
provides=("${_name}=${pkgver}")
conflicts=("${_name}")
options=(!strip)
source=("${_filename}::https://github.com/story-apps/starc/releases/download/v${pkgver}/${_name}-setup.AppImage"
		"${_name}.desktop.patch"
		"${_name}.sh")
sha256sums=('fb98d6c8a84e0873d264c615b639341a1edf1a72fb61d960e0af9ecc15a7f63a'
			'583fcc57942d9c9e1a8e41a0a95fcc3f4cdd1660767e014921c30a3fa272f5fa'
			'642005557de950e4fd37bc87fe2fb051e7f93f61e7287161fe3c99c9918977c7')

prepare() {
	cd "${srcdir}"
	chmod +x $_filename
	./$_filename --appimage-extract
	patch -Np0 < "./${_name}.desktop.patch"
}

package() {
	# Install AppImage and bin
	install -Dm755 "${srcdir}/${_filename}" "${pkgdir}/opt/appimages/${_filename}"
	install -Dm755 "${srcdir}/${_name}.sh" "${pkgdir}/usr/bin/${_name}"

	# Install icon and desktop
	install -Dm644 "${srcdir}/squashfs-root/${_name}.png" "${pkgdir}/usr/share/pixmaps/${_name}.png"
	install -Dm644 "${srcdir}/squashfs-root/${_name}.desktop" "${pkgdir}/usr/share/applications/${_name}.desktop"

	# TODO: Install custom LICENSE when author makes it
	# install -Dm644 "${srcdir}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
