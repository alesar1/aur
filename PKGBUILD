# Maintainer: ValHue <vhuelamo at gmail dot com>
# https://github.com/ValHue/AUR-PKGBUILDs
#
# Contributor: satanselbow <igdfpm at gmail dot com>
# Contributor: Artem Sereda <overmind88 at gmail dot com>

pkgname="flacon"
pkgver=4.1.0
pkgrel=1
pkgdesc="Extracts individual tracks from one big audio file containing the \
 entire album of music and saves them as separate audio files."
arch=('i686' 'x86_64')
url="https://flacon.github.io/"
license=('LGPL2.1')
makedepends=('cmake' 'icu' 'qt5-tools')
depends=('hicolor-icon-theme' 'qt5-base' 'uchardet' 'ffmpeg')
optdepends=('flac: For FLAC support'
            'vorbis-tools: For OGG support'
            'mac: For APE support'
            'wavpack: For WavPack support'
            'ttaenc: For TrueAudio support'
            'lame: For MP3 support'
            'mp3gain: For MP3 Replay Gain support'
            'opus-tools: For OPUS support'   
            'vorbisgain: For OGG Replay Gain support')
conflicts=('flacon-git')
provides=("${pkgname}")
source=("https://github.com/${pkgname}/${pkgname}/archive/v${pkgver}.tar.gz")
sha256sums=('8e9b7e9b12b79d7dbe1b1e4f47d7561538a62a55ab752a7269736a77bf56dd70')

build() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    mkdir build

    cd build
    cmake .. -DCMAKE_INSTALL_PREFIX=/usr
    make
}

package() {
    cd "${srcdir}/${pkgname}-${pkgver}/build"
    install -d ${pkgdir}/usr/share/licenses/${pkgname}
    install -m 644 ../LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE
    make DESTDIR="${pkgdir}" install
}

# vim:set ts=4 sw=2 ft=sh et:
