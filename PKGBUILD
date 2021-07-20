# Maintainer: Alexander Epaneshnikov <aarnaarn2@gmail.com>

pkgname=rhvoice
pkgver=1.4.2
pkgrel=1
pkgdesc="Free and open source speech synthesizer for Russian and other languages"
arch=('x86_64')
url="https://github.com/RHVoice/RHVoice"
license=('GPL3' 'custom' 'custom:by-nc-nd-4.0' 'custom:by-sa-4.0')
depends=('speech-dispatcher' 'libpulse')
makedepends=('scons' 'portaudio' 'libao')
optdepends=('portaudio: for portaudio backend'
            'libao: for ao backend')
backup=('etc/RHVoice/RHVoice.conf')
source=(${pkgname}-${pkgver}.tar.gz::"https://github.com/RHVoice/RHVoice/archive/$pkgver.tar.gz"
        voice-victoria.tar.gz::"https://github.com/RHVoice/victoria-rus/archive/refs/tags/4.0.tar.gz"
        voice-evgeniy-rus.tar.gz::"https://github.com/RHVoice/evgeniy-rus/archive/refs/tags/4.0.tar.gz"
        voice-evgeniy-eng.tar.gz::"https://github.com/RHVoice/evgeniy-eng/archive/refs/tags/4.0.tar.gz"
        voice-aleksandr-hq.tar.gz::"https://github.com/rhvoice/aleksandr-hq-rus/archive/refs/tags/4.0.tar.gz"
        voice-yuriy.tar.gz::"https://github.com/rhvoice/yuriy-rus/archive/refs/tags/4.0.tar.gz"
        voice-volodymyr.tar.gz::"https://github.com/rhvoice/volodymyr-ukr/archive/refs/tags/4.0.tar.gz"
)
sha512sums=('bcd7cc6aadba1a619cd83e2dbd06836e985fbc4fce886a19c2272a2f6fff0792d15d4ff0b685b43705b68689ade932858e9d3b9173e6f829292d21d69a85c61a'
            '03b95f76bbd0b213fac867705acd3229f2d62448cdb863968b6ff02cc06f162d07a6154418e3ceee63d8d5352a00c1fed57b635d59424234b6cae3b1914da1cb'
            '4053185fd5cff60a8cf3355fad69ab63348fc5047a7e5d2328a639a5c65cecfaadc92d63599b0b8bc7ca804753593c78c837621cdd153c6ce247100141b96500'
            '1096b2d898292739f86333414a32b97b99112a57cf2c98c5ea31d1b92974f3adc4119e0ee031e6961810365432b77eb96229f7a45c55d8b9337a22aa3848dcc8'
            '2519eb5b8c1e39bfe557258d1f54c7d02ff4159ccc513de903b48e7ef136f2f875b5f4405a1064bd9b706baa6394f7c67373a4593edf369222597223ccc341e9'
            '07c9e65277c1774cf0185ba60107ff8f0dda5fa18eeadbfcb0cbdf5258e3fd2a364bb91c796473c9294a61e5c9366080d4d6ee115aace37f533ea1e6f167690b'
            '8f0f15229d451bbcf6db3b0f267e82635603b582f2af18d14421f3e108cdd14e4164e74e3c4723226e37b8ee7287ffa5d4083f9d2defd8b5c1b559eba547e849')

prepare() {
	ln -rsfv victoria-rus-4.0/* -t RHVoice-$pkgver/data/voices/victoria
	ln -rsfv evgeniy-rus-4.0/* -t RHVoice-$pkgver/data/voices/evgeniy-rus
	ln -rsfv evgeniy-eng-4.0/* -t RHVoice-$pkgver/data/voices/evgeniy-eng
	ln -rsfv aleksandr-hq-rus-4.0/* -t RHVoice-$pkgver/data/voices/aleksandr-hq
	ln -rsfv yuriy-rus-4.0/* -t RHVoice-$pkgver/data/voices/yuriy
	ln -rsfv volodymyr-ukr-4.0/* -t RHVoice-$pkgver/data/voices/volodymyr
}

build() {
	cd "RHVoice-${pkgver}"
	export SCONSFLAGS="$MAKEFLAGS"
	scons prefix="/usr" sysconfdir="/etc" CPPFLAGS="$CPPFLAGS" CCFLAGS="$CFLAGS" \
	      LINKFLAGS="$LDFLAGS"
}

package() {
	cd "RHVoice-${pkgver}"
	export SCONSFLAGS="$MAKEFLAGS"
	scons install DESTDIR="${pkgdir}" prefix="/usr" sysconfdir="/etc" \
	      CPPFLAGS="$CPPFLAGS" CCFLAGS="$CFLAGS" LINKFLAGS="$LDFLAGS"
	install -vDm0644 LICENSE.md -t "${pkgdir}/usr/share/licenses/${pkgname}"
	install -vDm0644 licenses/by-nc-nd-4.0.txt -t "${pkgdir}/usr/share/licenses/${pkgname}"
	install -vDm0644 licenses/by-nc-sa-4.0.txt -t "${pkgdir}/usr/share/licenses/${pkgname}"
	install -vDm0644 licenses/by-sa-4.0.txt -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
