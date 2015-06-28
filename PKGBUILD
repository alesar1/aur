# Maintainer: Christian Hesse <mail@eworm.de>

pkgname=opera-beta
pkgver=31.0.1889.16
pkgrel=2
pkgdesc='A fast and secure web browser and Internet suite - beta stream'
arch=('x86_64')
url='http://www.opera.com/browser/'
license=('custom:opera')
depends=('alsa-lib' 'nss' 'gtk2' 'gconf' 'libxss' 'libxtst' 'desktop-file-utils')
optdepends=('ffmpeg: HTML5 H264 and mp3 playback')
install=opera.install
options=(!strip)
source=("http://get.geo.opera.com/pub/${pkgname}/${pkgver}/linux/${pkgname}_${pkgver}_amd64.deb")
# alternative download
#source=("ftp://ftp.opera.com/pub/${pkgname}/${pkgver}/linux/${pkgname}_${pkgver}_amd64.deb")
#source=("http://deb.opera.com/${pkgname}/pool/non-free/o/${pkgname}/${pkgname}_${pkgver}_amd64.deb")
sha256sums=('6239dc0c843858a19c4154942b9f28988285d5754daa1574208d5b091f09c8f3')

package() {
	cd ${srcdir}/

	# this is nested archive with final directory structure,
	# so extract the inner tarball to ${pkgdir}
	tar xJf data.tar.xz -C "${pkgdir}/"

	# create ffmpeg compatibility symlinks if necessary
	for LIBAV in $(strings "${pkgdir}/usr/lib/x86_64-linux-gnu/${pkgname}/${pkgname}" | egrep 'libav[[:alpha:]]+.so'); do
		[ -s "/usr/lib/${LIBAV}" ] && continue

		install -d -m0755 "${pkgdir}/usr/lib/x86_64-linux-gnu/${pkgname}/lib/"
		ln -s ../../../$(basename "${LIBAV%.*}") "${pkgdir}/usr/lib/x86_64-linux-gnu/${pkgname}/lib/${LIBAV}"
	done

	# set suid bit for Opera sandbox
	chmod 4755 "${pkgdir}/usr/lib/x86_64-linux-gnu/${pkgname}/opera_sandbox"
}

