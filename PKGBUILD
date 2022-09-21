# Generated by debtap
# Maintainer: gustash <gustavotcparreira@gmail.com>
# Contributor: gustash <gustavotcparreira@gmail.com>
pkgname=xbox-xcloud
pkgver=1.2.0
pkgrel=1
pkgdesc="Xbox-xcloud-client is an open-source client for Xbox home streaming made in Javascript and Typescript."
arch=('x86_64')
url="https://github.com/unknownskl/xbox-xcloud-client"
license=('MIT')
depends=('alsa-lib' 'at-spi2-atk' 'at-spi2-core' 'atk' 'cairo' 'dbus' 'desktop-file-utils' 'discord' 'expat' 'glib2' 'gtk3' 'hicolor-icon-theme' 'libcups' 'libdrm' 'libnotify' 'libsecret' 'libx11' 'libxcb' 'libxcomposite' 'libxdamage' 'libxext' 'libxfixes' 'libxkbcommon' 'libxrandr' 'libxss' 'libxtst' 'mesa' 'nspr' 'nss' 'pango' 'util-linux-libs' 'wayland' 'xdg-utils')
optdepends=('libappindicator-gtk3')
options=('!strip' '!emptydirs')
install=${pkgname}.install
source_x86_64=("https://github.com/unknownskl/xbox-xcloud-client/releases/download/v${pkgver}/Xbox-xCloud_${pkgver}_amd64.deb")
sha512sums_x86_64=('c49eb1ee5254ec05b7af7f9a45d63d5f6e536cac17b7f475e983a10dd17f8853a1bb5d37673db4640f7ab6c86b4dde2b5558b1c61b4ccbf28caecf10f89b6fd4')

package(){

	# Extract package data
	tar -xJ -f data.tar.xz -C "${pkgdir}"

	install -D -m644 "opt/Xbox-xCloud/LICENSES.chromium.html" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

}
