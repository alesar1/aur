# Maintainer: Youngjae Lee <ls4154.lee@gmail.com>
pkgname=naver-whale-stable
pkgver=3.13.131.27
pkgrel=1
pkgdesc="The web browser from NAVER"
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
options=('!emptydirs' '!strip')
source=("http://repo.whale.naver.com/stable/deb/pool/main/n/naver-whale-stable/naver-whale-stable_${pkgver}-1_amd64.deb"
	"naver-whale-stable.sh"
        "LICENSE.html")
sha256sums=("a8f9e24fc4cb438b06302af4870b305ea826b624319913740880ca9d5681c564"
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
