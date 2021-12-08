# Maintainer: Nobody <>

_referer='Referer: https://www.hancom.com/cs_center'
DLAGENTS=("https::/usr/bin/curl -o %o -H ${_referer// /\\ } %u")

pkgname='hoffice-viewer'
pkgver=11.20.0.991
pkgrel=1
pkgdesc='Office document viewer for Linux'
arch=('x86_64')
url='https://www.hancom.com/'
license=('custom:hoffice-viewer')
depends=('cairo' 'fontconfig' 'freetype2' 'gcc-libs' 'glibc' 'glu' 'harfbuzz' 'harfbuzz-icu' 'libcups' 'libcurl-gnutls' 'libxcb' 'qt5-base' 'qt5-x11extras' 'zlib')

source=(
	'https://cdn.hancom.com/pds/hnc/DOWN/gooroom/hoffice_viewer_2020_amd64.deb'
	'LICENSE'
)
sha256sums=(
	'db25bfbbe3661625ef3640f619db106f7be9745808277f8a0614f859270dacdd'
	'50d024b38be8a8463b283b0aac5f04bb7e2738ee2573f1edbf5328e43ae1b5c7'
)

package() {
	msg2 "Extracting data.tar.xz..."
	bsdtar -xf data.tar.xz -C "$pkgdir/"
	install -Dm644 license.txt "$pkgdir/usr/share/licenses/hoffice-viewer/LICENSE"
}
