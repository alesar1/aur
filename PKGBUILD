# Maintainer: Alexey D. <lq07829icatm@rambler.ru>
# Contributor: Gaetan Bisson <bisson@archlinux.org>
# Contributor: Angel Velasquez <angvp@archlinux.org>
# Contributor: Andrea Scarpino <andrea@archlinux.org>
# Contributor: Damir Perisa <damir.perisa@bluewin.ch>
# Contributor: Ben <ben@benmazer.net>

pkgname=mpd-light
pkgver=0.21.24
_majorver=0.21
pkgrel=1
pkgdesc='Flexible, powerful, server-side application for playing music. Light version without ao, ffmpeg, jack, modplug, pulse, shout, sidplay, soundcloud, wavpack, avahi, smbclient and zziplib support.'
url='https://www.musicpd.org/'
license=('GPL')
arch=('i686' 'x86_64' 'armv6h' 'armv7h')
depends=('audiofile' 'libmad' 'curl' 'faad2' 'sqlite' 'libmms' 'libid3tag' 'libmpdclient'
         'icu' 'libupnp' 'libvorbis' 'libnfs' 'libsamplerate' 'libsoxr' 'libgme')
makedepends=('boost' 'meson' 'python-sphinx')
provides=("mpd=$pkgver")
conflicts=('mpd')
replaces=('mpd')
source=("https://www.musicpd.org/download/mpd/${_majorver}/mpd-${pkgver}.tar.xz"
        'mpd.tmpfile'
        'mpd.conf')
sha512sums=('dd0f97cdb405a0995ceafb965d2e872c54b27b384a721efa8d13ae7e28544b22da9e94433bc544f475d8da52d06c020842b11104cbfbc41406a10599db2d005c'
            '3608f8b0418aa5527917c35308aeca80357c3cf1834cceeade2eaab7fa736117c0b3143cf225478441ffc533b45ff1e8c5579a2e1aa432a4db5ca4cef2dd04e1'
            'f3eaa25925887ae5df52da0119a77729b5761c175a22117ab15a1636b141f4b159db75dc4e9a52e0d16b2bc4b0f617a4e0838a8d3624f98706beb3387971c660')
backup=('etc/mpd.conf')
install=mpd.install

prepare() {
	cd "${srcdir}/mpd-${pkgver}"

	rm -r build
	install -d build
}

build() {
	cd "${srcdir}/mpd-${pkgver}/build"
	_opts=('-Ddocumentation=true'
	       '-Dchromaprint=disabled' # appears not to be used for anything
	       '-Dsidplay=disabled' # unclear why but disabled in the past
	       '-Dadplug=disabled' # not in an official repo
	       '-Dsndio=disabled' # interferes with detection of alsa devices
	       '-Dshine=disabled' # not in an official repo
	       '-Dtremor=disabled' # not in an official repo
	       '-Dao=disabled'
	       '-Dffmpeg=disabled'
	       '-Djack=disabled'
	       '-Dmodplug=disabled'
	       '-Dpulse=disabled'
	       '-Dshout=disabled'
	       '-Dsidplay=disabled'
	       '-Dsoundcloud=disabled'
	       '-Dwavpack=disabled'
	       '-Dzzip=disabled'
	       '-Dzeroconf=disabled'
	       '-Dsmbclient=disabled'
	       '-Dcdio_paranoia=disabled'
	       '-Dqobuz=disabled'
	       '-Dtidal=disabled'
	       '-Diso9660=disabled'
	       '-Dfluidsynth=disabled'
	       '-Dmikmod=disabled'
	       '-Dmpcdec=disabled'
	       '-Dmpg123=disabled'
	       '-Dopus=disabled'
	       '-Dwildmidi=disabled'
	       '-Dlame=disabled'
	       '-Dtwolame=disabled'
	       '-Dopenal=disabled'
	       '-Dyajl=disabled'
	)
	arch-meson --auto-features auto .. ${_opts[@]}
	ninja
}

package() {
	cd "${srcdir}/mpd-${pkgver}/build"
	
	DESTDIR="${pkgdir}" ninja install
	install -Dm644 ../doc/mpdconf.example "${pkgdir}"/usr/share/doc/mpd/mpdconf.example
	install -Dm644 ../doc/mpd.conf.5 "${pkgdir}"/usr/share/man/man5/mpd.conf.5
	install -Dm644 ../doc/mpd.1 "${pkgdir}"/usr/share/man/man1/mpd.1

	install -Dm644 "${srcdir}"/mpd.conf "${pkgdir}"/etc/mpd.conf
	install -Dm644 "${srcdir}"/mpd.tmpfile "${pkgdir}"/usr/lib/tmpfiles.d/mpd.conf
	install -d -g 45 -o 45 "${pkgdir}"/var/lib/mpd{,/playlists}

	# Now service file installs only when libsystemd package was found
	if [ -e "${pkgdir}"/usr/lib/systemd/system/mpd.service ]; then 
		sed \
			-e '/\[Service\]/a User=mpd' \
			-e '/WantedBy=/c WantedBy=default.target' \
			-i "${pkgdir}"/usr/lib/systemd/system/mpd.service
	fi
}
