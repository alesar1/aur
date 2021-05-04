# Maintainer: ValHue <vhuelamo at gmail dot com>
#
# Contributor: satanselbow <igdfpm at gmail dot com>
# Contributor: Artem Sereda <overmind88 at gmail dot com>
#
pkgname="flacon"
pkgver="7.0.1"
pkgrel="1"
pkgdesc="An Audio File Encoder. Extracts audio tracks from an audio CD image to separate tracks."
arch=('i686' 'x86_64' 'aarch64')
url="https://flacon.github.io/"
_url="https://github.com/${pkgname}"
license=('LGPL2.1')
makedepends=('cmake' 'icu' 'qt5-tools')
depends=('hicolor-icon-theme' 'qt5-base' 'uchardet' 'ffmpeg')
optdepends=('flac: For FLAC support'
            'lame: For MP3 support'
            'mac: For APE support'
            'mp3gain: For MP3 Replay Gain support'
            'opus-tools: For OPUS support'
            'sox: For SoX support'
            'ttaenc: For TrueAudio support'
            'vorbis-tools: For OGG support'
            'vorbisgain: For OGG Replay Gain support'
            'wavpack: For WavPack support'
)
conflicts=('flacon-git')

source=("${pkgname}-${pkgver}.tar.gz::${_url}/${pkgname}/archive/v${pkgver}.tar.gz")
sha256sums=('f63b959099e7b97b02a7f9ccf2c922a99de6c0d1ec83e74c436fd10e41630b6e')

build() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    mkdir -p build

    cd build
    cmake .. -DCMAKE_INSTALL_PREFIX=/usr
    make
}

package() {
    cd "${srcdir}/${pkgname}-${pkgver}/build"
    install -D -m644 ../LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
    make DESTDIR="${pkgdir}" install
}

# vim: set ts=4 sw=4 et syn=sh ft=sh:
