# Maintainer: hr567 <hr567@hr567.me>
pkgname=apifox
pkgver=2.1.36
pkgrel=1
pkgdesc="API 文档、API 调试、API Mock、API 自动化测试"
arch=("x86_64")
url="https://www.apifox.cn/"
license=('custom')
depends=('c-ares' 'ffmpeg' 'gtk3' 'libevent' 'libxslt' 'minizip' 'nss' 're2' 'snappy')
source=(
	"https://cdn.apifox.cn/download/Apifox-linux-latest.zip"
	"apifox.desktop")
sha256sums=(
	'ca700369a1b2b017aa68bf25269b76d17aad6514d570d43128bf19083203a1fb'
	'538bd986b582053799128254b4fcd6edfd51d096b127cf6398555664497d76b0')
options=(!strip)

package() {
	install -Dm755 "${srcdir}/Apifox.AppImage" "${pkgdir}/opt/apifox/Apifox.AppImage"
	install -Dm644 "${srcdir}/apifox.desktop" "${pkgdir}/usr/share/applications/apifox.desktop"
	mkdir -p "${pkgdir}/usr/bin"
	ln -sf "${pkgdir}/opt/apifox/Apifox.AppImage" "${pkgdir}/usr/bin"
}
