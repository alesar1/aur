# Maintainer: Sebastian Meyer <mail@bastimeyer.de>
# Former maintainer: Ben Fox-Moore <ben.foxmoore@gmail.com>
pkgname=streamlink-twitch-gui
pkgver=1.11.0
pkgrel=1
pkgdesc="A multi platform Twitch.tv browser for Streamlink"
arch=("i686" "x86_64")
url="https://github.com/streamlink/streamlink-twitch-gui"
license=("MIT")
depends=("gtk3" "libxss" "nss" "streamlink")
conflicts=("streamlink-twitch-gui-git")
options=(!strip)
source_i686=("https://github.com/streamlink/${pkgname}/releases/download/v${pkgver}/${pkgname}-v${pkgver}-linux32.tar.gz")
source_x86_64=("https://github.com/streamlink/${pkgname}/releases/download/v${pkgver}/${pkgname}-v${pkgver}-linux64.tar.gz")
sha256sums_i686=('fee46e7ef9e4dfef77375775799546f4dce2e6c5ba45e2f156fcf0521c86d569')
sha256sums_x86_64=('3eb560af67a98322eab23985dbd46348a9594e50e6a2626fdeedeeade2b72679')

package() {
	cd "${srcdir}/${pkgname}"

	# set up package directories
	install -d \
		"${pkgdir}/opt/${pkgname}/" \
		"${pkgdir}/usr/bin/" \
		"${pkgdir}/usr/share/applications/"

	# copy licenses
	install -Dm644 \
		-t "${pkgdir}/usr/share/licenses/${pkgname}/" \
		"./LICENSE.txt" \
		"./credits.html"

	# copy appstream metainfo
	install -Dm644 \
		-t "${pkgdir}/usr/share/metainfo/" \
		"./${pkgname}.appdata.xml"

	# copy application content and remove unneeded files and dirs
	cp -a "./" "${pkgdir}/opt/${pkgname}/"
	rm -r "${pkgdir}/opt/${pkgname}/"{{add,remove}-menuitem.sh,LICENSE.txt,credits.html,"${pkgname}.appdata.xml",icons/}

	# create custom start script and disable version check
	cat > "${pkgdir}/usr/bin/${pkgname}" <<-EOF
		#!/usr/bin/env bash
		/opt/${pkgname}/${pkgname} "\$@" --no-version-check
	EOF
	chmod +x "${pkgdir}/usr/bin/${pkgname}"

	# copy icons
	for res in 16 32 48 64 128 256; do
		install -Dm644 \
			"./icons/icon-${res}.png" \
			"${pkgdir}/usr/share/icons/hicolor/${res}x${res}/apps/${pkgname}.png"
	done

	# create menu shortcut
	cat > "${pkgdir}/usr/share/applications/${pkgname}.desktop" <<-EOF
		[Desktop Entry]
		Type=Application
		Name=Streamlink Twitch GUI
		GenericName=Twitch.tv browser for Streamlink
		Comment=Browse Twitch.tv and watch streams in your videoplayer of choice
		Keywords=streamlink;twitch;streaming;
		Categories=AudioVideo;Network;
		Exec=/usr/bin/${pkgname}
		Icon=${pkgname}
	EOF
}
