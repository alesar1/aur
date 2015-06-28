# Maintainer: Christian Hesse <mail@eworm.de>

pkgname=opera-developer
pkgver=32.0.1899.0
pkgrel=2
pkgdesc='A fast and secure web browser and Internet suite - developer stream'
arch=('x86_64' 'i686')
url='http://www.opera.com/browser/'
license=('custom:opera')
depends=('alsa-lib' 'nss' 'gtk2' 'gconf' 'libnotify' 'libxss' 'libxtst' 'desktop-file-utils')
optdepends=('ffmpeg: HTML5 H264 and mp3 playback')
install=opera.install
options=(!strip)
source_x86_64=("http://get.geo.opera.com/pub/${pkgname}/${pkgver}/linux/${pkgname}_${pkgver}_amd64.deb")
source_i686=("http://get.geo.opera.com/pub/${pkgname}/${pkgver}/linux/${pkgname}_${pkgver}_i386.deb")
sha256sums_x86_64=('06b1b2f93c74c1437f12ab1f22d5bfd789608bb338c0d44dfa3f46d1ff66609b')
sha256sums_i686=('de318e774c26cdaf2e16635dc2d7413590c620fa65c71ed0cd531e9b2d706231')
# alternative download
#source=("ftp://ftp.opera.com/pub/${pkgname}/${pkgver}/linux/${pkgname}_${pkgver}_amd64.deb")
#source=("http://deb.opera.com/${pkgname}/pool/non-free/o/${pkgname}/${pkgname}_${pkgver}_amd64.deb")

package() {
	cd ${srcdir}/

	# this is nested archive with final directory structure,
	# so extract the inner tarball to ${pkgdir}
	tar xJf data.tar.xz -C "${pkgdir}/"

	# create ffmpeg compatibility symlinks if necessary
	for LIBAV in $(strings "${pkgdir}/usr/lib/${CARCH/i686/i386}-linux-gnu/${pkgname}/${pkgname}" | egrep 'libav[[:alpha:]]+.so'); do
		[ -s "/usr/lib/${LIBAV}" ] && continue

		install -d -m0755 "${pkgdir}/usr/lib/${CARCH/i686/i386}-linux-gnu/${pkgname}/lib/"
		ln -s ../../../$(basename "${LIBAV%.*}") "${pkgdir}/usr/lib/${CARCH/i686/i386}-linux-gnu/${pkgname}/lib/${LIBAV}"
	done

	# set suid bit for Opera sandbox
	chmod 4755 "${pkgdir}/usr/lib/${CARCH/i686/i386}-linux-gnu/${pkgname}/opera_sandbox"
}

