# Maintainer: yjun <jerrysteve1101 at gmail dot com>

pkgname=zhumu
_name=${pkgname}intl
pkgver=5.5.188.0612
pkgrel=1
pkgdesc="Video Conferencing and Web Conferencing Service"
arch=("x86_64")
url="https://www.zhumu.me"
license=('unknown')
depends=('fontconfig'
		 'glib2'
		 'libpulse'
		 'libsm'
		 'libx11'
		 'libxcb'
		 'libxcomposite'
		 'libxfixes'
		 'libxi'
		 'libxcursor'
		 'libxkbcommon-x11'
		 'libxrandr'
		 'libxrender'
		 'libxslt'
		 'mesa'
		 'nss'
		 'xcb-util-image'
		 'xcb-util-keysyms')
optdepends=('pulseaudio-alsa: audio via PulseAudio'
			'qt5-webengine: SSO login support'
			'picom: extra compositor needed by some window managers for screen sharing'
			'xcompmgr: extra compositor needed by some window managers for screen sharing')
source_x86_64=("${_name}_${pkgver}_amd64.deb::http://d.zhumu.com/client/latest/${_name}_amd64.deb")
sha256sums_x86_64=('f5e105e578a3352846bcc3f736bc727bedce22be3ed16c2c34339d9e6e98f3ca')

package(){
	cd ${srcdir}
	
	tar -xf data.tar.xz -C ${pkgdir}

	#fix icon display
	sed -i "s/Icon=${_name}.png/Icon=${_name}/g" ${pkgdir}/usr/share/applications/${_name}.desktop
}

# vim:set sw=2 ts=2 et:
