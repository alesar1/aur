# Maintainer: Alan Beale <the.mrabz@gmail.com>

pkgname=('handbrake-nvenc' 'handbrake-nvenc-cli')
pkgver=1.5.1
pkgrel=1
arch=('x86_64')
url="https://handbrake.fr/"
license=('GPL')
makedepends=('intltool' 'python2' 'nasm' 'wget' 'cmake' 'bzip2' 'gcc-libs' 'xz'
             'zlib' 'libnotify' 'gst-plugins-base' 'gtk3' 'dbus-glib' 'libass'
             'lame' 'libxml2' 'opus' 'libvorbis' 'libtheora' 'libsamplerate'
             'speex' 'x264' 'jansson' 'librsvg' 'libgudev' 'numactl' 'meson')
source=(https://github.com/HandBrake/HandBrake/releases/download/$pkgver/HandBrake-$pkgver-source.tar.bz2
        https://github.com/HandBrake/HandBrake/releases/download/$pkgver/HandBrake-$pkgver-source.tar.bz2.sig)
sha256sums=('3999fe06d5309c819799a73a968a8ec3840e7840c2b64af8f5cdb7fd8c9430f0'
            'SKIP')
validpgpkeys+=('1629C061B3DDE7EB4AE34B81021DB8B44E4A8645') # HandBrake Team <developers@handbrake.fr>
conflicts=('handbrake')

build() {
  cd "$srcdir/HandBrake-$pkgver"

  ./configure --prefix=/usr --enable-nvenc
  make -C build
}

package_handbrake-nvenc() {
  pkgdesc="Multithreaded video transcoder with NVEnc Support"
  depends=('bzip2' 'gcc-libs' 'zlib' 'gst-plugins-base' 'libnotify' 'dbus-glib'
           'gtk3' 'xz' 'libass' 'lame' 'libxml2' 'opus' 'libvorbis' 'libtheora'
           'libsamplerate' 'speex' 'x264' 'jansson' 'librsvg' 'libgudev'
           'desktop-file-utils' 'hicolor-icon-theme')
  optdepends=('gst-plugins-good: for video previews'
              'gst-libav: for video previews'
              'libdvdcss: for decoding encrypted DVDs')

  cd "$srcdir/HandBrake-$pkgver/build"

  make DESTDIR="$pkgdir" install
  rm "$pkgdir/usr/bin/HandBrakeCLI"
}

package_handbrake-nvenc-cli() {
  pkgdesc="Multithreaded video transcoder (CLI) with NVEnc Support"
  depends=('bzip2' 'gcc-libs' 'zlib' 'xz' 'libass' 'lame' 'libxml2' 'opus'
           'libvorbis' 'libtheora' 'libsamplerate' 'speex' 'x264' 'jansson')
  optdepends=('libdvdcss: for decoding encrypted DVDs')

  cd "$srcdir/HandBrake-$pkgver/build"
  install -D HandBrakeCLI "$pkgdir/usr/bin/HandBrakeCLI"
}

# vim:set ts=2 sw=2 et:
