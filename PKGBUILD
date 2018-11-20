# Maintainer: tioguda <guda.flavio@gmail.com>

_pkgname=alltomp3
pkgname=alltomp3-bin
_pkgver=51
_LOver=0.3.7
pkgver=${_LOver}.${_pkgver}
pkgrel=1
arch=('x86_64')
license=('GPL-2.0')
url="https://alltomp3.org/"
pkgdesc="Download YouTube videos in MP3 with tags and lyrics"
depends=('gconf' 'libnotify' 'libappindicator-gtk3' 'libxtst' 'nss' 'ffmpeg' 'chromaprint' 'python2-pathlib')

source=("${_pkgname}_${_LOver}-${_pkgver}_amd64.deb::https://packagecloud.io/AllToMP3/alltomp3/packages/ubuntu/yakkety/${_pkgname}_${_LOver}-${_pkgver}_amd64.deb/download.deb")
sha256sums=('978ec74661c993aa1f53f0f321e8eafdce66ef80c13c7d973835b19b43a8b80d')

package() {
	# Extract package data
	tar xf data.tar.xz -C "${pkgdir}"

	install -D -m644 "${pkgdir}/opt/AllToMP3/resources/app/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
