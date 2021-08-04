# Maintainer : djnk8 <djnk8@mailinator.com>
_host='Host: cdn.hancom.com'
_referer='Referer: https://www.hancom.com/cs_center'
DLAGENTS=("https::/usr/bin/curl -o %o -H ${_referer// /\\ } -H ${_host// /\\} %u")

pkgname='hoffice-bin'
pkgver=11.20.0.1520
pkgrel=1
conflicts=("hoffice")
pkgdesc='Office document editor for Linux. Hancom Office Editor is an application to allow you to edit office documents that is developed and distributed by Hancom Inc.'
arch=('x86_64')
provides=("hoffice")
url='https://www.hancom.com/'
license=('custom:hoffice')
depends=('cairo' 'fontconfig' 'freetype2' 'gcc-libs' 'glibc' 'glu' 'harfbuzz' 'harfbuzz-icu' 'libcups' 'libcurl-gnutls' 'libxcb' 'qt5-base' 'qt5-x11extras' 'zlib')
optdepends=()
source=(
	'https://cdn.hancom.com/pds/hnc/DOWN/gooroom/hoffice_11.20.0.1520_amd64.deb'
	'license.txt'
)
sha256sums=(
	'SKIP'
	'SKIP'
)

package() {
	msg2 "Extracting package binaries..."
	bsdtar -xf data.tar.xz -C "$pkgdir/"
	install -D -m644 license.txt "$pkgdir/usr/share/licenses/hoffice/license.txt"
	msg2 "The error messages are from UTF-8 limitations. Please ignore it, as it does no harm."
	sleep 5
}
