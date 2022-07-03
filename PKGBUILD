pkgname=qmmp-1
pkgver=1.6.1
pkgrel=1
pkgdesc="Qt based audio-player (1.x branch, Qt5)"
arch=('x86_64')
url="https://qmmp.ylsoftware.com"
license=('GPL')

_name="${pkgname%-1}"
provides=("${_name}=${pkgver}")
conflicts=("${_name}")

depends=(
    'alsa-lib' 'curl' 'desktop-file-utils' 'hicolor-icon-theme' 'libmad' 'libvorbis'
    'libogg' 'libxkbcommon-x11' 'taglib' 'xdg-utils' 'qt5-base'
)
makedepends=(
    'cmake' 'flac' 'jack' 'libmpcdec' 'pipewire' 'pulseaudio' 'ffmpeg' 'libcdio-paranoia'
    'libcddb' 'libmms' 'libsamplerate' 'libmodplug' 'libsndfile' 'wavpack' 'mpg123' 'mesa'
    'projectm' 'faad2' 'libgme' 'libsidplayfp' 'opusfile>=0.12' 'wildmidi' 'qt5-tools'
)
optdepends=(
    'mpg123: to play MP3 files'
    'flac: native FLAC support'
    'jack: JACK sound output'
    'libmpcdec: Musepack support'
    'pulseaudio: PulseAudio output'
    'pipewire: pipewire support'
    'libcdio-paranoia: Compact Disc input and control support'
    'libcddb: CDDB server support'
    'libmms: MMS stream protocol support'
    'libmodplug: MOD playing library'
    'libsndfile: sampled sound support'
    'projectm: visual efects'
    'faad2: ADTS AAC support'
    'libgme: support for chiptunes from various platforms'
    'libsidplayfp: C64 music support'
    'opusfile: Opus support'
    'wildmidi: MIDI support'
    'ffmpeg' 'libsamplerate' 'wavpack'
)

_snapshot="${_name}-${pkgver}"
source=("${_snapshot}.tar.bz2::${url}/files/${_name}/${pkgver%.*}/${_snapshot}.tar.bz2")
sha256sums=('2d8d5be8ed81dfa3b67de98b00800f7ea0fe9ac2d0f912e49265b0f4f7f5693f')

build() {
    cd "${srcdir}/${_snapshot}"

    cmake . -DCMAKE_INSTALL_PREFIX=/usr \
        -DCMAKE_INSTALL_LIBDIR=lib \
        -DUSE_HAL:BOOL=FALSE

    make
}

package() {
    cd "${srcdir}/${_snapshot}"
    make DESTDIR="${pkgdir}" install
}
