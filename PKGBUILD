# Maintainer: onenowy <onenowy AT gmail DOT com>
# Contributor: Youngjae Lee <ls4154.lee@gmail.com>
# Contributor: Kimlulz (kimlulz@naver.com)
pkgname=naver-whale-stable-bin
pkgver=3.14.134.62
pkgrel=1
pkgdesc="The web browser from NAVER, it possess a lot of similar features as Vivaldi, being a customized pushed browser, multi-tasking browsing called Omnitasking, as well as other features such as cloud saves & quick translation"
arch=("x86_64")
url="https://whale.naver.com"
license=("custom")
depends=(
	'alsa-lib'
	'gtk3'
	'libcups'
	'libxss'
	'libxtst'
	'nss'
	'ttf-liberation'
	'xdg-utils'
)
optdepends=(
	'gnome-keyring: for storing passwords in GNOME keyring'
	'kwallet: for storing passwords in KWallet'
)
conflicts=('naver-whale-stable' 'whale-browser')
options=('!emptydirs' '!strip')
source=("https://repo.whale.naver.com/stable/deb/pool/main/n/naver-whale-stable/naver-whale-stable_${pkgver}-1_amd64.deb"
	"naver-whale-stable.sh"
        "LICENSE.html")
sha256sums=("53109870c6a538491a71a5bb363165400a6417e36e2616700510b15b28f1450f"
	"11522689f4c94ea86bc7e50feb48c6b823cb3cdb7bb04b565a0db2f12d25d9a5"
	"ed82f8f83c93cbd468395cc80e3be7beb8a3f18bdf5770f165c348c15f7e5e84")

package() {
	bsdtar -xf data.tar.xz -C "${pkgdir}/"

	install -m755 naver-whale-stable.sh "${pkgdir}/usr/bin/naver-whale-stable"

	install -Dm644 LICENSE.html "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE.html"

	for i in 16 24 32 48 64 128 256; do
		install -Dm644 "${pkgdir}/opt/naver/whale/product_logo_${i}.png" \
			"${pkgdir}/usr/share/icons/hicolor/${i}x${i}/apps/naver-whale.png"
	done

	rm -r "${pkgdir}/etc/cron.daily/" \
		"${pkgdir}/opt/naver/whale/cron/" \
		"${pkgdir}/opt/naver/whale"/product_logo_*.{png,xpm} \
		"${pkgdir}/usr/share/menu/"
}
