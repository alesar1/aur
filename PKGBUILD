# Maintainer: Jonas Frei <freijon@gmail.com>
# Contributor: Yegorius <yegorius@domic.us>

pkgname=pulseaudio-dlna-git
pkgver=0.5.2.r18ad83b
pkgrel=1
pkgdesc="A small DLNA server which brings DLNA/UPnP support to PulseAudio (development version)"
arch=('i686' 'x86_64')
url="https://github.com/masmu/pulseaudio-dlna"
license=('GPL3')
conflicts=('pulseaudio-dlna')
provides=('pulseaudio-dlna')
depends=('python2-pip' 'python2-dbus' 'python2-docopt'
		 'python2-requests' 'python2-setproctitle' 'python2-gobject2'
		 'python2-protobuf' 'python2-notify2' 'python2-psutil'
		 'python2-futures' 'python2-chardet' 'python2-netifaces'
		 'python2-lxml' 'python2-zeroconf')
makedepends=('python2-setuptools')
optdepends=('lame: MP3 transcoding support'
			'faac: AAC transcoding support'
			'flac: FLAC transcoding support'
			'sox: WAV transcoding support'
			'ffmpeg: multiple formats support'
			'opus-tools: OPUS transcoding support'
			'vorbis-tools: OGG transcoding support')
source=(
	"${pkgname}::git+https://github.com/masmu/pulseaudio-dlna.git"
	"pulseaudio-dlna.service::https://gist.githubusercontent.com/freijon/64066155a46083eb3c06acd9ad40821f/raw/1a1557df4e398197aa89c973d20117ebabf03aa2/pulseaudio-dlna.service"
)
sha256sums=(
	'SKIP'
	'59e25f0c4aff996d146e07f4b04251b4d131da23f20f80a5e8bf84c7af734cd0'
)

pkgver() {
	cd "$pkgname"
	_ver=`git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'`
	_release=${_ver:0:`expr index ${_ver} 'r'`-2}
	printf "%s.r%s" "${_release}" "$(git rev-parse --short HEAD)"
}

package() {
	cd "$srcdir/$pkgname"
	python2 setup.py install --prefix=/usr --root="$pkgdir" --optimize=1

	install -Dpv $startdir/pulseaudio-dlna.service $pkgdir/usr/lib/systemd/user/pulseaudio-dlna.service
}

post_install() { systemctl --user daemon-reload; }
