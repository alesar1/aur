# Maintainer: Cybafunk Monkey <cybafunk-monkey@posteo.eu>

_pkgname=Sparrow
pkgname=sparrow-wallet
pkgver=1.5.6
pkgrel=1
pkgdesc="Bitcoin Wallet that works with BitBox02"
arch=('x86_64' 'arm64')
url="https://sparrowwallet.com/"
license=('Apache')
depends=('libnet' 'hicolor-icon-theme' 'alsa-lib' 'libxtst' 'libxrender' 'java-runtime')
makedepends=('p7zip' 'gendesk')
validpgpkeys=('D4D0D3202FC06849A257B38DE94618334C674B40')
source=("https://github.com/sparrowwallet/sparrow/releases/download/$pkgver/sparrow-$pkgver.tar.gz")
sha256sums=('724f139a82744b3d8b29deb37f3a60a7db271affc094692e468a9161c4acf368')

prepare() {
	# Comment
	gendesk --pkgname "${_pkgname}" --pkgdesc "$pkgdesc" --name=$_pkgname --exec="/usr/bin/"${_pkgname} -n --categories="Utility;Finance;"
}

package() {

	install -dm755 "${pkgdir}"/opt/${pkgname}/lib/
	install -dm755 "${pkgdir}"/usr/bin/
	
	cp -a "${srcdir}"/${_pkgname}/bin			"${pkgdir}"/opt/${pkgname}/
	cp -a "${srcdir}"/${_pkgname}/lib/app 		"${pkgdir}"/opt/${pkgname}/lib/
	cp -a "${srcdir}"/${_pkgname}/lib/runtime 	"${pkgdir}"/opt/${pkgname}/lib/
	
	install -Dm644 	"${srcdir}"/${_pkgname}/lib/${_pkgname}.png -t 	"${pkgdir}"/usr/share/icons/hicolor/256x256/apps/
    install -Dm644 	"${srcdir}"/${_pkgname}.desktop 				"${pkgdir}"/usr/share/applications/${_pkgname,,}-wallet.desktop
    ln -s 			"/opt/$pkgname/bin/${_pkgname}" 				"${pkgdir}"/usr/bin/
}