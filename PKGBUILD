# Maintainer: Saurabh Kumar Sharma <saurabh000345 at gmail dot com>

pkgname=youtubemusic-nativefier
pkgver=1.1
pkgrel=4
pkgdesc="YouTube Music Client built with nodejs-nativefier (electron)"
arch=("i686" "x86_64")
url="https://music.youtube.com/"
license=("GPL")
depends=("gtk3" "libxss" "nss")
optdepends=("libindicator-gtk3")
makedepends=("imagemagick" "nodejs-nativefier")

source=("${pkgname}.desktop" "${pkgname}.png")
sha256sums=("28b36360694313d9558ed620194a700296dbbf971e7fff90d18ad5c7cf74950a"
            "b0f33b20b2b63ed22ec4b64691e8cd340eead2c35afc9cb2fe5c29533fbc8d42")

build() {
	cd "${srcdir}"
	nativefier "https://music.youtube.com" --user-agent 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:70.0) Gecko/20100101 Firefox/70.0' --name "YouTube Music" --internal-urls ".*accounts.google.com.*|.*youtube.com.*"
}

package() {
	install -dm755 "${pkgdir}/"{opt,usr/share/applications,usr/bin}
	cp -rL "${srcdir}/YouTubeMusic-linux"* "${pkgdir}/opt/${pkgname}"
	ln -s "/opt/${pkgname}/YouTubeMusic" "${pkgdir}/usr/bin/${pkgname}"
	install -Dm644 "${srcdir}/${pkgname}.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"
	for _size in "192x192" "128x128" "96x96" "64x64" "48x48" "32x32" "24x24" "22x22" "20x20" "16x16" "8x8"
	do
		install -dm755 "${pkgdir}/usr/share/icons/hicolor/${_size}/apps"
		convert "${srcdir}/${pkgname}.png" -resize "${_size}" "${pkgdir}/usr/share/icons/hicolor/${_size}/apps/${pkgname}.png"
	done
}
