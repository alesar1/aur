# Maintainer: Benjamin Landis <bmlandis2010@gmail.com>

pkgname=mpv-vapoursynth-git
pkgver=r1.8121d958
pkgrel=1
pkgdesc='a free, open source, and cross-platform media player (with Vapoursynth libs)'
arch=('i686' 'x86_64' 'armv6h' 'armv7h' 'aarch64')
license=('GPL3')
url='https://mpv.io/'
depends=('alsa-lib' 'libasound.so' 'desktop-file-utils' 'ffmpeg' 'libavcodec.so' 'libavdevice.so'
         'libavfilter.so' 'libavformat.so' 'libavutil.so' 'libswresample.so' 'libswscale.so'
         'glibc' 'hicolor-icon-theme' 'jack' 'libjack.so' 'lcms2' 'liblcms2.so' 'libarchive'
         'libarchive.so' 'libass' 'libass.so' 'libbluray' 'libbluray.so' 'libcaca' 'libcdio'
         'libcdio-paranoia' 'libdrm' 'libdvdnav' 'libdvdread' 'libegl' 'libgl' 'libglvnd'
         'libjpeg' 'libjpeg.so' 'libplacebo' 'libplacebo.so' 'libpulse' 'libpulse.so'
         'libva' 'libva.so' 'libva-drm.so' 'libva-wayland.so' 'libva-x11.so' 'libvdpau' 'libx11'
         'libxext' 'libxinerama' 'libxkbcommon' 'libxkbcommon.so' 'libxrandr' 'libxss'
         'libxv' 'lua52' 'mesa' 'mujs' 'rubberband' 'librubberband.so' 'shaderc'
         'libshaderc_shared.so' 'uchardet' 'vapoursynth' 'vulkan-icd-loader' 'wayland'
         'xdg-utils' 'zlib')
makedepends=('git' 'python-docutils' 'ladspa' 'wayland-protocols'
             'ffnvcodec-headers' 'vulkan-headers' 'waf')
optdepends=('youtube-dl: for video-sharing websites playback')
provides=('mpv')
conflicts=('mpv')
options=('!emptydirs')
validpgpkeys=('145077D82501AA20152CACCE8D769208D5E31419') # sfan5 <sfan5@live.de>
source=("mpv-git::git+https://github.com/mpv-player/mpv.git")
sha256sums=('SKIP')

prepare() {
  cd mpv-git

  # vo_gpu: placebo: update for upstream API changes
  git cherry-pick -n 7c4465cefb27d4e0d07535d368febdf77b579566
}

build() {
  cd mpv-git

  waf configure --prefix=/usr \
    --confdir=/etc/mpv \
    --enable-cdda \
    --enable-dvb \
    --enable-dvdnav \
    --enable-libarchive \
    --enable-libmpv-shared \
    --disable-build-date \
    --enable-vapoursynth

  waf build
}

package() {
  cd mpv-git

  waf install --destdir="$pkgdir"

  install -m0644 DOCS/{encoding.rst,tech-overview.txt} \
    "$pkgdir"/usr/share/doc/mpv

  install -m0644 TOOLS/lua/* \
    -D -t "$pkgdir"/usr/share/mpv/scripts
}
