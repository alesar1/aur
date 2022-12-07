# Maintainer:Integral<luckys68@126.com>
pkgname=linuxqq-electron
pkgver=2.0.1_429
pkgrel=4
pkgdesc="New Tencent QQ for Linux, based on Electron"
arch=('x86_64')
url="https://im.qq.com/linuxqq"
license=('custom')
depends=('nss' 'alsa-lib' 'gtk3' 'gjs' 'at-spi2-core')
optdepends=('libappindicator-gtk3: Allow QQ to extend a menu via Ayatana indicators in Unity, KDE or Systray (GTK+ 3 library).')
source=(
	"https://dldir1.qq.com/qqfile/qq/QQNT/4691a571/QQ-v2.0.1-429_x64.deb"
)
sha512sums=('6e855e4a198d8d4cbc0a4ca1625a8d99b7673c9ce624148a8cfaa6db73c17306b71de59013cf44e5c57b241a7523ef17a87f196cace54301c65f30cf6962736c')

package() {
	echo "  -> Extracting the data.tar.xz..."
	bsdtar -xvf data.tar.xz -C "${pkgdir}/"
	chmod -R 755 "${pkgdir}/"

	echo "  -> Installing..."
	# Launcher
	install -d "${pkgdir}/usr/bin/"
	ln -s "/opt/QQ/qq" "${pkgdir}/usr/bin/${pkgname}"
	# Launcher Fix
	sed -i '3s!/opt/QQ/qq!/usr/bin/linuxqq-electron!' "${pkgdir}/usr/share/applications/qq.desktop"
	# License
	install -Dm644 "${pkgdir}/opt/QQ/LICENSE.electron.txt" -t "${pkgdir}/usr/share/licenses/${pkgname}/"
	install -Dm644 "${pkgdir}/opt/QQ/LICENSES.chromium.html" -t "${pkgdir}/usr/share/licenses/${pkgname}/"
}
