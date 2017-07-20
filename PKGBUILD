# Maintainer: Bruno Pagani <bruno.n.pagani@gmail.com>

_pkgname=mpv
pkgname=${_pkgname}-light
pkgver=0.26.0
pkgrel=1
pkgdesc="Video player based on MPlayer/mplayer2, with selection of features."
url="https://mpv.io"
license=('GPL')
arch=('i686' 'x86_64')
depends=('ffmpeg' 'libxkbcommon' 'libxrandr' 'libxss' 'lua52' 'uchardet' 'libxinerama')
makedepends=('mesa' 'python-docutils')
optdepends=('youtube-dl: for video-sharing websites playback')
options=('!emptydirs' '!buildflags')
provides=("${_pkgname}")
conflicts=("${_pkgname}")
source=(${_pkgname}-${pkgver}.tar.gz::"https://github.com/mpv-player/${_pkgname}/archive/v${pkgver}.tar.gz")
sha256sums=('daf3ef358d5f260f2269f7caabce27f446c291457ec330077152127133b71b46')

prepare() {
  cd ${_pkgname}-${pkgver}

  ./bootstrap.py
}

build() {
  cd ${_pkgname}-${pkgver}

  ./waf configure --prefix=/usr \
    --confdir=/etc/mpv \
    --lua=52arch \
    --enable-zsh-comp \
    --enable-libmpv-shared \
    --enable-termios \
    --enable-shm \
    --disable-encoding \
    --disable-libbluray \
    --disable-rubberband \
    --disable-vapoursynth \
    --disable-vapoursynth-lazy \
    --disable-oss-audio \
    --disable-rsound \
    --disable-pulse \
    --disable-jack \
    --disable-opensles \
    --disable-xv \
    --disable-caca \
    --disable-tv-v4l2 \
    --disable-libv4l2 \
    --disable-audio-input

  ./waf build
}

package() {
  cd ${_pkgname}-${pkgver}

  ./waf install --destdir="${pkgdir}"

  install -m644 DOCS/{encoding.rst,tech-overview.txt} "${pkgdir}"/usr/share/doc/mpv
}
