# Maintainer: Michael Mitchell <mmitc@protonmail.com>
pkgname=wild-chat
pkgver=v1.1.32
pkgrel=v1.1.32-3
pkgdesc="A Customizable Twitch Chat Client"
arch=('any')
url="https://github.com/AWildBeard/WildChat"
license=('Apache License 2.0')
depends=('jre8-openjdk' 'java-openjfx')

source=("https://github.com/AWildBeard/WildChat/releases/download/v1.1.32-3/wild-chat.tar")

md5sums=('d41d8cd98f00b204e9800998ecf8427e')

package() {
		mkdir -p "${pkgdir}/usr/share/wildchat"
		install -Dm644 "${srcdir}/WildChat.jar" "${pkgdir}/usr/share/wildchat/WildChat.jar"
		mkdir -p "${pkgdir}/usr/share/applications/"
		install -Dm644 "${srcdir}/com.github.awildbeard.wildchat.desktop" "${pkgdir}/usr/share/applications/"
		mkdir -p "${pkgdir}/usr/share/appdata"
		install -Dm644 "${srcdir}/com.github.awildbeard.wildchat.appdata.xml" "${pkgdir}/usr/share/appdata"
		mkdir -p "${pkgdir}/usr/bin"
		install -Dm755 "${srcdir}/wild-chat.sh" "${pkgdir}/usr/bin/wild-chat.sh"
}
